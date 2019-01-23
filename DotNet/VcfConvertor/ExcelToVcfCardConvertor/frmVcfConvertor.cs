using NPOI.SS.UserModel;
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

namespace ExcelToVcfCardConvertor
{
    public partial class frmVcfConvertor : Form
    {
        public frmVcfConvertor()
        {
            InitializeComponent();
        }

        private void btnUploadfile_Click(object sender, EventArgs e)
        {
            try
            {
                if(DialogResult.OK == ofdExcel.ShowDialog())
                {
                    txtFileName.Text = ofdExcel.FileName;
                    FileInfo fileInfo = new FileInfo(txtFileName.Text.Trim());
                    string vcfFileName = $"{fileInfo.DirectoryName }\\Data{DateTime.Now.ToString("ddMMyyyyHHmmss")}.vcf";
                    txtVcfFileName.Text = vcfFileName;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnVcfConvertor_Click(object sender, EventArgs e)
        {
            try
            {               
                if(txtFileName.Text.Trim() != "" && txtVcfFileName.Text.Trim() != "")
                {
                    FileInfo fileInfo = new FileInfo(txtFileName.Text.Trim());                    
                    if (fileInfo.Exists )
                    {
                        ExcelOperation excelOperation = new ExcelOperation();
                        DataTable dataTable = excelOperation.GetRequestsDataFromExcel(txtFileName.Text.Trim());

                        if(dataTable != null && dataTable.Rows.Count != 0)
                        {
                            
                            StringBuilder stringBuilder = new StringBuilder();
                            foreach (DataRow item in dataTable.Rows)
                            {
                                stringBuilder.AppendLine("BEGIN:VCARD");
                                stringBuilder.AppendLine("VERSION:3.0");
                                if(item["Name"]?.ToString() != null)
                                {
                                    if(item["Name"].ToString() == null)
                                    {
                                        continue;
                                    }
                                    stringBuilder.AppendLine("FN:" + item["Name"].ToString());

                                    //stringBuilder.Append(" N:");
                                    //string[] NString = item["Name"].ToString().Split(' ');
                                    //foreach (var N in NString)
                                    //{
                                    //    stringBuilder.Append(N+";");
                                    //}
                                    //stringBuilder.AppendLine();
                                    

                                    if (item["Telephone"]?.ToString() != null)
                                    {
                                        //stringBuilder.AppendLine("TEL;TYPE=work,voice;VALUE=uri:tel:" + item["Telephone"]?.ToString());
                                        stringBuilder.AppendLine("TEL;TYPE=CELL:" + item["Telephone"]?.ToString());
                                    }

                                    if (item["Email"]?.ToString() != null)
                                    {
                                        stringBuilder.AppendLine("EMAIL:" + item["Email"].ToString());                                        
                                    }
                                }
                                stringBuilder.AppendLine("END:VCARD");
                                //BEGIN: VCARD
                                //VERSION:3.0
                                //FN:                                 
                                //TEL; TYPE = CELL:
                                //EMAIL:                               
                                //END: VCARD
                            }       

                            using (StreamWriter sw = new StreamWriter(txtVcfFileName.Text.Trim(), true))
                            {
                                sw.Write(stringBuilder);
                            }
                            MessageBox.Show("vCard Created Successfully");
                        }
                    }
                    else
                    {
                        MessageBox.Show("File not found. Select the File. & Try Again");
                    }
                }
                else
                {
                    MessageBox.Show("Select the File. & Try Again");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnClear_Click(object sender, EventArgs e)
        {
            try
            {
                txtFileName.Text = "";
                txtVcfFileName.Text = "";
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnExcelFormat_Click(object sender, EventArgs e)
        {
            try
            {
                if (DialogResult.OK == sfdExcel.ShowDialog())
                {
                    DataTable dataTable = new DataTable();
                    dataTable.Columns.Add("Name");
                    dataTable.Columns.Add("Telephone");
                    dataTable.Columns.Add("Email");
                    dataTable.AcceptChanges();

                    DataRow dr = dataTable.NewRow();
                    dr["Name"] = "Chandrahas Poojari";
                    dr["Telephone"] = "8655353527";
                    dr["Email"] = "poojari.chandrahas@gmail.com";
                    dataTable.Rows.Add(dr);



                    string Ext = Path.GetExtension(sfdExcel.FileName);
                    IWorkbook workbook = ExcelOperation.DataToExcelViaWB(Ext, dataTable);

                    using (var fs = new FileStream("" + sfdExcel.FileName, FileMode.Create, FileAccess.ReadWrite))
                    {
                        workbook.Write(fs);
                    }

                    MessageBox.Show("Excel Format Created Successfully");
                }
                
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnClickInformation_Click(object sender, EventArgs e)
        {
            try
            {
                Process.Start("https://www.linkedin.com/in/chandrahaspoojari/");
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
