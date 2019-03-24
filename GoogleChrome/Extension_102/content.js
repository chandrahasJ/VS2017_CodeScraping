

function createButtonAndAddit_Akbar(){

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
    
    try{
       
    }
    catch(ex){
        console.log(ex);
    }
}



$(document).ready(function() {
   
    createButtonAndAddit_Akbar();

    $("._GetDataBtn").bind("click",function(e) {    

        var _IsAgentAvailable = $("#divAgentDtls").find(".fareitemcontainer")
        if(_IsAgentAvailable.length == 0){
            alert("Click on the Agent Details Link to proceed");
            return;
        }

        let _PaxDetailsMainDiv = $(".faredetails > .farecontainer");
        let _PassengerData = new Array();        
        let jsonData = new Array();
       
        /************************************************************************** */
        for (let index = 0; index < _PaxDetailsMainDiv.length; index++) {
            let element = _PaxDetailsMainDiv[index];                  

            if($(element).find(".farepaxname").length != 0){

                let _Pax_Name = $(element).find(".farepaxname").text().trim();
                let _Pax_Type = $(element).find(".farepaxtype").text().trim();
    
                let _Basic_Fare = $(element).find(".fareall:eq(0)").text().trim();
                let _TaxAndCharges = $(element).find(".fareall:eq(1)").text().trim();
                let _Premium = $(element).find(".fareall:eq(2)").text().trim();
    
                let _Mark_Up  = $(element).find(".amdt:eq(0)").text().trim();            
                let _Discount = $(element).find(".amdt:eq(1)").text().trim();
                let _Bill_Difference = $(element).find(".fareall:eq(3)").text().trim();
    
                let _Total = $(element).find(".amdt:eq(2)").text().trim();
    
                let PassengerDetails  = [
                    {
                            "_Pax_Name" : _Pax_Name,                   
                            "_Pax_Type" :_Pax_Type,
                            "_Basic_Fare" : _Basic_Fare,
                            "_TaxAndCharges" :_TaxAndCharges,
                            "_Premium" : _Premium,
    
                            "_Mark_Up" : _Mark_Up,
                            "_Discount" :_Discount,
                            "_Bill_Difference" : _Bill_Difference,
    
                            "_Total" : _Total,
                        }
                    ];   
    
                    _PassengerData.push(PassengerDetails);   
            }                    
        }
        /************************************************************************** */

        /************************************************************************** */
        //var _Agent_ATO_Discount = $(".fareitemcontainer > .faretypepop:eq(2)").text();

        var _Agent_Airline_Fare = $(".fareitemcontainer > .faretypepop:eq(0)").text();
        var _Agent_Airline_Tax =  $(".fareitemcontainer > .faretypepop:eq(1)").text();
        
        var _Agent_ATO_Commission = $(".fareitemcontainer > .faretypepop:eq(2)").text();
        var _Agent_TDS = $(".fareitemcontainer > .faretypepop:eq(3)").text();
        var _Agent_Your_Cost = $(".fareitemcontainer > .faretypepop:eq(4)").text();

        console.log($(".rightitem > .faredetails").find(".fareitemcontainer"));
         console.log($(".fareitemcontainer"));

        var _AgentData = {
            "_Agent_Airline_Fare" : _Agent_Airline_Fare, 
            "_Agent_Airline_Tax" : _Agent_Airline_Tax, 

            "_Agent_ATO_Commission" : _Agent_ATO_Commission, 
            "_Agent_TDS" : _Agent_TDS, 
            "_Agent_Your_Cost" : _Agent_Your_Cost          
        };

        
        /************************************************************************** */

        /************************************************************************** */     

        var _Referenceno = $(".referenceno > strong > a").text(); 
        var getflightdetails =  $(".rightitem > .flightdetails");
        for (let index = 0; index < getflightdetails.length; index++) {
            let _MainDiv =  getflightdetails[index];

            let _PNRNoObject = $(_MainDiv).prev(".itemheadergrey").prev(".itemheadersub").find(".mainheadright > .headernav:eq(0)");            
            let _PNRNo = $(_PNRNoObject).text().split(":")[2].trim(); 

            let _AirlineID =  $(_MainDiv).find('.airline > .item:eq(1)').html().split("<br>")[0].trim();             
            let _AirlineName =  $(_MainDiv).find(".airline > .item:eq(1)").html().split("<br>")[1].trim();             
            let _Refund  = $(_MainDiv).find(".refund").attr("title");                        
            let _FlightType =  $(_MainDiv).find(".flighttype").attr("title");             
            let _BookingType = $(_MainDiv).find(".airline > .item:eq(2)").text().trim();

            let _DepartureMainDiv = $(_MainDiv).find(".sector:eq(0)").html();            
            let _DepartureDetails =_DepartureMainDiv.split("<br>");           

            let _Departure_Origin = "";
            let _Departure_Time = "";
            let _Departure_Date = "";
            if(_DepartureDetails.length == 6){
                _Departure_Origin = _DepartureDetails[2].trim();
                _Departure_Time = _DepartureDetails[3].trim();
                _Departure_Date = _DepartureDetails[4].trim();
            }
            else{
                _Departure_Origin = _DepartureDetails[1].trim();
                _Departure_Time = _DepartureDetails[2].trim();
                _Departure_Date = _DepartureDetails[3].trim();
            }

            let _ArrivalMainDiv = $(_MainDiv).find(".sector:eq(1)").html();            
            let _ArrivalDetails =_ArrivalMainDiv.split("<br>");            

            let _Arrival_Origin = "";
            let _Arrival_Time = "";
            let _Arrival_Date = "";
            if(_ArrivalDetails.length == 6){
                _Arrival_Origin = _ArrivalDetails[2].trim();
                _Arrival_Time = _ArrivalDetails[3].trim();
                _Arrival_Date = _ArrivalDetails[4].trim();
            }
            else{
                _Arrival_Origin = _ArrivalDetails[1].trim();
                _Arrival_Time = _ArrivalDetails[2].trim();
                _Arrival_Date = _ArrivalDetails[3].trim();
            }

            let _DurationMainDiv = $(_MainDiv).find(".duration").html();  
            let _DurationDetails =_DurationMainDiv.split("<br>");   
            
             let _Duration_Type = _DurationDetails[0].trim();
             let _Duration_Time = _DurationDetails[1].trim();

             let TicketDetails  = [
                {
                        "_Referenceno" : _Referenceno,                   
                        "_PNRNo" :_PNRNo,
                        "_AirlineID" : _AirlineID,
                        "_AirlineName" :_AirlineName,
                        "_Refund" : _Refund,
                        "_FlightType" : _FlightType,
                        "_BookingType" :_BookingType,

                        "_Departure_Origin" : _Departure_Origin,
                        "_Departure_Time" : _Departure_Time,
                        "_Departure_Date" : _Departure_Date,

                        "_Arrival_Origin" : _Arrival_Origin,
                        "_Arrival_Time" : _Arrival_Time,
                        "_Arrival_Date" : _Arrival_Date,

                        "_Duration_Type" : _Duration_Type,
                        "_Duration_Time" : _Duration_Time,

                        "_PassengerData" : _PassengerData,

                        "_AgentData" : _AgentData
                    }
                ];     
            jsonData.push(TicketDetails);                
        }
        /************************************************************************** */
        console.log(jsonData);

    });  
});





        // var _MainDiv =  $(".rightitem > .flightdetails");
        // var _AirlineID =  $(_MainDiv).find('.airline > .item:eq(1)').html().split("<br>")[0].trim();
        // var _AirlineName =  $(_MainDiv).find(".airline > .item:eq(1)").html().split("<br>")[1].trim();
        // var _Refund  = $(_MainDiv).find(".refund").attr("title");
        // var _FlightType =  $(_MainDiv).find(".flighttype").attr("title");
        // var _BookingType = $(_MainDiv).find(".airline > .item:eq(2)").text().trim();
        // console.log($(_MainDiv).find(".airline > .item:eq(2)")
        // console.log(jsonData)


    // var _Referenceno = $(".referenceno > strong > a").text();       
        // var _PNRNo = $(_MainParent).find('.itemheadersub > .mainheadright > .headernav:eq(0)').text().split(":")[3];
        // var _AirlineID =  $(_MainParent).find('.airline > .item:eq(1)').html().split("<br>")[0];
        // var _AirlineName =  $(_MainParent).find(".airline > .item:eq(1)").html().split("<br>")[1];
        // var _Refund  = $(_MainParent).find(".refund").attr("title");
        // var _FlightType =  $(_MainParent).find(".flighttype").attr("title");
        // var _BookingType = $(_MainParent).find(".airline > .item:eq(2)").text();




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