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

function highLight(div) {

    let div1 = document.getElementById("upLight");
    let div2 = document.getElementById("middleLight");
    let div3 = document.getElementById("downLight");

    if(div ==='div1'){
        div2.style.display = "none";
        div3.style.display = "none";
        display(div1);
    }else if(div ==='div2'){
        div1.style.display = "none";
        div3.style.display = "none";
        display(div2);
    }else if(div ==='div3'){
        div1.style.display = "none";
        div2.style.display = "none";
        display(div3);
    }
}

function showBiologyDetail(name) {
    let id_second = name + "-index";
    let allClass = document.querySelectorAll(".biology-detail");

    for(let i = 0; i<allClass.length; i++){
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