/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_smoothScrollBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScrollBtn */ \"./src/modules/smoothScrollBtn.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/burger */ \"./src/modules/burger.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_docsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/docsModal */ \"./src/modules/docsModal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_secondSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/secondSlider */ \"./src/modules/secondSlider.js\");\n\n\n\n\n\n// import formValidate from \"./modules/formValidate\"\n\n\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_secondSlider__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\n;(0,_modules_smoothScrollBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_burger__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n// formValidate()\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('05 may 2022')\n;(0,_modules_docsModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    formId: '[name = \"action-form\"]', \n    someElem: [\n        {\n            type: 'block',\n            id: 'calc-total'\n        }\n    ] \n})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    formId: '[name = \"action-form2\"]', \n    someElem: [\n        {\n            type: 'block',\n            id: 'calc-total'\n        }\n    ] \n})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    formId: '[name = \"callback-form\"]', \n    someElem: [\n        {\n            type: 'block',\n            id: 'calc-total'\n        }\n    ] \n})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    formId: '[name = \"application-form\"]', \n    someElem: [\n        {\n            type: 'block',\n            id: 'calc-total'\n        }\n    ] \n})\n\n//# sourceURL=webpack://middle/./src/index.js?");

/***/ }),

/***/ "./src/modules/burger.js":
/*!*******************************!*\
  !*** ./src/modules/burger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burger = () => {\r\n    const navbarMenu = document.getElementById('navbar-collapse')\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if ((e.target.closest('.navbar-toggle')) && (navbarMenu.classList.contains('collapse'))) {\r\n            navbarMenu.classList.add('opened')\r\n            navbarMenu.classList.remove('collapse')\r\n        } else if ((e.target.closest('.navbar-toggle')) && (!navbarMenu.classList.contains('collapse'))) {\r\n            navbarMenu.classList.remove('opened')\r\n            navbarMenu.classList.add('collapse')\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack://middle/./src/modules/burger.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n\r\n    const calcBlock = document.getElementById('calc')\r\n    const calcBalconyType = document.getElementById('calc-type')\r\n    const calcSquare = document.getElementById('calc-input')\r\n    const calcTypeMaterial = document.getElementById('calc-type-material')\r\n    const total = document.getElementById('calc-total')\r\n\r\n    \r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcBalconyType.options[calcBalconyType.selectedIndex].value\r\n        let calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value\r\n\r\n        let totalValue = 0\r\n\r\n        \r\n        if(calcTypeMaterial.value == \"--\") {\r\n            calcTypeMaterialValue = 1\r\n        }\r\n\r\n        if(calcBalconyType.value && calcSquare) {\r\n            totalValue = Math.round(calcSquareValue*calcTypeValue*calcTypeMaterialValue)\r\n        }\r\n\r\n        total.value = totalValue\r\n    }\r\n    if (calcBlock == null) {\r\n        console.log('блока с калькулятором нет!');\r\n    } else {\r\n        calcBlock.addEventListener('input', (e) => {\r\n            if (e.target === calcBalconyType || e.target === calcSquare || \r\n                e.target === calcTypeMaterial) {\r\n                countCalc()\r\n            } else {\r\n                totalValue = 0\r\n            }\r\n        })\r\n    }\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://middle/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/docsModal.js":
/*!**********************************!*\
  !*** ./src/modules/docsModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst docsModal = () => {\r\n    const overlay = document.querySelector('.overlay')\r\n\r\n    const imgs = document.querySelectorAll('.document-overlay');\r\n    const disableImgAttributes = document.querySelectorAll('.sertificate-document')\r\n    const modalImg = document.querySelector(\".sertificate-document > .img-responsive\");\r\n\r\n    const hoverEffectImgs = document.querySelectorAll('.document-overlay')\r\n\r\n    hoverEffectImgs.forEach(hoverEffectImg => {\r\n        hoverEffectImg.addEventListener('mouseover', () => {\r\n            hoverEffectImg.style.transition = '.2s'\r\n            hoverEffectImg.style.opacity = \"1\"\r\n        })\r\n        hoverEffectImg.addEventListener('mouseout', () => {\r\n            hoverEffectImg.style.transition = '.2s'\r\n            hoverEffectImg.style.opacity = \"0\"\r\n        })\r\n    })\r\n    \r\n    \r\n\r\n    disableImgAttributes.forEach(disableImgAttributes => {\r\n        disableImgAttributes.setAttribute('href', '')\r\n    })\r\n    \r\n    imgs.forEach(img => {\r\n        img.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            overlay.style.display = \"block\";\r\n            modalImg.style.display = \"block\"\r\n        })\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (docsModal);\n\n//# sourceURL=webpack://middle/./src/modules/docsModal.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const overlay = document.querySelector('.overlay')\n\n    const headerModalContent = document.querySelector('.header-modal')\n    const servicesModal = document.querySelector('.services-modal')\n\n    document.addEventListener('click', (e) => {\n        if (e.target.closest('.button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            headerModalContent.style.display = \"block\"\n        } else if (e.target.closest('.header-modal__close')) {\n            overlay.style.display = \"\"\n            headerModalContent.style.display = \"\"\n        } else if (e.target.closest('.overlay')) {\n            overlay.style.display = \"\"\n            headerModalContent.style.display = \"\"\n        }\n\n        if (e.target.closest('.utp-button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            servicesModal.style.display = \"block\"\n        }\n        \n        if (e.target.closest('.service-button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            servicesModal.style.display = \"block\"\n        } else if (e.target.closest('.services-modal__close')) {\n            overlay.style.display = \"\"\n            servicesModal.style.display = \"\"\n        } else if (e.target.closest('.overlay')) {\n            overlay.style.display = \"\"\n            servicesModal.style.display = \"\"\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/secondSlider.js":
/*!*************************************!*\
  !*** ./src/modules/secondSlider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst two = () => {\n    const serviceCards = document.querySelectorAll('.col-md-12.col-lg-6');\n    const serviceContent = document.getElementById('services')\n    \n    let currentSlide = 0\n\n    const checkForInnerWidth = () => {\n        serviceCards.forEach((serviceCard, i) => {\n            if (window.innerWidth >= 576) {\n                if (i > 1) {\n                    serviceCard.classList.add('not-active')\n                }\n            } else {\n                if (i > 0) {\n                    serviceCard.classList.add('not-active')\n                }\n            }   \n        })\n    }\n\n    checkForInnerWidth()\n\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    }\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    }\n\n    serviceContent.addEventListener('click', (e) => {\n        \n        if (window.innerWidth >= 576) {\n            if (e.target.closest('.services__arrow--right')) {\n                serviceCards.forEach(serviceCard => {\n                    if (serviceCard.classList.contains('not-active')) {\n                        serviceCard.classList.remove('not-active')\n                    } else {\n                        serviceCard.classList.add('not-active')\n                    }\n                })\n            }\n            if (e.target.closest('.services__arrow--left')) {\n                serviceCards.forEach(serviceCard => {\n                    if (serviceCard.classList.contains('not-active')) {\n                        serviceCard.classList.remove('not-active')\n                    } else {\n                        serviceCard.classList.add('not-active')\n                    }\n                })\n            }\n        } else {\n            prevSlide(serviceCards, currentSlide, 'not-active')\n\n            if (e.target.closest('.services__arrow--right')) {\n                currentSlide++\n            } else if (e.target.closest('.services__arrow--left')) {\n                currentSlide--          \n            }\n            if (currentSlide >= serviceCards.length) {\n                currentSlide = 0\n            }\n            if (currentSlide < 0) {\n                currentSlide = serviceCards.length - 1\n            }\n    \n            nextSlide(serviceCards, currentSlide, 'not-active')\n        }   \n    })\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (two);\n\n//# sourceURL=webpack://middle/./src/modules/secondSlider.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n    const form = document.querySelector(formId)\r\n    const statusBlock = document.createElement('div')\r\n\r\n    const inputPhone = document.querySelectorAll('[name=\"phone\"]')\r\n    const inputName = document.querySelectorAll('[name=\"fio\"]')\r\n\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка...'\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется'\r\n\r\n    const validate = (formElements) => {\r\n        let success = true\r\n        formElements.forEach(inputName => {\r\n            if (inputName === '') {\r\n                success = false\r\n            }\r\n            if (inputName.getAttribute('name') == 'fio') {\r\n                if (inputName.value.match(/[^а-яА-Я\\^a-zA-Z\\s]/g)) {\r\n                    success = false\r\n                }\r\n            }\r\n        })\r\n        formElements.forEach(inputPhone => {\r\n            if (inputPhone.value === '') {\r\n                success = false\r\n            }\r\n            if (inputPhone.getAttribute('name') == 'phone') {\r\n                if (inputPhone.value.match(/[^0-9\\(\\)\\+\\-]/g)) {\r\n                    success = false\r\n                }\r\n            } \r\n        })\r\n\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n    \r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n\r\n        statusBlock.textContent = loadText\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        \r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n            if(element == null) {\r\n                console.log('Верните блок!');\r\n            } else {\r\n                if (elem.type === 'block') {\r\n                    formBody[elem.id] = element.value\r\n                }\r\n            }\r\n            \r\n        })\r\n\r\n        if (validate(formElements)) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    statusBlock.textContent = successText\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = ''\r\n                    })\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText\r\n                })\r\n            \r\n        } else {\r\n            alert('Поля заполнены неверно!')\r\n            statusBlock.textContent = errorText\r\n        }\r\n    }\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error ('Верните форму')\r\n        }\r\n\r\n        form.addEventListener('submit', (event) => {\r\n            event.preventDefault()\r\n    \r\n            submitForm()\r\n        })\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://middle/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const benefitItems = document.querySelectorAll('.benefits__item')\n    const benefitsContent = document.querySelector('#benefits')\n\n    let currentSlide = 0\n\n    const checkForInnerWidth = () => {\n            benefitItems.forEach((benefitItem, i) => {\n                if (window.innerWidth >= 576) {\n                    if (i > 2) {\n                        benefitItem.classList.add('not-active')\n                       }\n                } else {\n                   if (i > 0) {\n                    benefitItem.classList.add('not-active')\n                   }\n                }   \n            })\n    }\n\n    checkForInnerWidth()\n    \n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    }\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    }\n\n    benefitsContent.addEventListener('click', (e) => {\n        \n        if (window.innerWidth >= 576) {\n            if (e.target.closest('.benefits__arrow--right')) {\n                benefitItems.forEach(benefitItem => {\n                    if (benefitItem.classList.contains('not-active')) {\n                        benefitItem.classList.remove('not-active')\n                    } else {\n                        benefitItem.classList.add('not-active')\n                    }\n                })\n            }\n            if (e.target.closest('.benefits__arrow--left')) {\n                benefitItems.forEach(benefitItem => {\n                    if (benefitItem.classList.contains('not-active')) {\n                        benefitItem.classList.remove('not-active')\n                    } else {\n                        benefitItem.classList.add('not-active')\n                    }\n                })\n            }\n        } else {\n            prevSlide(benefitItems, currentSlide, 'not-active')\n\n            if (e.target.closest('.benefits__arrow--right')) {\n                currentSlide++\n            } else if (e.target.closest('.benefits__arrow--left')) {\n                currentSlide--          \n            }\n            if (currentSlide >= benefitItems.length) {\n                currentSlide = 0\n            }\n            if (currentSlide < 0) {\n                currentSlide = benefitItems.length - 1\n            }\n    \n            nextSlide(benefitItems, currentSlide, 'not-active')\n        }   \n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smoothScrollBtn.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrollBtn.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScrollBtn = () => {\n    const scrollBtn = document.querySelector('.smooth-scroll')\n\n    window.addEventListener('scroll', () => {\n        if (window.pageYOffset < 600) {\n            scrollBtn.style.transition = \".3s\"\n            scrollBtn.style.opacity = \"0\"\n        } else {\n            scrollBtn.style.transition = \".3s\"\n            scrollBtn.style.opacity = \"1\"\n        }\n    })\n    \n\n    scrollBtn.addEventListener('click', (e) => {\n        e.preventDefault()\n        const anchor = document.getElementById('header')\n        anchor.scrollIntoView({block: \"start\", behavior: \"smooth\"});\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrollBtn);\n\n//# sourceURL=webpack://middle/./src/modules/smoothScrollBtn.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerDays = document.querySelectorAll('.count-wrap > .count_1 > span')\n    const timerHours = document.querySelectorAll('.count-wrap > .count_2 > span')\n    const timerMinutes = document.querySelectorAll('.count-wrap > .count_3 > span')\n    const timerSeconds = document.querySelectorAll('.count-wrap > .count_4 > span')\n\n    let intervalID\n\n    const getTimeRemaining = (deadline) => {\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow) / 1000\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\n        let hours = Math.floor((timeRemaining / 60 / 60)-days*24)\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        return { timeRemaining, days, hours, minutes, seconds }\n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining(deadline)\n        const zeroToNumber = () => {\n            timerDays.forEach(timerDays => {\n                if (getTime.days < 10) {\n                timerDays.textContent = '0' + getTime.days\n                }\n            })\n            timerHours.forEach(timerHours => {\n                if (getTime.hours < 10) {\n                    timerHours.textContent = '0' + getTime.hours\n                }\n            })\n            timerMinutes.forEach(timerMinutes => {\n                if (getTime.minutes < 10) {\n                    timerMinutes.textContent = '0' + getTime.minutes\n                }\n            })\n            timerSeconds.forEach(timerSeconds => {\n                if (getTime.seconds < 10) {\n                    timerSeconds.textContent = '0' + getTime.seconds\n                }\n            })\n            \n        }\n\n        timerDays.forEach(timerDays => {\n            timerDays.textContent = getTime.days\n        })\n        timerHours.forEach(timerHours => {\n            timerHours.textContent = getTime.hoursgit\n        })\n        timerMinutes.forEach(timerMinutes => {\n            timerMinutes.textContent = getTime.minutes\n        })\n        timerSeconds.forEach(timerSeconds => {\n            timerSeconds.textContent = getTime.seconds\n        })\n        \n        zeroToNumber()\n\n        if (getTime.timeRemaining < 0) {\n            clearInterval(intervalID)\n            timerDays.forEach(timerDays => {\n                timerDays.textContent = '00'\n\n            })\n            timerHours.forEach(timerHours => {\n                timerHours.textContent = '00'\n\n            })\n            timerMinutes.forEach(timerMinutes => {\n                timerMinutes.textContent = '00'\n\n            })\n            timerSeconds.forEach(timerSeconds => {\n                timerSeconds.textContent = '00'\n\n            })\n        }\n        \n    }\n    intervalID = setInterval(() => {\n        updateClock()\n    }, 1000);\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;