using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;

namespace DragAndSelectWebProject_Trail
{
    public partial class Main : System.Web.UI.Page
    {
        ConvertJsonStringToDataTable jDt = new ConvertJsonStringToDataTable();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                populateGrid();
            }
            //populateGrid();
        }

        private DataTable ConvertJsonInToDataTable()
        {
            string FileName = "country.json";
            var stream = File.OpenText(Server.MapPath(FileName));
            string JsonString = stream.ReadToEnd();
            return jDt.GetDataTableFromJsonString(JsonString);
        }

        private void populateGrid()
        {
            gvData.DataSource = ConvertJsonInToDataTable();
            gvData.DataBind();
        }

        protected void gvData_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            gvData.PageIndex = e.NewPageIndex;
            populateGrid();
        }

        protected void gvData_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {                             
                DataRowView dr = (DataRowView)e.Row.DataItem;
                string ID = dr[0].ToString();

                GridViewRow row = e.Row;
                row.Attributes["id"] = "tr_"+ID;

                CheckBox checkbox = new CheckBox();
                checkbox.ID = "chkChecked_" + ID;
                checkbox.Style.Add("checked", "false");
                checkbox.ClientIDMode = ClientIDMode.Static;
                e.Row.Cells[0].Controls.Add(checkbox);


            }
        }

        protected void gvData_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if(e.CommandName == "Save")
            {
                lblPrint.Text = "SAve DAte :> "+DateTime.Now;
            }
        }
    }
}