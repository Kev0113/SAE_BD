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
