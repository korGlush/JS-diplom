const scroll = () => {
    const scrollBtn = document.querySelector('.smooth-scroll__img')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 700) {
            scrollBtn.style.transition = ".3s"
            scrollBtn.style.opacity = "1"
        } else {
            scrollBtn.style.transition = ".3s"
            scrollBtn.style.opacity = "0" 
        }
    })
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.smooth-scroll__img')) {
            e.preventDefault()
            const anchor = document.getElementById('header')
            anchor.scrollIntoView({block: "start", behavior: "smooth"});
        }
    })
}

export default scroll