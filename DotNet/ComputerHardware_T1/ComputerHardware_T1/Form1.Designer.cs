namespace ComputerHardware_T1
{
    partial class Form1
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
            this.btnSCD = new System.Windows.Forms.Button();
            this.txtData = new System.Windows.Forms.TextBox();
            this.btnCRCD = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btnSCD
            // 
            this.btnSCD.Location = new System.Drawing.Point(12, 12);
            this.btnSCD.Name = "btnSCD";
            this.btnSCD.Size = new System.Drawing.Size(154, 46);
            this.btnSCD.TabIndex = 0;
            this.btnSCD.Text = "Start Collecting Data";
            this.btnSCD.UseVisualStyleBackColor = true;
            this.btnSCD.Click += new System.EventHandler(this.btnSCD_Click);
            // 
            // txtData
            // 
            this.txtData.Location = new System.Drawing.Point(12, 64);
            this.txtData.Multiline = true;
            this.txtData.Name = "txtData";
            this.txtData.Size = new System.Drawing.Size(984, 375);
            this.txtData.TabIndex = 1;
            // 
            // btnCRCD
            // 
            this.btnCRCD.Location = new System.Drawing.Point(189, 12);
            this.btnCRCD.Name = "btnCRCD";
            this.btnCRCD.Size = new System.Drawing.Size(154, 46);
            this.btnCRCD.TabIndex = 2;
            this.btnCRCD.Text = "Start Collecting Remote Computer Data";
            this.btnCRCD.UseVisualStyleBackColor = true;
            this.btnCRCD.Click += new System.EventHandler(this.btnCRCD_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1004, 449);
            this.Controls.Add(this.btnCRCD);
            this.Controls.Add(this.txtData);
            this.Controls.Add(this.btnSCD);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnSCD;
        private System.Windows.Forms.TextBox txtData;
        private System.Windows.Forms.Button btnCRCD;
    }
}

