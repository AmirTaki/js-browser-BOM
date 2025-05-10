document.getElementById("text").innerHTML = " property 'history' BOM "

window.history.state  // تغییر آدرس مرورگر بدون رفرش نمایش

window.history.pushState({id : 1}, "course", "")  // اضافه کردن استیت به هیستوری

window.history.go(-1)  // خارج کردن استیت از  پشته

