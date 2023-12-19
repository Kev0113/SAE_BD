/********START********/
let chapiter1 = document.querySelector('.chapiter1')
let sectionStart = document.querySelector('#startPage')

let btnStart = document.querySelector('#title')
btnStart.addEventListener('click', () => {
    sectionStart.style.display = 'none'
    window.scrollTo(0, 0);
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
        carre.style.display = "block"; // Affiche le carré
    }
    carre.style.bottom = "5%"; // Déplace le carré vers le centre
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

/***************/

window.addEventListener('scroll', () => {
    if(personnage.getBoundingClientRect().left > chapiter1.getBoundingClientRect().left){
        titleChapiter.innerHTML = "Titre 2"
        numberChapiter.innerHTML = "Chapitre 2"
        setCarCharacter()
    }else{
        titleChapiter.innerHTML = "Titre"
        numberChapiter.innerHTML = "Chapitre 1"
        // setPersonnCharacter()
    }
})












// function playSound(){
//     let sound = new Audio('./public/sound/klaxon.mp3')
//     sound.play()
//     sound.volume = 0.01
// }



let landingPageBox = document.querySelector('#landingPage')
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
