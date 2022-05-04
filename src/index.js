import modal from "./modules/modal"
import slider from "./modules/slider"
import scroll from "./modules/smoothScrollBtn"
import timer from "./modules/timer"
import burger from "./modules/burger"
// import formValidate from "./modules/formValidate"
import sendForm from "./modules/sendForm"
import docsModal from "./modules/docsModal"
import calculator from "./modules/calculator"
import secondSlider from "./modules/secondSlider"

modal()
slider()
secondSlider()
scroll()
burger()
// formValidate()
timer('05 may 2022')
docsModal()
calculator()
sendForm({
    formId: '[name = "action-form"]', 
    someElem: [
        {
            type: 'block',
            id: 'calc-total'
        }
    ] 
})
sendForm({
    formId: '[name = "action-form2"]', 
    someElem: [
        {
            type: 'block',
            id: 'calc-total'
        }
    ] 
})
sendForm({
    formId: '[name = "callback-form"]', 
    someElem: [
        {
            type: 'block',
            id: 'calc-total'
        }
    ] 
})
sendForm({
    formId: '[name = "application-form"]', 
    someElem: [
        {
            type: 'block',
            id: 'calc-total'
        }
    ] 
})