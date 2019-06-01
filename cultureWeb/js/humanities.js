function delay() {
    function produceNum() {
        var num1 = Math.random();
        return num1.toFixed(1);
    }
    // 注意单位的问题，单位的转换
    for(var i = 0;i<document.querySelectorAll(".humanities-points").length;i++){
        document.querySelectorAll(".humanities-points")[i].style.animationDelay=produceNum()+"s";
    }
}

// 设置出现的js
function display(x) {
    var div1 = document.getElementById(x);

    //获取当前所有二级界面

    //tips:getElementsByClassName返回的是一个数组列表
    let place_detail = [];
    for (let i = 0; i<10; i++){
        place_detail[i] = document.querySelector('.place-detail'+String(i+1));
    }

    if(div1.style.display==="none")
    {
        for(let i = 0;i< place_detail.length ; i++){
            place_detail[i].style.display = "none";
        }
        div1.style.display="block";
    }
    else
    {
        div1.style.display="none";
    }
}

function clickXiNing() {
    display("QingHai");
}

function clickHeFei() {
    display("AnHui");
}

function clickNanJing() {
    display("JiangSu");
}

function clickLaSa() {
    display("XiZang");
}

function clickChengDu() {
    display("SiChuan");
}

function clickWuHan() {
    display("HuBei");
}

function clickShangHai() {
    display("ShangHai");
}

function clickChongQing() {
    display("ChongQing");
}

function clickChangSha() {
    display("HuNan");
}

function clickKunMing() {
    display("YunNan");
}
