const smoothScrollBtn = () => {
    const scrollBtn = document.querySelector('.smooth-scroll')

    window.addEventListener('scroll', () => {
        if (window.pageYOffset < 600) {
            scrollBtn.style.transition = ".3s"
            scrollBtn.style.opacity = "0"
        } else {
            scrollBtn.style.transition = ".3s"
            scrollBtn.style.opacity = "1"
        }
    })
    

    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const anchor = document.getElementById('header')
        anchor.scrollIntoView({block: "start", behavior: "smooth"});
    })
}

export default smoothScrollBtn