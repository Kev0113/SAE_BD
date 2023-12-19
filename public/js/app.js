/********START********/
let landingPageBox = document.querySelector('#landingPage')

let chapiter1 = document.querySelector('.chapiter1')
let sectionStart = document.querySelector('#startPage')

let btnStart = document.querySelector('#title')
let sound_start = new Audio('./public/sound/first_music.mp3')
btnStart.addEventListener('click', () => {
    sectionStart.style.display = 'none'
    window.scrollTo(0, 0);
    sound_start.play()
    sound_start.volume = 0.1
})

/***************/
/********CHAPITER 1********/
let closeInvitation = document.querySelector('#closeInvitation')
let personnage = document.querySelector('#personnage')
let titleChapiter = document.querySelector('.titleChapiter')
let numberChapiter = document.querySelector('.numberChapiter')

chapiter1.addEventListener("click", function() {
    var carre = document.querySelector("#lettreChapitre1");
    if (carre.style.display === "none") {
        carre.style.display = "block";
    }
    carre.style.bottom = "5%";
});

closeInvitation.addEventListener('click', () => {
    console.log("ok")
    var carre = document.querySelector("#lettreChapitre1");
    carre.style.bottom = "-100%";
})
/***************/
/********CHAPITER 2********/

let acceptInvitation = document.querySelector('#acceptInvitation')

var carre = document.querySelector("#lettreChapitre1");
let nextChapiter1 = document.querySelector('#nextChapiter1')
let nextInvitation = document.querySelector('#nextInvitation')

let sound_car = new Audio('./public/sound/sound_car01.mp3')
let sound_flash = new Audio('./public/sound/sound_flash01.mp3')

acceptInvitation.addEventListener('click', () => {
    flashOnOff()
    nextChapiter1.style.bottom = "15%"
    carre.style.bottom = "-100%";
})


function flashOnOff(){
    let flashDiv = document.querySelector('#flashDiv');
    flashDiv.style.opacity = 1;
    sound_flash.play()

    setTimeout(function() {
        flashDiv.style.opacity = 0;
    }, 250);
}

function setCarCharacter(){
    let personnageSrc = document.querySelector('#personnageSrc')
    personnageSrc.src = './public/img/car_chapiter2.png'
    personnage.style.top = "54%"
    personnage.style.height = "280px"
    sound_car.play()
}

function setPersonnCharacter(){
    let personnageSrc = document.querySelector('#personnageSrc')
    personnageSrc.src = './public/img/Personnage.png'
    personnage.style.top = "50%"
    personnage.style.height = "370px"
}

nextInvitation.addEventListener('click', () => {
    setCarCharacter()
    nextChapiter1.style.bottom = "-100%"
})


/*********HOTEL************/
let hotel = document.querySelector('#hotel')
let sectionPolaHotel = document.querySelector('#sectionHotel')
let enterHotel = document.querySelector('#enterHotel')
let sectionLandingPage = document.querySelector('#landingPage')
let sectionPorteHotel = document.querySelector('#porteHotel')
hotel.addEventListener('click', () => {
    sectionPolaHotel.style.bottom = "15%"
    flashOnOff()
})

enterHotel.addEventListener('click', () => {
    sectionPolaHotel.style.bottom = "-100%"
    sectionLandingPage.style.display = "none"
    setTimeout(function() {
        sectionLandingPage.style.height = "0px"
        sectionPorteHotel.style.top = "0"
        sectionPorteHotel.style.display = "block"
        window.scrollTo(0,0)
    }, 100);
})

let openHotelDoor = document.querySelector('#openHotelDoor')
let leftDoor = document.querySelector('.porteGauche')
let rightDoor = document.querySelector('.porteDroite')
let enterHotelDoor = document.querySelector('#enterHotelDoor')

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

let pola1 = document.querySelector('#polaRecep1')
enterHotelDoor.addEventListener('click', () => {
    sectionPorteHotel.style.opacity = 0
    pola1.style.bottom = "15%"
})

let pola1Btn = document.querySelector('#nextPolaRecept1')
let pola2 = document.querySelector('#polaRecep2')
pola1Btn.addEventListener('click', () => {
    pola1.style.bottom = "-100%"
    pola2.style.bottom = "15%"
})

let pola2Btn = document.querySelector('#nextPolaRecept2')
let pola3 = document.querySelector('#polaRecep3')
pola2Btn.addEventListener('click', () => {
    pola2.style.bottom = "-100%"
    pola3.style.bottom = "15%"
})

let pola3Btn = document.querySelector('#nextPolaRecept3')
let porteAscenceur = document.querySelector('#sectionAscen')
pola3Btn.addEventListener('click', () => {
    pola3.style.bottom = "-100%"
    sectionPorteHotel.style.display = "none"
    porteAscenceur.style.display = "block"

    let vhInPixels = window.innerHeight * 6;
    window.scrollTo(0,vhInPixels)
})

