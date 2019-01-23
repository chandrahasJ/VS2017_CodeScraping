using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ExcelToVCFConvertorExe
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            byte[] ExeFile = Properties.Resources.ExcelToVCFConvertorSetup;
            string FilePath = Application.StartupPath + "\\ExcelToVCFConvertorSetup_" + DateTime.Now.ToString("ddMMyyyyHHmmss") + ".msi";
            File.WriteAllBytes(FilePath, ExeFile);
            Process.Start(FilePath);

            this.Close();
        }
    }
}
