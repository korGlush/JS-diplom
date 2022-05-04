const calculator = () => {

    const calcBlock = document.getElementById('calc')
    const calcBalconyType = document.getElementById('calc-type')
    const calcSquare = document.getElementById('calc-input')
    const calcTypeMaterial = document.getElementById('calc-type-material')
    const total = document.getElementById('calc-total')

    
    const countCalc = () => {
        const calcTypeValue = +calcBalconyType.options[calcBalconyType.selectedIndex].value
        let calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value
        const calcSquareValue = calcSquare.value

        let totalValue = 0

        
        if(calcTypeMaterial.value == "--") {
            calcTypeMaterialValue = 1
        }

        if(calcBalconyType.value && calcSquare) {
            totalValue = Math.round(calcSquareValue*calcTypeValue*calcTypeMaterialValue)
        }

        total.value = totalValue
    }
    if (calcBlock == null) {
        console.log('блока с калькулятором нет!');
    } else {
        calcBlock.addEventListener('input', (e) => {
            if (e.target === calcBalconyType || e.target === calcSquare || 
                e.target === calcTypeMaterial) {
                countCalc()
            } else {
                totalValue = 0
            }
        })
    }
    
}

export default calculator