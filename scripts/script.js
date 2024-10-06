const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 50,
  loopAdditionalSlides: 2,
  initialSlide:3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
    dynamicMainBullets:4,
  },
  slidesPerView:"auto",
  // If we need pagination
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const validator = new JustValidate('.footer__form');

validator
  .addField('#username', [
    {
      rule: 'required',
      errorMessage: 'Имя является обязательным полем для заполнения',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage:"Минимальная длина имени - 2 символа",
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage:"Максимальная длина имени - 15 символов"
    },
  ])
  .addField('#usertel', [
    {
      rule: 'required',
      errorMessage: 'Телефон является обязательным полем для заполнения',
    },
    {
      validator:()=>{
        const phone = selector.inputmask.unmaskedvalue()
        return phone.length == 10
      },
      errorMessage:"Некорректный ввод телефона",
    },
  ]);

var selector = document.getElementById("usertel");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

document.querySelector('#burger-open').addEventListener('click',()=>{
  document.querySelector('.pop-up').classList.add('is-active')
})
document.querySelector('#burger-close').addEventListener('click',()=>{
  document.querySelector('.pop-up').classList.remove('is-active')
})
