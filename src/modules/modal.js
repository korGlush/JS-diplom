const modal = () => {
    const bacground = document.querySelector('.overlay')
    const modalContent = document.querySelector('.header-modal')
    const twoModal = document.querySelector('.services-modal')

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header-modal') && e.target.closest('.overlay')) {
            bacground.style.display = ""
            modalContent.style.display = ""
        } else if (e.target.closest('.header-modal__close')) {
            bacground.style.display = ""
            modalContent.style.display = ""
        } else if (e.target.closest('.button > .fancyboxModal')) {
            bacground.style.display = "block"
            modalContent.style.display = "block"
        }

        if (e.target.closest('.utp-button > .fancyboxModal')) {
            bacground.style.display = "block"
            twoModal.style.display = "block"
        }
        
        if (e.target.closest('.service-button > .fancyboxModal')) {
            bacground.style.display = "block"
            twoModal.style.display = "block"
        } else if (e.target.closest('.services-modal__close')) {
            bacground.style.display = ""
            twoModal.style.display = ""
        } else if (!e.target.closest('.services-modal')  && e.target.closest('.overlay')) {
            bacground.style.display = ""
            twoModal.style.display = ""
        }
    })


//     document.addEventListener('click', (e) => {
//         if (e.target.closest('.button > .fancyboxModal')) {
//             bacground.style.display = "block"
//             modalContent.style.display = "block"
//         } else if (e.target.closest('.header-modal__close')) {
//             bacground.style.display = ""
//             modalContent.style.display = ""
//         } else if (e.target.closest('.overlay')) {
//             bacground.style.display = ""
//             modalContent.style.display = ""
//         }

//         if (e.target.closest('.utp-button > .fancyboxModal')) {
//             bacground.style.display = "block"
//             twoModal.style.display = "block"
//         }

//         if (e.target.closest('.service-button > .fancyboxModal')) {
//             bacground.style.display = "block"
//             twoModal.style.display = "block"
//         } else if (e.target.closest('.services-modal__close')) {
//             bacground.style.display = ""
//             twoModal.style.display = ""
//         } else if (e.target.closest('.overlay')) {
//             bacground.style.display = ""
//             twoModal.style.display = ""
//         }
//     })

 }

export default modal