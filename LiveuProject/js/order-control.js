function clickOrder() {
    var div1 = document.getElementById('my-order');
    var div2 = document.getElementById('published-house');
    var div3 = document.getElementById('my-collections');
    div1.style.color = "#ff9d07";
    div1.style.borderBottom = "2px solid #ff9d07";
    div2.style.color = "#484848";
    div2.style.borderBottom = "none";

    var orderbox = document.getElementById('order-box');
    var publishbox = document.getElementById('publish-house-box');
    var box1 = document.getElementById('order-start');
    var box2 = document.getElementById('publish-house');
    orderbox.style.display = "block";
    publishbox.style.display = "none";
    box1.style.display = "block";
    box2.style.display = "none";

}

function clickHouse() {
    var div1 = document.getElementById('my-order');
    var div2 = document.getElementById('published-house');
    var div3 = document.getElementById('my-collections');
    div1.style.color = "#484848";
    div1.style.borderBottom = "none";
    div2.style.color = "#ff9d07";
    div2.style.borderBottom = "2px solid #ff9d07";
    div1.style.color = "#484848";
    div1.style.borderBottom = "none";

    var orderbox = document.getElementById('order-box');
    var publishbox = document.getElementById('publish-house-box');
    var box1 = document.getElementById('order-start');
    var box2 = document.getElementById('publish-house');
    orderbox.style.display = "none";
    publishbox.style.display = "block";
    box1.style.display = "none";
    box2.style.display = "block";

}

function clickCollections() {

}