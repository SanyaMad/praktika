const linkDown = document.querySelector('.mouse_img');
const secondSection = document.querySelector('.section_truck');
const secondSectionY = secondSection.offsetTop;

let inervalID;

const trackScroll = () => {
    window.scrollBy(0, 30)
    if (window.pageYOffset >= secondSectionY) {
        clearInterval (intervalID)
    }
}

linkDown.addEventListener('click', (e) => {
    e.preventDefault()
    intervalID = setInterval(trackScroll, 10)
})