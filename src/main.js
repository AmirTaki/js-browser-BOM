document.getElementById("text").innerHTML = "Property 'console' BOM ?"


window.console

// log - print
window.console.log("log - print")

// error
window.console.error("erorr")

//warning
window.console.warn("warning") 

//info
window.console.info("info")

// window.console.clear()   -> clear 

// table
let obj = {name : "amir", admin : 'true'}

window.console.table(obj)

let arr = [11, 12, 13, 14, 15, 16]

window.console.table(arr)

// count
window.console.count("javaScript")
window.console.count("javaScript")
window.console.count("javaScript")


let value = 0 ;
function sum() {
    for (let i = 0; i < 100000; i++){
        value += i;
    }
}

// time
console.time()
sum()
console.timeEnd()

// lenght
window.length  // تعداد تگ های ای فریم صفحه برمیگرداند

// closed
window.closed  // بستن پنجره تب

// navigator   
window.navigator  // اطلاعات درمورد مرورگر کاربر

window.pageXOffset  // میزان اسکرول عمودی صفحه مرورگر

window.pageXOffset  // میزان اسکرول افقی صفحه مرورگر

// screen
window.screenX       // فاصله برنامه مرورگر از سمت چپ صفحه

window.screenLeft       // فاصله برنامه مرورگر از سمت چپ صفحه

window.screenY      // فاصله برنامه مرورگر از سمت بالای صفحه

window.screenTop        // فاصله برنامه مرورگر از سمت بالای صفحه