/***** DOOR ASC *********/
let openDoorAsc = document.querySelector('#openDoorAsc')
let enterDoorAsc = document.querySelector('#enterDoorAsc')
let porteAscDroite = document.querySelector('.porteAscDroite')
let porteAscGauche = document.querySelector('.porteAscGauche')
let paraScroll = document.querySelector('#sectionAscen .scrollPara')
let etage = document.querySelectorAll('#sectionAscen .etage')
openDoorAsc.addEventListener('click', () => {
    stateDoorAsc()
})

function stateDoorAsc(){
    if (openDoorAsc.innerHTML === "Open"){
        openDoorAsc.innerHTML = "Close"
        porteAscDroite.style.transition = "0.2s ease-in-out"
        porteAscGauche.style.transition = "0.2s ease-in-out"
        porteAscDroite.style.transform = "translateX(50%)";
        porteAscGauche.style.transform = "translateX(-50%)";
        enterDoorAsc.style.display = "block"
    }else if (openDoorAsc.innerHTML === "Close"){
        openDoorAsc.innerHTML = "Open"
        porteAscDroite.style.transform = "initial";
        porteAscGauche.style.transform = "initial";
        enterDoorAsc.style.display = "none"
    }else if(openDoorAsc.innerHTML === "Ouvrir pour sortir"){
        porteAscDroite.style.transform = "translateX(50%)";
        porteAscGauche.style.transform = "translateX(-50%)";
        openDoorAsc.innerHTML = "Sortir"
    }else if(openDoorAsc.innerHTML === "Sortir"){
        porteAscenceur.style.transition = "0.2s ease-in-out"
        porteAscenceur.style.opacity = 0
        setTimeout(function() {
            porteAscenceur.style.display = 'none';
        }, 200);
    }
}

enterDoorAsc.addEventListener('click', () => {
    paraScroll.style.display = "block"
    openDoorAsc.style.display = "none"
    enterDoorAsc.style.display = "none"
    porteAscDroite.style.transform = "initial";
    porteAscGauche.style.transform = "initial";
    porteAscenceur.style.height = "700vh"
    etage.forEach((element) => {
        element.style.display = "flex"
    })
    let vhInPixels = window.innerHeight * 6;
    window.scrollTo(0,vhInPixels)
})

let lastEtage = document.querySelector('.lastEtage')
window.addEventListener('scroll', () => {
    if (etage[0].style.display !== "none"){
        // console.log(window.screen.height / 2)
        if (etage[0].getBoundingClientRect().y > 20){
            porteAscenceur.style.height = "800vh"
            lastEtage.style.display = "flex"
            scrollToBottom(120)
            paraScroll.style.display = "none"
            openDoorAsc.innerHTML = "Ouvrir pour sortir"
            openDoorAsc.style.display ="block"
            openDoorAsc.style.left = '50%'
            openDoorAsc.style.transform = 'translate(-50%)'
        }
    }
})
/***************/

function scrollToBottom(speed) {
    const totalScrollDistance = document.body.scrollHeight - window.scrollY;
    let scrollStep = totalScrollDistance / speed;

    function scroll() {
        if (window.scrollY < document.body.scrollHeight) {
            window.scrollBy(0, scrollStep);
            requestAnimationFrame(scroll);
        }
    }

    scroll();
}

window.addEventListener('scroll', () => {
    if(personnage.getBoundingClientRect().left > chapiter1.getBoundingClientRect().left){
        titleChapiter.innerHTML = "Titre 2"
        numberChapiter.innerHTML = "Chapitre 2"
    }else{
        titleChapiter.innerHTML = "Titre"
        numberChapiter.innerHTML = "Chapitre 1"
    }
})












// function playSound(){
//     let sound = new Audio('./public/sound/klaxon.mp3')
//     sound.play()
//     sound.volume = 0.01
// }


let movingdiv = document.querySelector('.moving-div')
let bannerHomePage = document.querySelector('#banner')

window.addEventListener('scroll', (event) => {
    let bottomOfWindow = window.scrollY + window.innerHeight;

    // playSound()
    // if (bottomOfWindow >= landingPageBox.offsetHeight ){
    //     // movingdiv.style.position = "absolute"
    //     // movingdiv.style.bottom = "0"
    //     // movingdiv.style.display = "none"
    //     landingPageBox.style.opacity = "0"
    //     landingPageBox.style.transition = "0.2s ease-in-out"
    // }else{
    //     // movingdiv.style.position = "fixed"
    //     // movingdiv.style.display = "block"
    //     landingPageBox.style.opacity = "1"
    //     landingPageBox.style.transition = "0.2s ease-in-out"
    // }
})
