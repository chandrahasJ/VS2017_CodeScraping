using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FullScreen_T1
{
    public partial class Form1 : Form
    {
        private readonly KeyBoardStroke _keyBoardStroke;
        public Form1()
        {
            _keyBoardStroke = new KeyBoardStroke();
            
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.TopMost = true;

            this.FormBorderStyle = FormBorderStyle.None;

            this.WindowState = FormWindowState.Maximized;


        }

        ~Form1()
        {
            _keyBoardStroke.Dispose();
        }
    }
}
