

function createButtonAndAddit_Akbar(){

    var getflightprintticket =  $(".flightprintticket");

    var ref = $(".referenceno > strong > a");
    var div = document.createElement( 'div' );
    var btnForm = document.createElement( 'form' );
    var btn = document.createElement( 'input' );

    //append all elements
    $(ref).after(div);
    div.appendChild( btnForm );
    btnForm.appendChild( btn );

    //set attributes for div
    div.id = 'myButtonDivID_'+1;
    var _position = $(ref).position();
     
    div.style.cssText = "left:"+(_position.left)+"top:"+(_position.top+100)+" position:absolute;z-index:1000000000;"
    //div.style.cssText = "position:absolute;z-index:1000000000;"
    div.style.backgroundColor = 'black';

    //set attributes for btnForm
    btnForm.action = '';

    //set attributes for btn  
    btn.id ="button_"+1;  
    btn.type = 'button';
    btn.value = 'Get Data';
    btn.classList.add("statusconfirmed");
    btn.classList.add("_GetDataBtn");    
}



$(document).ready(function(){
   
    createButtonAndAddit_Akbar();

    $("._GetDataBtn").bind("click",function(e){       
        var _MainDiv =  $(".rightitem > .flightdetails");

        console.log(_MainDiv);

        var _MainParent = $(_MainDiv).parents(".rightitem").find(".itemheadersub > .mainheadright > .headernav:eq(0)");
        console.log($(_MainParent));
        // var _Referenceno = $(".referenceno > strong > a").text();       
        // var _PNRNo = $(_MainParent).find('.itemheadersub > .mainheadright > .headernav:eq(0)').text().split(":")[3];
        // var _AirlineID =  $(_MainParent).find('.airline > .item:eq(1)').html().split("<br>")[0];
        // var _AirlineName =  $(_MainParent).find(".airline > .item:eq(1)").html().split("<br>")[1];
        // var _Refund  = $(_MainParent).find(".refund").attr("title");
        // var _FlightType =  $(_MainParent).find(".flighttype").attr("title");
        // var _BookingType = $(_MainParent).find(".airline > .item:eq(2)").text();



        
        // var jsonData = {
        //     "TicketDetails" : [
        //        {
        //             "_Referenceno" : _Referenceno,                   
        //             "_PNRNo" :_PNRNo,
        //             "_AirlineID" : _AirlineID,
        //             "_AirlineName" :_AirlineName,
        //             "_Refund" : _Refund,
        //             "_FlightType" : _FlightType,
        //             "_BookingType" :_BookingType  
        //         }
        //     ]        
        // };

        // console.log(jsonData)
    });  
});









// var _data = $("#"+e.target.id).closest(".flightdetails");
// var _MainParent = $("#"+e.target.id).parents("div > .rightitem");

// var _Referenceno = $(".referenceno > strong > a").text();       
// var _PNRNo = $(_MainParent).find('.itemheadersub > .mainheadright > .headernav:eq(0)').text().split("|")[1].split(":")[1];
// var _AirlineID =  $(_MainParent).find('.airline > .item:eq(1)').html().split("<br>")[0];
// var _AirlineName =  $(_MainParent).find(".airline > .item:eq(1)").html().split("<br>")[1];
// var _Refund  = $(_MainParent).find(".refund").attr("title");
// var _FlightType =  $(_MainParent).find(".flighttype").attr("title");
// var _BookingType = $(_MainParent).find(".airline > .item:eq(2)").text();


// for (let index = 0; index < getflightprintticket.length; index++) {
//     const element = getflightprintticket[index];
    
//     var div = document.createElement( 'div' );
//     var btnForm = document.createElement( 'form' );
//     var btn = document.createElement( 'input' );

//     //append all elements
//     $(element).after(div);
//     div.appendChild( btnForm );
//     btnForm.appendChild( btn );

//     //set attributes for div
//     div.id = 'myButtonDivID_'+index;
//     var _position = $(element).position();
     
//     div.style.cssText = "left:"+(_position.left)+"top:"+(_position.top+100)+" position:absolute;z-index:1000000000;"
//     //div.style.cssText = "position:absolute;z-index:1000000000;"
//     div.style.backgroundColor = 'black';

//     //set attributes for btnForm
//     btnForm.action = '';

//     //set attributes for btn  
//     btn.id ="button_"+index;  
//     btn.type = 'button';
//     btn.value = 'Get Data';
//     btn.classList.add("statusconfirmed");
//     btn.classList.add("_GetDataBtn");
//     //btn.addEventListener("click",);
    
// } 



// $.ajax({  
//     type: "POST",  
//     url: "https://localhost:44359/api/values/",  
//     contentType: "application/json; charset=utf-8", 
//     data :JSON.stringify(MyValue), 
//     dataType: "json",  
//     success: function (data) {  
//         alert(JSON.stringify(data));                  
         
//         console.log(data);  
//     }, //End of AJAX Success function  

//     failure: function (data) {  
//         alert(data.responseText); 
//         console.log(data); 
//     }, //End of AJAX failure function  
//     error: function (data) {  
//         alert(data.responseText);  
//         console.log(data); 
//     } //End of AJAX error function  

// });      