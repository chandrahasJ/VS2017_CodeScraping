

function createButtonAndAddit(appendDiv){
    var div = document.createElement( 'div' );
    var btnForm = document.createElement( 'form' );
    var btn = document.createElement( 'input' );

    //append all elements
    document.body.appendChild( div );
    div.appendChild( btnForm );
    btnForm.appendChild( btn );

    //set attributes for div
    div.id = 'myDivId';
    div.style.cssText = "top:10%;left:10%;position:fixed;z-index:1000000000;"
    div.style.backgroundColor = 'black';

    //set attributes for btnForm
    btnForm.action = '';

    //set attributes for btn
    //"btn.removeAttribute( 'style' );
    btn.type = 'button';
    btn.value = 'Get Data';
    btn.style.position = 'absolute';
    btn.style.top = '50%';
    btn.style.left = '50%';
    btn.addEventListener("click",sayHello);
}


function sayHello(){
   
}

$(document).ready(function(){
    var getDivCount = $("div");
    console.log(getDivCount)    ;
    var appendDiv = getDivCount.eq(12);
    console.log(appendDiv)  

    
    console.log($(appendDiv)[0])  
    createButtonAndAddit(appendDiv);
});