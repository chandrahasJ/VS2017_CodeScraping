using MediaInfoLib;
using Microsoft.WindowsAPICodePack.Shell;
using Microsoft.WindowsAPICodePack.Shell.PropertySystem;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace VideoLengthCalculator
{
    public class Program
    {
        static void Main(string[] args)
        {
            StartJourney:
            try
            {
                List<FileInformation> lstFileLists = new List<FileInformation>();
                Console.WriteLine("Welcome to Video Length Calculator- 2 Level Searchs");
                Console.WriteLine("Enter\\Copy the Video Path in Console.Enter Q for Quiting.");
                string Path = Console.ReadLine();
                if (Path.Trim() == "")
                {
                    goto StartJourney;
                }
                else if (Path.Trim().ToUpper() == "Q")
                {

                }
                else if (Directory.Exists(Path))
                {
                    
                    if (Directory.GetFiles(Path).Length > 0)
                    {
                        foreach (var File in new DirectoryInfo(Path).GetFiles())
                        {
                            //GetFolderVideoLengthViaMediaInfo(Path,ref lstFileLists);
                            GetFolderVideoLengthViaCodePack(Path, ref lstFileLists);
                        }
                    }

                    if (Directory.GetDirectories(Path).Length > 0)
                    {
                        string[] Directories = Directory.GetDirectories(Path);
                        foreach (string strDirectory in Directories)
                        {
                            if (Directory.GetFiles(strDirectory).Length > 0)
                            {
                                //GetFolderVideoLengthViaMediaInfo(strDirectory,ref lstFileLists);
                                GetFolderVideoLengthViaCodePack(strDirectory, ref lstFileLists);
                            }
                        }
                    }

                    if (lstFileLists.Count == 0)
                    {
                        goto StartJourney;
                    }
                    else
                    {
                        //http://stackoverflow.com/questions/970178/c-how-to-use-the-enumerable-aggregate-method
                        TimeSpan TotalTime = lstFileLists.Select(t => t.FileLength).Aggregate(TimeSpan.Zero, (subTotal, t) => subTotal.Add(t));
                        Console.WriteLine("Total Video Count : " + lstFileLists.Count);
                        Console.WriteLine("Total PlayTime : " + ToReadableString(TotalTime));
                        goto StartJourney;
                    }
                }

                Console.WriteLine("To Quit Press any Key...");
                Console.ReadLine();
            }            
            catch (Exception ex)
            {
                Console.WriteLine("Error occured :> "+ex.Message);
                goto StartJourney;
            }          
        }


        public static void GetFolderVideoLengthViaCodePack(string strDirectory, ref List<FileInformation> lstFileLists)
        {
            //http://markheath.net/post/how-to-get-media-file-duration-in-c
            foreach (var File in new DirectoryInfo(strDirectory).GetFiles())
            {
                using (var shell = ShellObject.FromParsingName(File.FullName))
                {
                    IShellProperty prop = shell.Properties.System.Media.Duration;
                    if(prop.ValueAsObject != null)
                    {
                        var _timeSpan = (ulong)prop.ValueAsObject;

                        var _fileSize = (ulong)shell.Properties.System.Size.ValueAsObject;


                        lstFileLists.Add(new FileInformation()
                        {
                            FileName = File.Name,
                            FileSize = _fileSize.ToString(),
                            FileLength = TimeSpan.FromTicks((long)_timeSpan)
                        });
                    }                    
                }
            }
        }

        public static void GetFolderVideoLengthViaMediaInfo(string strDirectory,ref List<FileInformation> lstFileLists)
        {            
            foreach (var File in new DirectoryInfo(strDirectory).GetFiles())
            {
                using (var mi = new MediaInfo())
                {
                    mi.Open(File.FullName);
                    string information = mi.Inform();
                    Dictionary<string, string> Data = new Dictionary<string, string>();
                    string[] segergationInFormation = Regex.Split(information, "\n");
                    foreach (string info in segergationInFormation)
                    {
                        string[] segergationInformation2 = Regex.Split(info, ": ");
                        if (segergationInformation2.Length == 2)
                        {
                            string LHS = segergationInformation2[0].Replace('\n', ' ').Replace('\r', ' ').Trim();
                            string RHS = segergationInformation2[1].Replace('\n', ' ').Replace('\r', ' ').Trim();
                            if (!Data.ContainsKey(LHS))
                            {
                                Data.Add(LHS, RHS);
                            }
                        }
                    }

                    if(Data.ContainsKey("Duration"))
                    {
                        string duration = Data["Duration"].Replace("mn", ":").Replace("s", "").Replace(" ", "").Trim();
                        if (duration != "")
                        {
                            lstFileLists.Add(new FileInformation()
                            {
                                FileName = File.Name,
                                FileSize = Data["File size"],
                                FileLength = TimeSpan.Parse(duration)
                            });
                        }
                    }                   
                }
            }
        }

        //https://stackoverflow.com/questions/842057/how-do-i-convert-a-timespan-to-a-formatted-string
        public static string ToReadableAgeString(TimeSpan span)
        {
            return string.Format("{0:0}", span.Days / 365.25);
        }

        public static string ToReadableString(TimeSpan span)
        {
            string formatted = string.Format("{0}{1}{2}{3}",
                span.Duration().Days > 0 ? string.Format("{0:0} day{1}, ", span.Days, span.Days == 1 ? String.Empty : "s") : string.Empty,
                span.Duration().Hours > 0 ? string.Format("{0:0} hour{1}, ", span.Hours, span.Hours == 1 ? String.Empty : "s") : string.Empty,
                span.Duration().Minutes > 0 ? string.Format("{0:0} minute{1}, ", span.Minutes, span.Minutes == 1 ? String.Empty : "s") : string.Empty,
                span.Duration().Seconds > 0 ? string.Format("{0:0} second{1}", span.Seconds, span.Seconds == 1 ? String.Empty : "s") : string.Empty);

            if (formatted.EndsWith(", ")) formatted = formatted.Substring(0, formatted.Length - 2);

            if (string.IsNullOrEmpty(formatted)) formatted = "0 seconds";

            return formatted;
        }


    }

    public class FileInformation
    {
        public int ID { get; set; }
        public string FileName { get; set; }
        public string FileSize { get; set; }
        public TimeSpan FileLength { get; set; }
    }
}
