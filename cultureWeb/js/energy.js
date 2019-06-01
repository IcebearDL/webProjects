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

function showProvince() {
    var div1 = document.getElementById("Province");
    display(div1);

}

function showRoad() {
    var div2 = document.getElementById("Road");
    display(div2);
}

function showWater() {
    var div3 = document.getElementById("Water");
    var white = document.getElementById("WhiteText");
    var black = document.getElementById("BlackText");
    display(div3);
    display(white);
    display(black);
}

/* 使用js做擦除效果demo
function showProvince() {
    let div1 = document.getElementById("Province");
    if(div1.style.display==="none")
    {
        div1.style.width = "0px";
        div1.style.display="block";
    }
    else
    {
        div1.style.width = "0px";
        div1.style.display="none";
    }
    // 注意，img标签的width就是object.width 无需加.style;且这里获取的width无需强制转换
    let widNum = document.querySelectorAll("img")[6].width;

    // 注意，这里直接用for循环里的setTimeout是有问题的
    // function test(x) {
    //     div1.style.width = x +"px";
    // }
    //
    // if(div1.style.display==="block"){
    //     for(let wid=0; wid<=widNum; wid++){
    //         setTimeout(function(){test(wid)},1000);
    //     }
    // }

    let wid = 0;
    change();

    function change() {
        if(div1.style.display==="block"){
            if(wid<widNum){
                wid = wid + 1;
                div1.style.width = wid + "px";
                setTimeout(function (){change()},1);
            }
        }
    }
}
*/

