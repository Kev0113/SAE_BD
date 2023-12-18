gsap.registerPlugin(ScrollTrigger);

gsap.to(".moving-div", {
    x: () => window.innerWidth - 2 * window.innerWidth ,
    ease: "none",
    scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        markers: true
    }
});

gsap.fromTo('.lampadaire_1',
    {
        left: 1500,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true
        }
    },
    {
        left: 1400,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true
        }
    }
)


gsap.fromTo('#car',
    {
        x: 1500,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true
        }
    },
    {
        x:-1000,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true
        }
    }
)

gsap.fromTo('#etoiles',
    {
        x: 0,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true
        }
    },
    {
        x: -50,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true
        }
    }
)

gsap.fromTo('.chambre',
    {
        x: 30000,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true
        }
    },
    {
        x: 1700,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true
        }
    }
)


document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const posX = (clientX - centerX) / centerX;
    const posY = (clientY - centerY) / centerY;

    gsap.to("#lettreChapitre1", {
        duration: 0.5,
        rotateY: posX * 20,
        rotateX: -posY * 20
    });
});
