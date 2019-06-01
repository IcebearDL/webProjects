function display(x) {
    if(x.style.display==="none")
    {
        x.style.display="block";
    }
    else
    {
        x.style.display="none";
    }
}


function showDetail(name) {
    var id_second = name + "-index";
    var allClass = document.querySelectorAll(".second-index");

    for(var i = 0; i<allClass.length; i++){
        // document.write(allClass[i].id);
        if(allClass[i].style.display==="block"){
            if(allClass[i].id===id_second){
                allClass[i].style.display="none";
            }
            else{
                allClass[i].style.display="none";
            }
        }
        else{
            if(allClass[i].id===id_second){
                allClass[i].style.display="block";
            }
        }
    }
}

function dragStart(event) {
    // event.preventDefault();
    // event.dataTransfer.effectAllowed = "move";
}

function draging(event) {
    var x = event.pageX;
    // event.dataTransfer.effectAllowed = "move";
    var w = 1536/1490 ;

    if(x>=22.5&&x<=1505){
        document.querySelector('.watershedColor-drag').style.marginLeft = (x-7.5) + "px";
        document.querySelector('.watershedColor-box2').style.width = ( x*w-w*15 ) + "px";
    }else if(x>1505&&x<=1512){
        document.querySelector('.watershedColor-drag').style.marginLeft = (x-7.5) + "px";
        document.querySelector('.watershedColor-box2').style.width = "1536px";
    }else if(x<22.5){
        document.querySelector('.watershedColor-drag').style.marginLeft = "15px";
        document.querySelector('.watershedColor-box2').style.width = "0px";
    }else {
        document.querySelector('.watershedColor-drag').style.marginLeft = "1505px";
        document.querySelector('.watershedColor-box2').style.width = "1536px";
    }
}

function dragPrevent(event) {
    event.preventDefault();
}

function dragLeave(event) {
    event.preventDefault();
}

function dragEnd(event) {
    var x = event.pageX;

    var w = 1536/1490 ;

    if(x>=22.5&&x<=1512.5){
        document.querySelector('.watershedColor-drag').style.marginLeft = (x-7.5) + "px";
        document.querySelector('.watershedColor-box2').style.width = ( x*w-w*15 ) + "px";
    }else if(x<22.5){
        document.querySelector('.watershedColor-drag').style.marginLeft = "15px";
        document.querySelector('.watershedColor-box2').style.width = "0px";
    }else {
        document.querySelector('.watershedColor-drag').style.marginLeft = "1505px";
        document.querySelector('.watershedColor-box2').style.width = "1536px";
    }
}
