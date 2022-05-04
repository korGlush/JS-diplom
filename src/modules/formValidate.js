const formValidate = () => {
    const formName = document.querySelectorAll('[name="fio"]')
    const formTel = document.querySelectorAll('[name="phone"]')

    formName.forEach(formName =>
        formName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\^a-zA-Z\s]/g, "") 
    }))

    formTel.forEach(formTel =>
        formTel.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-\+]/g, "") 
    }))

}

export default formValidate