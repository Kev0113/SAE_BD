hotel.addEventListener('click', () => {
    sectionPolaHotel.style.bottom = "15%"
    flashOnOff()
})

enterHotel.addEventListener('click', () => {
    sound_car.pause()
    sectionPolaHotel.style.bottom = "-100%"
    sectionLandingPage.style.display = "none"
    setTimeout(function() {
        sectionLandingPage.style.height = "0px"
        sectionPorteHotel.style.top = "0"
        sectionPorteHotel.style.display = "block"
        window.scrollTo(0,0)
    }, 100);
})

openHotelDoor.addEventListener('click', () => {
    stateDoor()
})

function stateDoor(){
    if (openHotelDoor.innerHTML === "Open"){
        openHotelDoor.innerHTML = "Close"
        leftDoor.style.transform = "matrix(0.50,-0.30,0.00,1.00,-37,0)"
        rightDoor.style.transform = "matrix(0.50,0.30,0.00,1.00,37,0)"
        enterHotelDoor.style.display = "block"
    }else if (openHotelDoor.innerHTML === "Close"){
        openHotelDoor.innerHTML = "Open"
        leftDoor.style.transform = "initial"
        rightDoor.style.transform = "initial"
        enterHotelDoor.style.display = "none"
    }
}

enterHotelDoor.addEventListener('click', () => {
    sectionPorteHotel.style.opacity = 0
    pola1.style.bottom = "15%"
})

pola1Btn.addEventListener('click', () => {
    pola1.style.bottom = "-100%"
    pola2.style.bottom = "15%"
})


pola2Btn.addEventListener('click', () => {
    pola2.style.bottom = "-100%"
    pola3.style.bottom = "15%"
})

pola3Btn.addEventListener('click', () => {
    pola3.style.bottom = "-100%"
    sectionPorteHotel.style.display = "none"
    porteAscenceur.style.display = "block"

    let vhInPixels = window.innerHeight * 6;
    window.scrollTo(0,vhInPixels)
})
