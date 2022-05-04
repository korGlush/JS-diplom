const docsModal = () => {
    const overlay = document.querySelector('.overlay')

    const imgs = document.querySelectorAll('.document-overlay');
    const disableImgAttributes = document.querySelectorAll('.sertificate-document')
    const modalImg = document.querySelector(".sertificate-document > .img-responsive");

    const hoverEffectImgs = document.querySelectorAll('.document-overlay')

    hoverEffectImgs.forEach(hoverEffectImg => {
        hoverEffectImg.addEventListener('mouseover', () => {
            hoverEffectImg.style.transition = '.2s'
            hoverEffectImg.style.opacity = "1"
        })
        hoverEffectImg.addEventListener('mouseout', () => {
            hoverEffectImg.style.transition = '.2s'
            hoverEffectImg.style.opacity = "0"
        })
    })
    
    

    disableImgAttributes.forEach(disableImgAttributes => {
        disableImgAttributes.setAttribute('href', '')
    })
    
    imgs.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault()
            overlay.style.display = "block";
            modalImg.style.display = "block"
        })
    })

}

export default docsModal