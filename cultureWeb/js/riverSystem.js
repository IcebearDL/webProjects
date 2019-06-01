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


function showJiang(name) {
    var id_second = name + "-second";
    var allClass = document.querySelectorAll(".second-entrance");

    for(var i = 0; i<allClass.length; i++){
        // document.write(allClass[i].id);
        if(allClass[i].style.display==="block"){
            if(allClass[i].id===id_second){
                allClass[i].style.display="none";
            }
            else{
                allClass[i].style.display="none";
                // slice用于选取字符串的从第几个到第几个元素
                showJiang_mose_out(allClass[i].id.slice(0,-7));
            }
        }
        else{
            if(allClass[i].id===id_second){
                allClass[i].style.display="block";
            }
        }
    }
    // 对点击多个进行算法处理
    // findBlock();
    // // 找所有classname为.second-entrance的对象，循环判断是否有已经出现的，即已经block的对象，存在则，
    // function findBlock() {
    //
    // }

}

function showJiang_mose_over(name) {
    // window.cancelBubble = true 阻止js冒泡
    // img即椭圆
    var id_img = name + "-mose-img";
    // text即文字
    var id_text = name + "-mose-text";
    var img = document.getElementById(id_img);
    var text = document.getElementById(id_text);

    var img_class_name = name + "-mose-img-over";
    var text_class_name = name + "-mose-text-over";
    img.className = img_class_name;
    text.className = text_class_name;
    document.getElementById(name+"-level").style.zIndex = "99";
    document.getElementById(name+"-second").style.zIndex = "99";
}

function showJiang_mose_out(name) {
    // img即椭圆
    var id_img = name + "-mose-img";
    // text即文字
    var id_text = name + "-mose-text";
    var img = document.getElementById(id_img);
    var text = document.getElementById(id_text);

    var id_second = name + "-second";
    var img_class_name = name + "-mose-img-out";
    var text_class_name = name + "-mose-text-out";
    var second_part = document.getElementById(id_second);
    if(second_part.style.display==="none"){
        img.className = img_class_name;
        text.className = text_class_name;
        document.getElementById(name+"-level").style.zIndex = "1";
    }
}
