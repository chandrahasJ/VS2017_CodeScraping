namespace ExcelToVcfCardConvertor
{
    partial class frmVcfConvertor
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(frmVcfConvertor));
            this.ofdExcel = new System.Windows.Forms.OpenFileDialog();
            this.btnUploadfile = new System.Windows.Forms.Button();
            this.btnVcfConvertor = new System.Windows.Forms.Button();
            this.btnClear = new System.Windows.Forms.Button();
            this.txtFileName = new System.Windows.Forms.TextBox();
            this.txtVcfFileName = new System.Windows.Forms.TextBox();
            this.btnExcelFormat = new System.Windows.Forms.Button();
            this.sfdExcel = new System.Windows.Forms.SaveFileDialog();
            this.label1 = new System.Windows.Forms.Label();
            this.btnClickInformation = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // ofdExcel
            // 
            this.ofdExcel.Filter = "Excel 2003 (*.xls)|*.xls|Excel 2007 (*.xlsx)|*.xlsx";
            // 
            // btnUploadfile
            // 
            this.btnUploadfile.Location = new System.Drawing.Point(398, 15);
            this.btnUploadfile.Name = "btnUploadfile";
            this.btnUploadfile.Size = new System.Drawing.Size(104, 31);
            this.btnUploadfile.TabIndex = 0;
            this.btnUploadfile.Text = "Browse Excel File";
            this.btnUploadfile.UseVisualStyleBackColor = true;
            this.btnUploadfile.Click += new System.EventHandler(this.btnUploadfile_Click);
            // 
            // btnVcfConvertor
            // 
            this.btnVcfConvertor.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnVcfConvertor.Location = new System.Drawing.Point(11, 94);
            this.btnVcfConvertor.Name = "btnVcfConvertor";
            this.btnVcfConvertor.Size = new System.Drawing.Size(149, 54);
            this.btnVcfConvertor.TabIndex = 1;
            this.btnVcfConvertor.Text = "Vcf Convertor";
            this.btnVcfConvertor.UseVisualStyleBackColor = true;
            this.btnVcfConvertor.Click += new System.EventHandler(this.btnVcfConvertor_Click);
            // 
            // btnClear
            // 
            this.btnClear.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnClear.Location = new System.Drawing.Point(176, 94);
            this.btnClear.Name = "btnClear";
            this.btnClear.Size = new System.Drawing.Size(89, 54);
            this.btnClear.TabIndex = 2;
            this.btnClear.Text = "Clear";
            this.btnClear.UseVisualStyleBackColor = true;
            this.btnClear.Click += new System.EventHandler(this.btnClear_Click);
            // 
            // txtFileName
            // 
            this.txtFileName.Location = new System.Drawing.Point(11, 21);
            this.txtFileName.Name = "txtFileName";
            this.txtFileName.Size = new System.Drawing.Size(366, 20);
            this.txtFileName.TabIndex = 3;
            // 
            // txtVcfFileName
            // 
            this.txtVcfFileName.Location = new System.Drawing.Point(11, 58);
            this.txtVcfFileName.Name = "txtVcfFileName";
            this.txtVcfFileName.Size = new System.Drawing.Size(486, 20);
            this.txtVcfFileName.TabIndex = 5;
            // 
            // btnExcelFormat
            // 
            this.btnExcelFormat.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnExcelFormat.Location = new System.Drawing.Point(285, 94);
            this.btnExcelFormat.Name = "btnExcelFormat";
            this.btnExcelFormat.Size = new System.Drawing.Size(212, 54);
            this.btnExcelFormat.TabIndex = 6;
            this.btnExcelFormat.Text = "Get Recommended Excel Format";
            this.btnExcelFormat.UseVisualStyleBackColor = true;
            this.btnExcelFormat.Click += new System.EventHandler(this.btnExcelFormat_Click);
            // 
            // sfdExcel
            // 
            this.sfdExcel.DefaultExt = "*.xlsx";
            this.sfdExcel.FileName = "RecommendedFormat";
            this.sfdExcel.Filter = "Excel 2007 (*.xlsx)|*.xlsx";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(289, 158);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(169, 13);
            this.label1.TabIndex = 7;
            this.label1.Text = "Developed By Chandrahas Poojari";
            // 
            // btnClickInformation
            // 
            this.btnClickInformation.Location = new System.Drawing.Point(461, 154);
            this.btnClickInformation.Name = "btnClickInformation";
            this.btnClickInformation.Size = new System.Drawing.Size(36, 21);
            this.btnClickInformation.TabIndex = 8;
            this.btnClickInformation.Text = "Info";
            this.btnClickInformation.UseVisualStyleBackColor = true;
            this.btnClickInformation.Click += new System.EventHandler(this.btnClickInformation_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.btnExcelFormat);
            this.groupBox1.Controls.Add(this.btnClickInformation);
            this.groupBox1.Controls.Add(this.btnUploadfile);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Controls.Add(this.btnVcfConvertor);
            this.groupBox1.Controls.Add(this.btnClear);
            this.groupBox1.Controls.Add(this.txtVcfFileName);
            this.groupBox1.Controls.Add(this.txtFileName);
            this.groupBox1.Location = new System.Drawing.Point(12, 12);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(509, 187);
            this.groupBox1.TabIndex = 9;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Convertor";
            // 
            // frmVcfConvertor
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(534, 208);
            this.Controls.Add(this.groupBox1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "frmVcfConvertor";
            this.Text = "Excel To VCF Convertor";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.OpenFileDialog ofdExcel;
        private System.Windows.Forms.Button btnUploadfile;
        private System.Windows.Forms.Button btnVcfConvertor;
        private System.Windows.Forms.Button btnClear;
        private System.Windows.Forms.TextBox txtFileName;
        private System.Windows.Forms.TextBox txtVcfFileName;
        private System.Windows.Forms.Button btnExcelFormat;
        private System.Windows.Forms.SaveFileDialog sfdExcel;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnClickInformation;
        private System.Windows.Forms.GroupBox groupBox1;
    }
}