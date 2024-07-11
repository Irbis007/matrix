

import './assets/css/style.css';


document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.container')


  const menuHamburger = document.querySelector('.menu__hamburger')
  const menu = document.querySelector('.header__menu')
  console.log(2)
  menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('menu__hamburger_active')
    menu.classList.toggle('header__menu_active')
  })

  const faqItems = document.querySelectorAll('.faq__body .item')

  if(faqItems) {
    faqItems.forEach((item, i) => {
      item.addEventListener('click', () =>{
        item.classList.toggle('active')
      })
    })
  }

  const infoItem = document.querySelectorAll('.info__item');
  const infoItemStatus = document.querySelectorAll('.info__item-top__text')
  const infoItemImg = document.querySelectorAll('.info__item-top__img')

  if(infoItem){
    infoItem.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        if(!item.classList.contains('info__item_disabled') && !e.target.closest('.info__item-body' ) && e.target.closest('.info__item-top')){
          item.classList.toggle('info__item_active')
        }
      })
      if(item.classList.contains('info__item_disabled')){
        infoItemStatus[i].textContent = 'Блок недоступен';
        
        infoItemImg[i].innerHTML = `
          <img src="./images/icons/block-close.png">
        `;
      }
    })
  }

  

  const tabButtons = document.querySelectorAll('.info__item-tab__button')
  const tabContents = document.querySelectorAll('.info__item-tab__content')

  if(tabButtons){
    tabButtons.forEach((item, i) => {
      item.addEventListener('click', () => {
        removeClass(tabButtons, 'info__item-tab__content_active')
        removeClass(tabContents, 'info__item-tab__button_active')
        tabContents[i].classList.add('info__item-tab__content_active')
        item.classList.add('info__item-tab__button_active')
      })
    })
  }

  const selectMale = document.querySelectorAll('.select__male-selected');

  if(selectMale){
    selectMale.forEach((item, i) => {
      item.addEventListener('click', () => {
        item.parentElement.classList.toggle('select__male-selected_active')
      })
    })
  }

  const selectMaleRadio = document.querySelectorAll('.select__male-radio')
  const selectMaleText = document.querySelectorAll('.select__male-selected__text')

  if(selectMale && selectMaleText){
    selectMaleRadio.forEach((item, i) => {
      item.addEventListener('click', () => {
        if((i + 1) / 2 < 1.5){
          selectMale[0].parentElement.classList.remove('select__male-selected_active')
          selectMaleText[0].textContent = item.textContent
        } else{
          selectMale[1].parentElement.classList.remove('select__male-selected_active')
          selectMaleText[1].textContent = item.textContent
        }
  
      })
    })
  }
  


  const infoItemHelp = document.querySelectorAll('.info__item-help')

  if(infoItemHelp){
    infoItemStatus.forEach((item, i) => {
      item.addEventListener('mouseover', () =>{
        infoItemHelp[i].classList.add('info__item-help_active')
      })
      item.addEventListener('mouseout', () =>{
        infoItemHelp[i].classList.remove('info__item-help_active')
      })
    })
  }

  const authLoginButton = document.querySelector('.auth__login')
  const authRegisterButton = document.querySelector('.auth__register')
  const authLoginForm = document.querySelector('.form__login')
  const authRegisterForm = document.querySelector('.form__register')

if(authLoginButton){
  authLoginButton.addEventListener('click', () => {
    authRegisterButton.classList.add('button_inactive')
    authLoginButton.classList.remove('button_inactive')
    authRegisterForm.classList.remove('form__wrapper_active')
    authLoginForm.classList.add('form__wrapper_active')
  })
  authRegisterButton.addEventListener('click', () => {
    authRegisterButton.classList.remove('button_inactive')
    authLoginButton.classList.add('button_inactive')
    authRegisterForm.classList.add('form__wrapper_active')
    authLoginForm.classList.remove('form__wrapper_active')
  })
}

  const passwordVisible = document.querySelectorAll('.password__visible')
  const passwordInvisible = document.querySelectorAll('.password__invisible')
  const passwordInput = document.querySelectorAll('.password__input')

  passwordVisible.forEach((item, i) => {
    item.addEventListener('click', () => {
      item.classList.remove('password__state_active');
      passwordInvisible[i].classList.add('password__state_active');
      passwordInput[i].type = 'password';
    })
  })
  passwordInvisible.forEach((item, i) => {
    item.addEventListener('click', () => {
      item.classList.remove('password__state_active');
      passwordVisible[i].classList.add('password__state_active')
      passwordInput[i].type = 'text';
    })
  })

  const loginForm  = document.querySelector('.auth__form')

  if(loginForm){
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault()
    })
  }

  const cabinetSelect = document.querySelector('.cabinet__extension-select');
  const cabinetSelectTop = document.querySelector('.cabinet__extension-select__top');
  const cabinetSelectItems = document.querySelectorAll('.cabinet__extension-select__item');
  const cabinetSelected = document.querySelector('.cabinet__extension-select__selected');


  if(cabinetSelect){
    cabinetSelectTop.addEventListener('click', () => {
      cabinetSelect.classList.toggle('cabinet__extension-select_active')
    })
  
    cabinetSelectItems.forEach((item, i) => {
      item.addEventListener('click', () => {
        cabinetSelected.textContent = item.textContent;
        cabinetSelect.classList.remove('cabinet__extension-select_active')
      })
    })
  }


  const payForm = document.querySelector('.pay__form')

  const payFormPhone = document.getElementById('pay-data-phone')
  const payFormEmail = document.getElementById('pay-data-email')
  const payFormCheckbox = document.getElementById('pay-checkbox')
  const payFormError = document.getElementById('form-pay-error')

  if(payForm){
    payForm.addEventListener('submit', (e) => {
      e.preventDefault()
      if(!payFormPhone.value.length){
        payFormPhone.style.border = '2px solid red'
        payFormError.style.display = 'flex'
      }
      console.log(payFormEmail)
      if(!payFormEmail.value.length){
        payFormEmail.style.border = '2px solid red'
        payFormError.style.display = 'flex'
      }
      if(!payFormCheckbox.checked){
        payFormCheckbox.parentElement.style.backgroundColor = '#ffe9e9'
        payFormError.style.display = 'flex'
      }
    })

    payFormPhone.addEventListener('input', () =>{
      payFormPhone.style.border = 'none'
      removeError()
    })
    payFormEmail.addEventListener('input', () =>{
      payFormEmail.style.border = 'none'
      removeError()
    })

    function removeError() {
      if(payFormEmail.value.length && payFormPhone.value.length && payFormCheckbox.checked){
      payFormError.style.display = 'none'
      }
    }

    payFormCheckbox.addEventListener('change', () =>{
      payFormCheckbox.parentElement.style.background = 'transparent'
      removeError()
    })

  }

  const structureItem = document.querySelectorAll('.structure__item-body')
  const structureContent = document.querySelectorAll('.structure__item-content')

  if(structureItem){
    structureItem.forEach((item, i) => {
      item.addEventListener('mouseover', () =>{
        structureContent[i].classList.add('structure__item-content_active')
      })
      item.addEventListener('mouseout', () =>{
        structureContent[i].classList.remove('structure__item-content_active')
      })
    })
  }




  function removeClass(list) {
    list.forEach((item) => {
      item.classList.remove('info__item-tab__content_active')
      item.classList.remove('info__item-tab__button_active')
    })
  }
})
