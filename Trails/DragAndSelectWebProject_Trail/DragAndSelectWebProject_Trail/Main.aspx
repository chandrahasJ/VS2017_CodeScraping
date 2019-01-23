<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Main.aspx.cs" Inherits="DragAndSelectWebProject_Trail.Main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>DataGrid Drag & Select</title>
    <style type="text/css">

    </style>
    <script src="Scripts/jquery-3.3.1.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function (e) {
            var trData = new Array();

            $("td").on("mousedown mousemove", function (e) {                                 
                var ID = $(e.currentTarget).closest("tr").attr('id');                 
                if (trData.indexOf(ID) == -1) {
                    console.log(ID);
                    trData.push(ID);
                }
            });
             
            $("td").on("mouseup", function (e) {
                //debugger;
                var trValue = '';
                trData.forEach(function (value) {
                   
                    var checkBox = $("#" + value + "  input:checkbox");
                    trValue = trValue + value + checkBox.attr('checked') + '<br/>';
                    checkBox.attr('checked', true);
                })
                $("#displayMouseDownID").html(trValue);  
                trData = [];
            });

            var width = new Array();
            var table = $("table[id*=gvData]"); //Pass your gridview id here.
            table.find("th").each(function (i) {
                width[i] = $(this).width();
            });
            headerRow = table.find("tr:first");
            headerRow.find("th").each(function (i) {
                $(this).width(width[i]);
            });
            firstRow = table.find("tr:first").next();
            firstRow.find("td").each(function (i) {
                $(this).width(width[i]);
            });
            var header = table.clone();
            header.empty();
            header.append(headerRow);
           // header.append(firstRow);
            header.css("width", width);
            $("#container").before(header);
            table.find("tr:first td").each(function (i) {
                $(this).width(width[i]);
            });
            $("#container").height(300);
            $("#container").width(table.width() + 20);
            $("#container").append(table);
            
        });
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:Label ID="lblPrint" runat="server" Text=""></asp:Label>
        <div>
            Drag to Select the Grid Items
        </div>
        <div style="margin-left:250px; ">
            <div id="container" style="overflow: scroll; overflow-x: hidden">
            </div>
            <asp:GridView ID="gvData" runat="server" CellPadding="4" ForeColor="#333333" GridLines="Both"
                PageSize="20" AllowPaging="true" OnRowDataBound="gvData_RowDataBound" ClientIDMode="Static"
                OnRowCommand="gvData_RowCommand"  AutoGenerateColumns="false" HeaderStyle-CssClass="HeaderFreez"
                OnPageIndexChanging="gvData_PageIndexChanging"> 
                <Columns>
                    <asp:BoundField DataField="id" />
                    <asp:BoundField DataField="sortname" />
                    <asp:BoundField DataField="name" />
                    <asp:BoundField DataField="phoneCode" />
                    <asp:ButtonField ButtonType="Button" CommandName="Save" Text="Save" />
                </Columns>
            </asp:GridView>
        </div>
        <div id="displayMouseDownID">

        </div>
    </form>
</body>
</html>
