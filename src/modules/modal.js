const modal = () => {
    const overlay = document.querySelector('.overlay')

    const headerModalContent = document.querySelector('.header-modal')
    const servicesModal = document.querySelector('.services-modal')

    document.addEventListener('click', (e) => {
        if (e.target.closest('.button > .fancyboxModal')) {
            overlay.style.display = "block"
            headerModalContent.style.display = "block"
        } else if (e.target.closest('.header-modal__close')) {
            overlay.style.display = ""
            headerModalContent.style.display = ""
        } else if (e.target.closest('.overlay')) {
            overlay.style.display = ""
            headerModalContent.style.display = ""
        }

        if (e.target.closest('.utp-button > .fancyboxModal')) {
            overlay.style.display = "block"
            servicesModal.style.display = "block"
        }
        
        if (e.target.closest('.service-button > .fancyboxModal')) {
            overlay.style.display = "block"
            servicesModal.style.display = "block"
        } else if (e.target.closest('.services-modal__close')) {
            overlay.style.display = ""
            servicesModal.style.display = ""
        } else if (e.target.closest('.overlay')) {
            overlay.style.display = ""
            servicesModal.style.display = ""
        }
    })
}

export default modal