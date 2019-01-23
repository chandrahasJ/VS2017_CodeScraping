using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ExcelToVcfCardConvertor
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new frmVcfConvertor());
        }

        //1.0.0
        //Product Code {3C86A66D-88FA-4D74-AA16-BE25C67749FB}
        //Upgrade {2E2FE98D-FB51-44D1-88C7-F6F83FCB7FED}


        //1.0.1
        //Product Code {725B511A-A687-4116-A0BA-2D566287E644}
        //Upgrade {2E2FE98D-FB51-44D1-88C7-F6F83FCB7FED}

    }

}
