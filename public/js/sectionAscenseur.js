openDoorAsc.addEventListener('click', () => {
    stateDoorAsc()
})

function stateDoorAsc(){
    if (openDoorAsc.innerHTML === "Ouvrir"){
        openDoorAsc.innerHTML = "Fermer"
        porteAscDroite.style.transition = "4s ease-in-out"
        porteAscGauche.style.transition = "4s ease-in-out"
        porteAscDroite.style.transform = "translateX(50%)";
        porteAscGauche.style.transform = "translateX(-50%)";
        enterDoorAsc.style.display = "block"
        sound_door_ASC.play()
    }else if (openDoorAsc.innerHTML === "Fermer"){
        openDoorAsc.innerHTML = "Ouvrir"
        porteAscDroite.style.transform = "initial";
        porteAscGauche.style.transform = "initial";
        enterDoorAsc.style.display = "none"
        sound_door_ASC.play()
    }else if(openDoorAsc.innerHTML === "Ouvrir pour sortir"){
        porteAscDroite.style.transform = "translateX(50%)";
        porteAscGauche.style.transform = "translateX(-50%)";
        sound_door_ASC.play()
        openDoorAsc.innerHTML = "Sortir"
    }else if(openDoorAsc.innerHTML === "Sortir"){
        porteAscenceur.style.transition = "4s ease-in-out"
        porteAscenceur.style.opacity = 0
        sound_door_ding.play()
        setTimeout(function() {
            porteAscenceur.style.display = 'none';
            sectionBd.style.display = 'block';
            window.scrollTo(0,0)
            gsap.fromTo('#photo1BD',
                {
                    left: -847,
                },
                {
                    left: 0,
                },
            )
            gsap.fromTo('#photo2BD',
                {
                    right: -1031,
                },
                {
                    right: 0,
                    duration: 2
                }
            );
            gsap.fromTo('#photo3BD',
                {
                    right: -1031,
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.5,
                        markers: false
                    }
                },
                {
                    right: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.5,
                        markers: false
                    }
                }
            );
            gsap.fromTo('#photo4BD',
                {
                    right: -1918,
                    scrollTrigger: {
                        trigger: '#photo4BD',
                        start: "center center", // Démarre lorsque le centre de l'image est au centre de l'écran
                        end: "center center", // Se termine à la même position (pour une animation continue pendant le défilement)
                        scrub: 0.5,
                        markers: false
                    }
                },
                {
                    right: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: '#photo4BD',
                        start: "center center",
                        end: "center center",
                        scrub: 0.5,
                        markers: false
                    }
                }
            );

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
    sound_door_ASC.play()
    etage.forEach((element) => {
        element.style.display = "flex"
    })
    let vhInPixels = window.innerHeight * 6;
    window.scrollTo(0,vhInPixels)
})

window.addEventListener('scroll', () => {
    if (etage[0].style.display !== "none" && sectionBd.style.display === "none" && etage[0].getBoundingClientRect().y > 300){
        sound_door_panne.play()
        sound_door_boom.play()
        porteAscenceur.style.height = "800vh"
        lastEtage.style.display = "flex"
        scrollToBottom(2000)
        paraScroll.style.display = "none"
        openDoorAsc.innerHTML = "Ouvrir pour sortir"
        openDoorAsc.style.display ="block"
        openDoorAsc.style.left = '50%'
        openDoorAsc.style.transform = 'translate(-50%)'
    }
})
/***************/

function scrollToBottom(duration) {
    const start = window.scrollY;
    const end = document.body.scrollHeight;
    const change = end - start;
    let currentTime = 0;
    const increment = 20;

    function animateScroll() {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);

        window.scrollTo(0, val);

        if(currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    Math.easeInOutQuad = function (time, start, change, duration) {
        time /= duration / 2;
        if (time < 1) return change / 2 * time * time + start;
        time--;
        return -change / 2 * (time * (time - 2) - 1) + start;
    };

    animateScroll();
}

window.addEventListener('scroll', () => {
    if(personnage.getBoundingClientRect().left > chapiter1.getBoundingClientRect().left){
        titleChapiter.innerHTML = "Hôtel"
        numberChapiter.innerHTML = "Direction"
    }else{
        titleChapiter.innerHTML = "Maison"
        numberChapiter.innerHTML = "Direction"
    }
})
