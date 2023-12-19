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
        left: -100,
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

gsap.fromTo('.chapiter1',
    {
        x: 8000,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true
        }
    },
    {
        x: -350,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true
        }
    }
)

//EFFET P
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

document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const posX = (clientX - centerX) / centerX;
    const posY = (clientY - centerY) / centerY;

    gsap.to("#startPage #title", {
        duration: 0.5,
        rotateY: posX * 30,
        rotateX: -posY * 30
    });
});
