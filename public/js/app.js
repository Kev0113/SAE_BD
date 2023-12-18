let isScroll = false;
let scrollTimeout;
let sound = new Audio('./public/sound/sound_car.mp3')
// let sound_klaxon = new Audio('./public/sound/klaxon.mp3');

document.addEventListener('DOMContentLoaded', () => {
    sound.play()
    sound.volume = 0
})

function handleScroll() {
    isScroll = true;

    // Jouer le son lorsque l'utilisateur commence à défiler
    sound.play();

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        isScroll = false;

        // Arrêter le son lorsque l'utilisateur arrête de défiler
        sound.pause();
        sound.currentTime = 0; // Réinitialiser le son au début
    }, 10000);
}

window.addEventListener('scroll', handleScroll);


let chapiter1 = document.querySelector('.chambre')
let closeInvitation = document.querySelector('#closeInvitation')
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

let acceptInvitation = document.querySelector('#acceptInvitation')
let sectionLandingPage = document.querySelector('#landingPage')
let sectionTest = document.querySelector('#test')
var carre = document.querySelector("#lettreChapitre1");
acceptInvitation.addEventListener('click', () => {
    sectionLandingPage.style.display = "none"
    sectionTest.style.display = "block"
    carre.style.bottom = "-100%";
    window.scrollTo(0, 0);
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
