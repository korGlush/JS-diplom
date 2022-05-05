const galery = () => {
    const background = document.querySelector('.overlay')
    const block = document.getElementById('documents')
    const icons = block.querySelectorAll('.sertificate-document')
    const overlays = block.querySelectorAll('.document-overlay')

    const loopVisible = (i) => {
        overlays[i].style.opacity = 1
    }
    const loopHidden = (i) => {
        overlays[i].style.opacity = 0
    }

    const backgroundVisible = (src) => {
        background.style.display = 'block'
        background.style.background = 'rgba(0, 0, 0, 0.45) url(' + src + ') center center no-repeat'
        background.style.backgroundSize = 'auto 80%'
    }

    icons.forEach((icon, i) => {
        overlays[i].addEventListener('mouseenter', (e) => { 
            e.preventDefault()
            loopVisible(i) 
        })
        overlays[i].addEventListener('mouseout', (e) => { 
            e.preventDefault()
            loopHidden(i) 
        })
        overlays[i].addEventListener('click', (e) => { 
            e.preventDefault()
            let src = icon.getAttribute('href')
            backgroundVisible(src)
        })
    })

}

export default gallery