const two = () => {
    const serviceCards = document.querySelectorAll('.col-md-12.col-lg-6');
    const serviceContent = document.getElementById('services')
    
    let currentSlide = 0

    const checkForInnerWidth = () => {
        serviceCards.forEach((serviceCard, i) => {
            if (window.innerWidth >= 576) {
                if (i > 1) {
                    serviceCard.classList.add('not-active')
                }
            } else {
                if (i > 0) {
                    serviceCard.classList.add('not-active')
                }
            }   
        })
    }

    checkForInnerWidth()

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    serviceContent.addEventListener('click', (e) => {
        
        if (window.innerWidth >= 576) {
            if (e.target.closest('.services__arrow--right')) {
                serviceCards.forEach(serviceCard => {
                    if (serviceCard.classList.contains('not-active')) {
                        serviceCard.classList.remove('not-active')
                    } else {
                        serviceCard.classList.add('not-active')
                    }
                })
            }
            if (e.target.closest('.services__arrow--left')) {
                serviceCards.forEach(serviceCard => {
                    if (serviceCard.classList.contains('not-active')) {
                        serviceCard.classList.remove('not-active')
                    } else {
                        serviceCard.classList.add('not-active')
                    }
                })
            }
        } else {
            prevSlide(serviceCards, currentSlide, 'not-active')

            if (e.target.closest('.services__arrow--right')) {
                currentSlide++
            } else if (e.target.closest('.services__arrow--left')) {
                currentSlide--          
            }
            if (currentSlide >= serviceCards.length) {
                currentSlide = 0
            }
            if (currentSlide < 0) {
                currentSlide = serviceCards.length - 1
            }
    
            nextSlide(serviceCards, currentSlide, 'not-active')
        }   
    })


}
export default two