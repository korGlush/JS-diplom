const twoSlider = () => {
    const benefitItems = document.querySelectorAll('.service-block')
    const benefContent = document.querySelector('#services')


    let currentSlide = 0

    const checkWidth = () => {
        benefitItems.forEach((benefitItem, i) => {
            if (window.innerWidth >= 576) {
                if (i > 1) {
                    benefitItem.classList.add('not-active')
                }
            } else {
                if (i > 0) {
                    benefitItem.classList.add('not-active')
                }
            }   
        })
    }

    checkWidth()

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    benefContent.addEventListener('click', (e) => {
        
        if (window.innerWidth >= 576) {
            if (e.target.closest('.services__arrow--right')) {
                benefitItems.forEach(benefitItem => {
                    if (benefitItem.classList.contains('not-active')) {
                        benefitItem.classList.remove('not-active')
                    } else {
                        benefitItem.classList.add('not-active')
                    }
                })
            }
            if (e.target.closest('.services__arrow--left')) {
                benefitItems.forEach(benefitItem => {
                    if (benefitItem.classList.contains('not-active')) {
                        benefitItem.classList.remove('not-active')
                    } else {
                        benefitItem.classList.add('not-active')
                    }
                })
            }
        } else {
            prevSlide(benefitItems, currentSlide, 'not-active')

            if (e.target.closest('.services__arrow--right')) {
                currentSlide++
            } else if (e.target.closest('.services__arrow--left')) {
                currentSlide--          
            }
            if (currentSlide >= benefitItems.length) {
                currentSlide = 0
            }
            if (currentSlide < 0) {
                currentSlide = benefitItems.length - 1
            }
    
            nextSlide(benefitItems, currentSlide, 'not-active')
        }   
    })
}




export default twoSlider