$(document).ready(function() {

  let timeEl = $('<p>');
  let dayEl = $('<p>');
  let box1 = $('#div1');
  let box2 = $('#div2');
  let box3 = $('#div3');
  let box4 = $('#div4');
  let box5 = $('#div5');
  let box12 = $('#div12');
  let box11 = $('#div11');
  let box10 = $('#div10');
  let box9 = $('#div9');

  box1.val(localStorage.getItem('Entry1'));
  box2.val(localStorage.getItem('Entry2'));
  box3.val(localStorage.getItem('Entry3'));
  box4.val(localStorage.getItem('Entry4'));
  box5.val(localStorage.getItem('Entry5'));
  box9.val(localStorage.getItem('Entry9'));
  box10.val(localStorage.getItem('Entry10'));
  box11.val(localStorage.getItem('Entry11'));
  box12.val(localStorage.getItem('Entry12'));

  let button9 = $('#btn9');
  let button10 = $('#btn10');
  let button11 = $('#btn11');
  let button12 = $('#btn12');
  let button1 = $('#btn1');
  let button2 = $('#btn2');
  let button3 = $('#btn3');
  let button4 = $('#btn4');
  let button5 = $('#btn5');
  let clearBtn = $('#clearBtn');

  var timeNow = parseInt(moment().format('HH'));

  function clear() {
      localStorage.clear();

      box1.val('');
      box2.val('');
      box3.val('');
      box4.val('');
      box5.val('');
      box9.val('');
      box10.val('');
      box11.val('');
      box12.val('');
  }

  function tick() {

      dayEl.text(moment().format('LL'));
      timeEl.text(moment().format('hh:mm:ssA'));
      $('.jumbotron').append(dayEl);
      $('.jumbotron').append(timeEl);

  }

  function checkTime() {

      if (parseInt(box12.attr('data-hour')) > timeNow) {
          box12.removeClass('past present future');
          box12.addClass('future');

      } else if (parseInt(box12.attr('data-hour')) === timeNow) {
          box12.removeClass('past present future');
          box12.addClass('present');


      } else {

          box12.removeClass('past present future');
          box12.addClass('past');

      }

      if (parseInt(box1.attr('data-hour')) > timeNow) {
          box1.removeClass('past present future');
          box1.addClass('future')

      } else if (parseInt(box1.attr('data-hour')) === timeNow) {
          box1.removeClass('past present future');
          box1.addClass('present');


      } else {

          box1.removeClass('past present future');
          box1.addClass('past');

      }

      if (parseInt(box2.attr('data-hour')) > timeNow) {
          box2.removeClass('past present future');
          box2.addClass('future');

      } else if (parseInt(box2.attr('data-hour')) === timeNow) {
          box2.removeClass('past present future');
          box2.addClass('present');


      } else {

          box2.removeClass('past present future');
          box2.addClass('past');

      }

      if (parseInt(box3.attr('data-hour')) > timeNow) {
          box3.removeClass('past present future');
          box3.addClass('future');

      } else if (parseInt(box3.attr('data-hour')) === timeNow) {
          box3.removeClass('past present future');
          box3.addClass('present');


      } else {
          box3.removeClass('past present future');
          box3.addClass('past');

      }

      if (parseInt(box4.attr('data-hour')) > timeNow) {
          box4.removeClass('past present future');
          box4.addClass('future');

      } else if (parseInt(box4.attr('data-hour')) === timeNow) {
          box4.removeClass('past present future');
          box4.addClass('present');

      } else {
          box4.removeClass('past present future');
          box4.addClass('past');

      }

      if (parseInt(box5.attr('data-hour')) > timeNow) {
          box5.removeClass('past present future');
          box5.addClass('future');
      } else if (parseInt(box5.attr('data-hour')) === timeNow) {
          box5.removeClass('past present future');
          box5.addClass('present');


      } else {
          box5.removeClass('past present future');
          box5.addClass('past');

      }

      if (parseInt(box9.attr('data-hour')) > timeNow) {
          box9.removeClass('past present future');
          box9.addClass('future');
      } else if (parseInt(box9.attr('data-hour')) === timeNow) {
          box9.removeClass('past present future');
          box9.addClass('present');


      } else {
          box9.removeClass('past present future');
          box9.addClass('past');

      }

      if (parseInt(box10.attr('data-hour')) > timeNow) {
          box10.removeClass('past present future');
          box10.addClass('future');
      } else if (parseInt(box10.attr('data-hour')) === timeNow) {
          box10.removeClass('past present future');
          box10.addClass('present');


      } else {
          box10.removeClass('past present future');
          box10.addClass('past');

      }

      if (parseInt(box11.attr('data-hour')) > timeNow) {
          box11.removeClass('past present future');
          box11.addClass('future');
      } else if (parseInt(box11.attr('data-hour')) === timeNow) {
          box11.removeClass('past present future');
          box11.addClass('present');


      } else {
          box11.removeClass('past present future');
          box11.addClass('past');

      }

  }

  tick();
  setInterval(tick, 1000);
  setInterval(checkTime, 600000);
  clearBtn.on('click', clear);

  button9.on('click', function() {
      event.preventDefault();
      if (box9.val() !== '') {
          localStorage.setItem('Entry9', box9.val());
      }
  });

  button10.on('click', function() {
      event.preventDefault();
      if (box10.val() !== '') {
          localStorage.setItem('Entry10', box10.val());
      }

  });

  button11.on('click', function() {
      event.preventDefault();
      if (box11.val() !== '') {
          localStorage.setItem('Entry11', box11.val());

      }

  });

  button12.on('click', function() {
      event.preventDefault();
      if (box12.val() !== '') {
          localStorage.setItem('Entry12', box12.val());

      }
  });

  button1.on('click', function() {
      event.preventDefault();
      if (box1.val() !== '') {
          localStorage.setItem('Entry1', box1.val());

      }

  });

  button2.on('click', function() {
      event.preventDefault();
      if (box2.val() !== '') {
          localStorage.setItem('Entry2', box2.val());

      }

  });

  button3.on('click', function() {
      event.preventDefault();
      if (box3.val() !== '') {
          localStorage.setItem('Entry3', box3.val());

      }

  });

  button4.on('click', function() {
      event.preventDefault();

      if (box4.val() !== '') {
          localStorage.setItem('Entry4', box4.val());

      }

  });
  
  button5.on('click', function() {
      event.preventDefault();

      if (box5.val() !== '') {
          localStorage.setItem('Entry5', box5.val());

      }

  });

  checkTime();
});