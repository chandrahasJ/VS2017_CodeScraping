using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text.RegularExpressions;

namespace DragAndSelectWebProject_Trail
{
    /// <summary>
    /// https://www.c-sharpcorner.com/blogs/convert-json-string-to-datatable-in-asp-net1
    /// https://www.aspforums.net/Threads/124155/How-to-convert-json-string-to-Datatable-using-C-and-VBNet-in-ASPNet/
    /// Country Json was from some project from github. Thank you mate.
    /// </summary>
    public class ConvertJsonStringToDataTable
    {
        public DataTable GetDataTableFromJsonString(string json)
        {
            var jsonLinq = JObject.Parse(json);

            // Find the first array using Linq
            var srcArray = jsonLinq.Descendants().Where(d => d is JArray).First();
            var trgArray = new JArray();
            foreach (JObject row in srcArray.Children<JObject>())
            {
                var cleanRow = new JObject();
                foreach (JProperty column in row.Properties())
                {
                    // Only include JValue types
                    if (column.Value is JValue)
                    {
                        cleanRow.Add(column.Name, column.Value);
                    }
                }
                trgArray.Add(cleanRow);
            }

            return JsonConvert.DeserializeObject<DataTable>(trgArray.ToString());
        }
    }
}