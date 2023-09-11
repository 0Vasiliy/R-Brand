// Фунция модального окна и удаления кнопки после нажатия
function modal(){
    let btn = document.querySelector('.btns'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.popup-close');

    btn.addEventListener('click', function(e) {
    e.preventDefault();
    btn.style.display = 'none';      
    document.body.style.overflow = 'hidden';
    
});
    close.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'none';
    btn.style.display = 'block';   
    document.body.style.overflow = '';
    window.location.reload();
    
});

}
modal();

//  Функция всплытия модального окна через промежуток времени
function showModalByTime(selector, time) {
    setTimeout(function() {
        let display;
        let btn = document.querySelector('.btns')
        document.querySelectorAll('[data-modal]').forEach(item => {
            if (getComputedStyle(item).display !== 'none') {
                display = "block";
            }
        });
        btn.style.display = 'none';
        if (!display) {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = '${scroll}px';
        }
    }, time);
}
showModalByTime('.modal', 3000);


// showModalByTime('.modal', 7000);
// setTimeout(function() {
//   document.querySelector('.btns').click();
// }, 1000);



// Validation

(function () {
    'use strict'
let = forms.document.querySelectorAll('.needs-validation');
Array.prototype.slice.call(forms).forEach(function(form)
{
    form.addEventListener('submit', function (event) 
      {
        if(!form.checkValidity())
        {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated")
    },false );  
  } );
})();
