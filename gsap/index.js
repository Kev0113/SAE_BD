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
        x: 2500,
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
