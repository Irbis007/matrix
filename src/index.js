

import './assets/css/style.css';


document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.container')


  const menuHamburger = document.querySelector('.menu__hamburger')
  const menu = document.querySelector('.header__menu')

  menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('menu__hamburger_active')
    menu.classList.toggle('header__menu_active')
  })

  const faqItems = document.querySelectorAll('.faq__body .item')

  faqItems.forEach((item, i) => {
    item.addEventListener('click', () =>{
      item.classList.toggle('active')
    })
  })

  const infoItem = document.querySelectorAll('.info__item');
  const infoItemStatus = document.querySelectorAll('.info__item-top__text')
  const infoItemImg = document.querySelectorAll('.info__item-top__img')

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

  

  const tabButtons = document.querySelectorAll('.info__item-tab__button')
  const tabContents = document.querySelectorAll('.info__item-tab__content')

  tabButtons.forEach((item, i) => {
    item.addEventListener('click', () => {
      removeClass(tabButtons, 'info__item-tab__content_active')
      removeClass(tabContents, 'info__item-tab__button_active')
      tabContents[i].classList.add('info__item-tab__content_active')
      item.classList.add('info__item-tab__button_active')
    })
  })

  const selectMale = document.querySelectorAll('.select__male-selected');

  selectMale.forEach((item, i) => {
    item.addEventListener('click', () => {
      item.parentElement.classList.toggle('select__male-selected_active')
    })
  })

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

  infoItemStatus.forEach((item, i) => {
    item.addEventListener('mouseover', () =>{
      infoItemHelp[i].classList.add('info__item-help_active')
    })
    item.addEventListener('mouseout', () =>{
      infoItemHelp[i].classList.remove('info__item-help_active')
    })
  })

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



  function removeClass(list) {
    list.forEach((item) => {
      item.classList.remove('info__item-tab__content_active')
      item.classList.remove('info__item-tab__button_active')
    })
  }
})
