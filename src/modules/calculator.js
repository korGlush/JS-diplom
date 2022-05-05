const calculator = () => {
    const calc = document.getElementById('calc')
    const balcony = document.getElementById('calc-type')
    const glass = document.getElementById('calc-type-material')
    const square = document.getElementById('calc-input')
    const reuslt = document.getElementById('calc-total')

    const countCalc = () => {
        const balconyValue = +balcony.options[balcony.selectedIndex].value
        let glassValue = +glass.options[glass.selectedIndex].value
        const squareValue = square.value

        let reusltValue = 0


        if(glass.value == "--") {
            glassValue = 1
        }


        if (balcony.value && square.value) {
            reusltValue = Math.round(balconyValue * glassValue * squareValue)
        } else {
            reusltValue = 0
        }

        reuslt.value = reusltValue
    }
    if (calc == null) {
        console.log('Калькулятор на другой странице, дружище');
    } else {
    calc.addEventListener('input', (e) => {
        if (e.target === balcony || e.target === square || 
            e.target === glass) {
            countCalc()
        } else {
            reusltValue = 0
        }
    })
  }
}

export default calculator