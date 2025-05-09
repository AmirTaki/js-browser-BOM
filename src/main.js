document.getElementById("text").innerHTML = "method 'window' BOM ?"


window.alert("your Wellcome")

window.open("http://google.com", "google", "width=200, height=200")

let myWin = window.open("http://google.com", "google", "width=200, height=200")

myWin // ابحکت ویندور مربوط به صفحه جدید

// focus()
myWin.focus()

// close

// myWin.close()

// window.close()

console.log(myWin.closed)

myWin.opener

// confirm

window.confirm("prees ok to continue")  //بازکردن یک پنجره در مرور گر

// print
window.print()

//  prompt 
window.prompt("enter your name ")


//  stop load  page 
window.stop()


// setinterval

let myintervale = setInterval(()=>{
    console.log('interval')
}, 3000)

// set time out


let myTimeout = setTimeout(()=>{
    console.log('setTimeout')
}, 5000)



// clear interval

window.clearInterval(myintervale)


// clear timeout
window.clearTimeout(myTimeout)

// scrool 
window.scroll(100, 200)
window.scrollTo(100, 200)


// innerHeight
window.innerHeight

// innerWidth
window.innerWidth

// media Qury -> object media Qury list

window.matchMedia("(width:825px)").matches  // true || false


window.matchMedia("(max-width:825px)").matches

