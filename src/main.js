document.getElementById("text").innerHTML = " gio location : Geographical location : BOM"


// Geographical Location => GPS

window.navigator.geolocation.getCurrentPosition()

window.navigator.geolocation.getCurrentPosition((p)=>{
 console.log(`${p.coords.latitude}, ${p.coords.longitude}`)
})



// service =>  mapbox.com => create account