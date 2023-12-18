let landingPageBox = document.querySelector('#landingPage')
let movingdiv = document.querySelector('.moving-div')
let bannerHomePage = document.querySelector('#banner')
window.addEventListener('scroll', (event) => {
    let bottomOfWindow = window.scrollY + window.innerHeight;

    if (bottomOfWindow >= landingPageBox.offsetHeight ){
        // movingdiv.style.position = "absolute"
        // movingdiv.style.bottom = "0"
        // movingdiv.style.display = "none"
        landingPageBox.style.opacity = "0"
        landingPageBox.style.transition = "0.2s ease-in-out"
    }else{
        // movingdiv.style.position = "fixed"
        // movingdiv.style.display = "block"
        landingPageBox.style.opacity = "1"
        landingPageBox.style.transition = "0.2s ease-in-out"
    }
})
