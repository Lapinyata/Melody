$(document).ready(function () {
  console.log("сайт готов к работе"); //сообщение в консоль о том, что сайт готов
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); // кнопка увеличения этажа
  var counterDown = $(".counter-down"); // кнопка уменьшения этажа
  var modal = $(".modal"); // переменная хранит в себе модальное окно
  var modalCloseButton = $(".modal-close-button"); // переменная хранит в себе кнопку закрытия модального окна
  var viewFlatsButton = $(".view-flats"); // кнопка для просмотра этажей
  var flatPath = $(".flats path"); //каждая отдельная квартира в SVG

  floorPath.on('mouseover', function() { // функция при наведении мышью на этаж
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счётчик справа
  });

  floorPath.on('click', toggleModal); // открытие модального окна при клике на этаж

  viewFlatsButton.on('click', toggleModal); // открытие модального окна при клике на кнопку

  modalCloseButton.on('click', toggleModal); // закрытие модального окна при клике на крестик

  counterUp.on('click', function() { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа, оно должно быть не больше 18
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик справа
      floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
      $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on('click', function() {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  function toggleModal() { // функция открытия/закрытия окна
    modal.toggleClass('is-open');
  };

  flatPath.on('mouseover', function() { // функция при наведении мышью на квартиру
    //floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    //currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
    //$(".counter").text(currentFloor); // записываем значение этажа в счётчик справа
  });

});