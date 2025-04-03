 const header = document.querySelector(".header")

 if (window.innerWidth > 430) {
    window.addEventListener("scroll", () => {
        if(window.scrollY != 0) {
            header.classList.add("header-blur")
        } else {
            header.classList.remove("header-blur")
        }
    });
 }

 function replaceBrWithSpace() {
    if (window.innerWidth <= 768) {
      document.querySelectorAll('br').forEach(br => {
        br.replaceWith(' '); // Заменяем <br> на пробел
      });
    }
  }
  
  replaceBrWithSpace();
  window.addEventListener('resize', replaceBrWithSpace);

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
      document.querySelector('.selected').textContent = this.textContent;
    });
  });

 // Удаляем настройки для datepicker и добавляем локализацию для daterangepicker
$(function() {
    // Локализация
    $.fn.daterangepicker.locale = {
        applyLabel: 'Применить',
        cancelLabel: 'Отмена',
        daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        monthNames: [
            'Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август',
            'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        firstDay: 1,
        format: 'DD.MM.YYYY',
        separator: ' - '
    };

    // Инициализация daterangepicker
    $('#datepicker').daterangepicker({
        autoApply: true,
        autoUpdateInput: false,
        opens: 'center',
        minDate: moment(),
        locale: $.fn.daterangepicker.locale,
        showDropdowns: true,
    });

    // Обработчики событий
    $('#datepicker').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(
            picker.startDate.format('DD.MM.YYYY') + 
            ' - ' + 
            picker.endDate.format('DD.MM.YYYY')
        );
    });

    $('#datepicker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

    // Открытие календаря при клике на иконку
    $('.datepicker-icon').click(function() {
        $('#datepicker').data('daterangepicker').toggle();
    });
});

// nav button

const nav = document.querySelector('#header-nav');
const navBtn = document.querySelector('#menu-button');
const navBtnImg = document.querySelector('#menu-button-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/nav-opened.svg"
    } else {
        navBtnImg.src = "./img/nav-closed.svg"
    }
}