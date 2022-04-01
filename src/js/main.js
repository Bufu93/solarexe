// Custom scripts
// slider
$(document).ready(function(){
  $('.greentarif-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
});

$(document).ready(function(){
  $('.clients-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
});

// mask

const telSelector = document.getElementById('tel');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

// validate
const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.Inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите коректный телефон',
    },
  ]);