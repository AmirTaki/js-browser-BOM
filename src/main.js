document.getElementById("text").innerHTML = "What BOM ?"
// browser object model
// BOM == WINDOW == GLOBAL OBJECT

/* 

*/
console.log(window)

console.log(window.innerHeight)  /// ارتفاع تب مرورگر

window.alert("hi js")  //  بازکردن پنحره در مرورگر

window.x = 5;

console.log(window.x)

x = 4;

console.log(x)

var z = 12;

console.log(window.z)

function greet() {console.log("BOM javaScript")}

window.greet()

window.console.log
/*
 کلمه کلیدی this 
به طور پیش فرض به ابجکت 
window
اشاره میکند
*/

console.log(this)

console.log(this === window)

console.log(window.window)

console.log(window.window.window)

