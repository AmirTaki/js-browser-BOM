document.getElementById("text").innerHTML = " property 'loaction' BOM "



// url : Protocol , ip (domain) , Port , Path
/*
http://127.0.0.1:5500/index.html
Protocol : لایه اپلیکیشن شبکه => http
ip : addres server =? 127.0.0.1
port : 5500
path :index.html  نمایش کدام صفخه در وب

*/

window.location

window.location.hostname // ip or domain name

window.location.protocol // protocol

window.location.port   // port

window.location.pathname   // name web page 

window.location.hash  // bookmark html ->   #about اسامی قسمتی از صفحات که در انجاییم
// link http://127.0.0.1:5500/index.html#about 

window.location.search  // search in url نمایش

window.location.href  // url full

window.location.host    // id/admin + port

window.location.origin // protocol + id/admin + port




window.location.assign("")  // go to page 

window.location = "";

window.location.reload // refresh page

window.replace("") // go to page not back 