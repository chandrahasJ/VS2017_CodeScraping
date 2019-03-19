

function createButtonAndAddit(){

    var getflightprintticket =  $(".flightprintticket");

    console.log(getflightprintticket.length)

    for (let index = 0; index < getflightprintticket.length; index++) {
        const element = getflightprintticket[index];
        
        var div = document.createElement( 'div' );
        var btnForm = document.createElement( 'form' );
        var btn = document.createElement( 'input' );

        //append all elements
        $(element).after(div);
        div.appendChild( btnForm );
        btnForm.appendChild( btn );

        //set attributes for div
        div.id = 'myButtonDivID_'+index;
        var _position = $(element).position();
         
        div.style.cssText = "left:"+(_position.left)+"top:"+(_position.top+100)+" position:absolute;z-index:1000000000;"
        //div.style.cssText = "position:absolute;z-index:1000000000;"
        div.style.backgroundColor = 'black';

        //set attributes for btnForm
        btnForm.action = '';

        //set attributes for btn  
        btn.id ="button_"+index;  
        btn.type = 'button';
        btn.value = 'Get Data';
        btn.classList.add("statusconfirmed");
        btn.classList.add("_GetDataBtn");
        //btn.addEventListener("click",);
        
    } 
    
}



$(document).ready(function(){
    createButtonAndAddit();

    $("._GetDataBtn").bind("click",function(e){
        var _data = $("#"+e.target.id).closest(".flightdetails");
        console.log(_data.html());
    });
});