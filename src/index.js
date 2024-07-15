import "./assets/css/style.css";
import { calculateFate, calculateYears, login, register } from "./script";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  const menuHamburger = document.querySelector(".menu__hamburger");
  const menu = document.querySelector(".header__menu");
  menuHamburger.addEventListener("click", () => {
    menuHamburger.classList.toggle("menu__hamburger_active");
    menu.classList.toggle("header__menu_active");
  });

  const faqItems = document.querySelectorAll(".faq__body .item");

  if (faqItems) {
    faqItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  }

  const infoItemStatus = document.querySelectorAll(".info__item-top__text");


 


  const tabButtons = document.querySelectorAll(".info__item-tab__button");
  const tabContents = document.querySelectorAll(".info__item-tab__content");

  if (tabButtons) {
    tabButtons.forEach((item, i) => {
      item.addEventListener("click", () => {
        removeClass(tabButtons, "info__item-tab__content_active");
        removeClass(tabContents, "info__item-tab__button_active");
        tabContents[i].classList.add("info__item-tab__content_active");
        item.classList.add("info__item-tab__button_active");
      });
    });
  }

  const selectMale = document.querySelectorAll(".select__male-selected");

  if (selectMale) {
    selectMale.forEach((item, i) => {
      item.addEventListener("click", () => {
        item.parentElement.classList.toggle("select__male-selected_active");
      });
    });
  }

  const selectMaleRadio = document.querySelectorAll(".select__male-radio");
  const selectMaleText = document.querySelectorAll(
    ".select__male-selected__text"
  );

  if (selectMale && selectMaleText) {
    selectMaleRadio.forEach((item, i) => {
      item.addEventListener("click", () => {
        if ((i + 1) / 2 < 1.5) {
          selectMale[0].parentElement.classList.remove(
            "select__male-selected_active"
          );
          selectMaleText[0].textContent = item.textContent;
        } else {
          selectMale[1].parentElement.classList.remove(
            "select__male-selected_active"
          );
          selectMaleText[1].textContent = item.textContent;
        }
      });
    });
  }

  const infoItemHelp = document.querySelectorAll(".info__item-help");

  if (infoItemHelp) {
    infoItemStatus.forEach((item, i) => {
      item.addEventListener("mouseover", () => {
        infoItemHelp[i].classList.add("info__item-help_active");
      });
      item.addEventListener("mouseout", () => {
        infoItemHelp[i].classList.remove("info__item-help_active");
      });
    });
  }

  const authLoginButton = document.querySelector(".auth__login");
  const authRegisterButton = document.querySelector(".auth__register");
  const authLoginForm = document.querySelector(".form__login");
  const authRegisterForm = document.querySelector(".form__register");

  if (authLoginButton) {
    authLoginButton.addEventListener("click", () => {
      authRegisterButton.classList.add("button_inactive");
      authLoginButton.classList.remove("button_inactive");
      authRegisterForm.classList.remove("form__wrapper_active");
      authLoginForm.classList.add("form__wrapper_active");
    });
    authRegisterButton.addEventListener("click", () => {
      authRegisterButton.classList.remove("button_inactive");
      authLoginButton.classList.add("button_inactive");
      authRegisterForm.classList.add("form__wrapper_active");
      authLoginForm.classList.remove("form__wrapper_active");
    });
  }

  const passwordVisible = document.querySelectorAll(".password__visible");
  const passwordInvisible = document.querySelectorAll(".password__invisible");
  const passwordInput = document.querySelectorAll(".password__input");

  passwordVisible.forEach((item, i) => {
    item.addEventListener("click", () => {
      item.classList.remove("password__state_active");
      passwordInvisible[i].classList.add("password__state_active");
      passwordInput[i].type = "password";
    });
  });
  passwordInvisible.forEach((item, i) => {
    item.addEventListener("click", () => {
      item.classList.remove("password__state_active");
      passwordVisible[i].classList.add("password__state_active");
      passwordInput[i].type = "text";
    });
  });

  const loginForm = document.querySelector(".auth__form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  const cabinetSelect = document.querySelector(".cabinet__extension-select");
  const cabinetSelectTop = document.querySelector(
    ".cabinet__extension-select__top"
  );
  const cabinetSelectItems = document.querySelectorAll(
    ".cabinet__extension-select__item"
  );
  const cabinetSelected = document.querySelector(
    ".cabinet__extension-select__selected"
  );

  if (cabinetSelect) {
    cabinetSelectTop.addEventListener("click", () => {
      cabinetSelect.classList.toggle("cabinet__extension-select_active");
    });

    cabinetSelectItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        cabinetSelected.textContent = item.textContent;
        cabinetSelect.classList.remove("cabinet__extension-select_active");
      });
    });
  }

  const payForm = document.querySelector(".pay__form");

  const payFormPhone = document.getElementById("pay-data-phone");
  const payFormEmail = document.getElementById("pay-data-email");
  const payFormCheckbox = document.getElementById("pay-checkbox");
  const payFormError = document.getElementById("form-pay-error");

  if (payForm) {
    payForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!payFormPhone.value.length) {
        payFormPhone.style.border = "2px solid red";
        payFormError.style.display = "flex";
      }
      if (!payFormEmail.value.length) {
        payFormEmail.style.border = "2px solid red";
        payFormError.style.display = "flex";
      }
      if (!payFormCheckbox.checked) {
        payFormCheckbox.parentElement.style.backgroundColor = "#ffe9e9";
        payFormError.style.display = "flex";
      }
    });

    payFormPhone.addEventListener("input", () => {
      payFormPhone.style.border = "none";
      removeError();
    });
    payFormEmail.addEventListener("input", () => {
      payFormEmail.style.border = "none";
      removeError();
    });

    function removeError() {
      if (
        payFormEmail.value.length &&
        payFormPhone.value.length &&
        payFormCheckbox.checked
      ) {
        payFormError.style.display = "none";
      }
    }

    payFormCheckbox.addEventListener("change", () => {
      payFormCheckbox.parentElement.style.background = "transparent";
      removeError();
    });
  }

  const structureItem = document.querySelectorAll(".structure__item-body");
  const structureContent = document.querySelectorAll(
    ".structure__item-content"
  );

  if (structureItem) {
    structureItem.forEach((item, i) => {
      item.addEventListener("mouseover", () => {
        structureContent[i].classList.add("structure__item-content_active");
      });
      item.addEventListener("mouseout", () => {
        structureContent[i].classList.remove("structure__item-content_active");
      });
    });
  }

  const formAuth = document.querySelector(".auth__form");
  const formAuthButton = document.querySelector(".auth__button.login__button");
  const formLogin = document.querySelector(".form__login");
  const formRegister = document.querySelector(".form__register");

  const loginEmail = document.querySelector("#auth-login-email");
  const loginPassword = document.querySelector("#auth-login-password");

  const registerEmail = document.querySelector("#auth-register-email");
  const registerConfPassword = document.querySelector(
    "#auth-register-conf-password"
  );
  const registerPassword = document.querySelector("#auth-register-password");

  if (formAuth) {

    const AuthFunc = async () => {
      if (formLogin.classList.contains("form__wrapper_active")) {
      
        login(loginEmail.value, loginPassword.value);

      } else if (formRegister.classList.contains("form__wrapper_active")) {

        if (registerConfPassword.value == registerPassword.value) {
          const res = await register(registerEmail.value, registerPassword.value).then(res => {
          })
        } else {
          activateErrorAuthForm('Пароли не соответствуют друг другу')
        }

        // register(registerEmail.value, registerPassword.value)
      }
    };

    formAuthButton.addEventListener("click", (e) => {
      e.preventDefault();
      AuthFunc();
    });
  }

  const formFate = document.querySelector("#form-calculate-fate");
  const formFateName = document.querySelector("#form-fate-name");
  const formFateBirthday = document.querySelector("#form-fate-birthday");
  const formFateMale = document.querySelector("#form-fate-male");

  const formYears = document.querySelector("#form-calculate-years");
  const formYearsName = document.querySelector("#form-years-name");
  const formYearsBirthday = document.querySelector("#form-years-birthday");
  const formYearsMale = document.querySelector("#form-years-male");

  const formCompatibility = document.querySelector(
    "#form-calculate-compatibility"
  );
  const formCompatibilityWomanName = document.querySelector(
    "#form-compatibility-woman-name"
  );
  const formCompatibilityWomanBirthday = document.querySelector(
    "#form-compatibility-woman-birthday"
  );
  const formCompatibilityManMale = document.querySelector(
    "#form-compatibility-man-name"
  );
  const formCompatibilityManBirthday = document.querySelector(
    "#form-compatibility-man-birthday"
  );

  let fate;

  if (formYears) {
    formYears.addEventListener("submit", (e) => {
      e.preventDefault();
      calculateYears(
        formFateBirthday.value,
        getMale(formFateMale.textConten),
        formYearsName.value
      );
      // window.location.href = 'http://localhost:8000/prognosis.html'
    });
  }

  if (formFate) {
    formFate.addEventListener("submit", (e) => {
      e.preventDefault();
      calculateFate(
        formFateBirthday.value,
        getMale(formYearsMale.textConten),
        formFateName.value
      ).then(res => {
        localStorage.setItem('fate', JSON.stringify(res))
      })
      .finally(() => {        
      //  window.location.href = 'http://localhost:8000/calculators.html'
      })
    });
  }


  // if(formFate){
  //   formFate.addEventListener('submit', (e) =>{
  //     e.preventDefault()
  //     calculateFate(formFateBirthday.value, formFateMale.textContent, formFateName.value)
  //     // window.location.href = 'http://localhost:8000/calculators.html'
  //   })
  // }

  const authFormError = document.querySelector("#form-auth-error");
  const authFormErrorText = document.querySelector(
    "#form-auth-error .error__text"
  );


  const calculators = document.querySelector('.calculators__list')

  if(calculators){
    let data = JSON.parse(localStorage.getItem('fate'));
    for(let value in data) {
      const block = document.createElement('li')

      block.classList.add('info__item')

      value.includes('🔒') ? block.classList.add('info__item_disabled') : null

      console.log(data[value])

      console.log(data[value])

      if(!value.includes('🔒')){
        block.innerHTML = `
        <div class="info__item-wrapper">
                 <div class="info__item-top">
                   <h3 class="info__item-top__title">${value}</h3>
                   <div class="info__item-top__status">Блок открыт<span>
                    
                   </span></div>
                   <div class="info__item-help">
                     <span>Выберите тариф,</span> чтобы <br> получить материалы
                   </div>
                 </div>
                 <div class="info__item-content">
                   <div class="info__item-body">
                         <div class="info__item-body__wrapper">
                           <h5 class="text_green info__item-body__title">В плюсе</h5>
                           <p>${data[value]['Причины событий']['В плюсе']}</p>
                           <h5 class="text_red info__item-body__title">В минусе</h5>
                           <p>${data[value]['Причины событий']['В минусе']}</p>
                         </div>
                   </div>
                 </div>
               </div>
       `;
      } else{
        block.innerHTML = `
        <div class="info__item-wrapper">
                 <div class="info__item-top">
                   <h3 class="info__item-top__title">${value.slice(2, value.length)}</h3>
                   <div class="info__item-top__status">Блок недоступен<span>
                    
                   </span></div>
                   <div class="info__item-help">
                     <span>Выберите тариф,</span> чтобы <br> получить материалы
                   </div>
                 </div>
                 <div class="info__item-content">
                   <div class="info__item-body">

                   </div>
                 </div>
               </div>
       `;
      }

     
    
      block.addEventListener('click', e => {
        if (
          !block.classList.contains("info__item_disabled") &&
          !e.target.closest(".info__item-body") 
          &&  !block.classList.contains("info__item_active")
        ) {
          block.classList.add("info__item_active");
        } else {
          block.classList.remove("info__item_active");
        }
      })

      calculators.append(block)
    }
  }

  function activateErrorAuthForm(errorMessage) {
    authFormError.style.display = "flex";
    authFormErrorText.textContent = errorMessage;
  }
  function removeErrorAuthForm() {
    authFormError.style.display = "none";
  }

  function getMale(male) {
    let res
    if(male == 'Женщина'){
      return res = 'Ж'
    } else {
      return res = 'М'
    }
  }

  function removeClass(list) {
    list.forEach((item) => {
      item.classList.remove("info__item-tab__content_active");
      item.classList.remove("info__item-tab__button_active");
    });
  }
});
