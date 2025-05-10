document.getElementById("text").innerHTML = " Cookie  : storage in browser : BOM "



// Cookie

window.document

window.document.cookie

window.document.cookie = "Product_name = ball;"  // ذخیره کوکی 

window.document.cookie = "name = amir; max-age = 5" // ذخیره کوکی با تاریخ انقضا

new Date("2025/1/1").toUTCString()  

// / ذخیره کوکی با تاریخ انقضا
window.document.cookie = "name = mani ; expires = Tue, 31 Dec 2024 20:30:00 GMT"

// حذف کوکی با تاریخی در گذشته
window.document.cookie = "name = mani ; expires = Tue, 31 Dec 1990 20:30:00 GMT"