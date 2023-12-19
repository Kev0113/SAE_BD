volumeParam.addEventListener("click", () => {
    if (volumeState === true){
        volumeParamOff.style.display = "block"
        volumeParamOn.style.display = "none"
        volumeState = false
        volumeParamsMusic(false)
    }else if(volumeState === false){
        volumeParamOff.style.display = "none"
        volumeParamOn.style.display = "block"
        volumeState = true
        volumeParamsMusic(true)
    }
})

function volumeParamsMusic(state){
    if (state === true){
        sound_start.volume = 0.03
        sound_car.volume = 1
        sound_flash.volume = 1
    }else{
        sound_start.volume = 0
        sound_car.volume = 0
        sound_flash.volume = 0
    }
}

btnStart.addEventListener('click', () => {
    sectionStart.style.display = 'none'
    window.scrollTo(0, 0);
    sound_start.play()
    volumeParamsMusic(volumeState)
})
window.addEventListener('scroll', function(event) {
    // console.log(scrollY)
    // console.log(chapiter1.getBoundingClientRect().x, personnage.getBoundingClientRect())
    if (personnage.getBoundingClientRect().x > chapiter1.getBoundingClientRect().x - 100){
        console.log(scrollY, chapiter1.getBoundingClientRect())
        if (chap1Valid === false){
            window.scrollTo(0, 7600)
        }
    }
}, { passive: false });
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

acceptInvitation.addEventListener('click', () => {
    flashOnOff()
    nextChapiter1.style.bottom = "15%"
    carre.style.bottom = "-100%";
    chap1Valid = true
})


function flashOnOff(){
    let flashDiv = document.querySelector('#flashDiv');
    flashDiv.style.opacity = 1;
    sound_flash.play()
    volumeParamsMusic(volumeState)

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
    volumeParamsMusic(volumeState)
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
