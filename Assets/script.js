
// this is an example of where I tried making arrays to run through jQuery to shortten this code and function. In the end I went back to the original code as I kept breaking things.
//<div class="container main">
        //<div class='row time-block'> 
        /*<div class="hour col-xs-2 col-sm-2 col-md-2 col-lg-2">
                9am
            </div>
            <textarea class="future col-xs-9 col-sm-9 col-md-9 col-lg-9 description" data-hour='9' id='div9'></textarea>
            <button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn" id="btn9"></button> */


          //  var timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
          // for ( i = 0; i < timeArray.length; i++) {
           //     var calRowTime = $(<div>);
          // calRowTime.addClass("hour");
           /*calRowTime.attr("time-slot", timeArray[i]);
           calRowTime.text(timeArray[i]);
           var calRowCont = $("<textarea>");
           calRowCont.addId(timeArray[i]);
           calRowCont.attr("cont-slot", timeArray[i]);
           var saveButton = $("<button>");
           saveButton.addId(timeArray[i]);
           saveButton.attr("save-btn", timeArray[i]);
           //here is where I get screwed up on how to append to bootstrap classes and divisions.*/ 

           




                
         //   }

           

  $(document).ready(function() {  
//variables for every slot 
  let timeElem = $('<p>');
  let dayElem = $('<p>');
  let slot1 = $('#div1');
  let slot2 = $('#div2');
  let slot3 = $('#div3');
  let slot4 = $('#div4');
  let slot5 = $('#div5');
  let slot12 = $('#div12');
  let slot11 = $('#div11');
  let slot10 = $('#div10');
  let slot9 = $('#div9');
//input saved input into local storage
  slot1.val(localStorage.getItem('Entry1'));
  slot2.val(localStorage.getItem('Entry2'));
  slot3.val(localStorage.getItem('Entry3'));
  slot4.val(localStorage.getItem('Entry4'));
  slot5.val(localStorage.getItem('Entry5'));
  slot9.val(localStorage.getItem('Entry9'));
  slot10.val(localStorage.getItem('Entry10'));
  slot11.val(localStorage.getItem('Entry11'));
  slot12.val(localStorage.getItem('Entry12'));
//the save button
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

      slot1.val('');
      slot2.val('');
      slot3.val('');
      slot4.val('');
      slot5.val('');
      slot9.val('');
      slot10.val('');
      slot11.val('');
      slot12.val('');
  }

  function tick() {

      dayElem.text(moment().format('LL'));
      timeElem.text(moment().format('hh:mm:ssA'));
      $('.jumbotron').append(dayElem);
      $('.jumbotron').append(timeElem);

  }
//if Feel like there is a function that I an run the array through of slot number and that all of this code is not necessary. Still working through this with my tutor. 
  function checkTime() {

      if (parseInt(slot12.attr('data-hour')) > timeNow) {
          slot12.removeClass('past present future');
          slot12.addClass('future');

      } else if (parseInt(slot12.attr('data-hour')) === timeNow) {
          slot12.removeClass('past present future');
          slot12.addClass('present');


      } else {

          slot12.removeClass('past present future');
          slot12.addClass('past');

      }

      if (parseInt(slot1.attr('data-hour')) > timeNow) {
          slot1.removeClass('past present future');
          slot1.addClass('future')

      } else if (parseInt(slot1.attr('data-hour')) === timeNow) {
          slot1.removeClass('past present future');
          slot1.addClass('present');


      } else {

          slot1.removeClass('past present future');
          slot1.addClass('past');

      }

      if (parseInt(slot2.attr('data-hour')) > timeNow) {
          slot2.removeClass('past present future');
          slot2.addClass('future');

      } else if (parseInt(slot2.attr('data-hour')) === timeNow) {
          slot2.removeClass('past present future');
          slot2.addClass('present');


      } else {

          slot2.removeClass('past present future');
          slot2.addClass('past');

      }

      if (parseInt(slot3.attr('data-hour')) > timeNow) {
          slot3.removeClass('past present future');
          slot3.addClass('future');

      } else if (parseInt(slot3.attr('data-hour')) === timeNow) {
          slot3.removeClass('past present future');
          slot3.addClass('present');


      } else {
          slot3.removeClass('past present future');
          slot3.addClass('past');

      }

      if (parseInt(slot4.attr('data-hour')) > timeNow) {
          slot4.removeClass('past present future');
          slot4.addClass('future');

      } else if (parseInt(slot4.attr('data-hour')) === timeNow) {
          slot4.removeClass('past present future');
          slot4.addClass('present');

      } else {
          slot4.removeClass('past present future');
          slot4.addClass('past');

      }

      if (parseInt(slot5.attr('data-hour')) > timeNow) {
          slot5.removeClass('past present future');
          slot5.addClass('future');
      } else if (parseInt(slot5.attr('data-hour')) === timeNow) {
          slot5.removeClass('past present future');
          slot5.addClass('present');


      } else {
          slot5.removeClass('past present future');
          slot5.addClass('past');

      }

      if (parseInt(slot9.attr('data-hour')) > timeNow) {
          slot9.removeClass('past present future');
          slot9.addClass('future');
      } else if (parseInt(slot9.attr('data-hour')) === timeNow) {
          slot9.removeClass('past present future');
          slot9.addClass('present');


      } else {
          slot9.removeClass('past present future');
          slot9.addClass('past');

      }

      if (parseInt(slot10.attr('data-hour')) > timeNow) {
          slot10.removeClass('past present future');
          slot10.addClass('future');
      } else if (parseInt(slot10.attr('data-hour')) === timeNow) {
          slot10.removeClass('past present future');
          slot10.addClass('present');


      } else {
          slot10.removeClass('past present future');
          slot10.addClass('past');

      }

      if (parseInt(slot11.attr('data-hour')) > timeNow) {
          slot11.removeClass('past present future');
          slot11.addClass('future');
      } else if (parseInt(slot11.attr('data-hour')) === timeNow) {
          slot11.removeClass('past present future');
          slot11.addClass('present');


      } else {
          slot11.removeClass('past present future');
          slot11.addClass('past');

      }

  }
//this function Tick is beyond the scope of my understanding so far but I like the way it works. 
  tick();
  setInterval(tick, 1000);
  setInterval(checkTime, 600000);
  clearBtn.on('click', clear);
//Still trying to figure out how to put these multiple lines into a function that runs an array through. Didn't quite get there for it to work 
  button9.on('click', function() {
      event.preventDefault();
      if (slot9.val() !== '') {
          localStorage.setItem('Entry9', slot9.val());
      }
  });

  button10.on('click', function() {
      event.preventDefault();
      if (slot10.val() !== '') {
          localStorage.setItem('Entry10', slot10.val());
      }

  });

  button11.on('click', function() {
      event.preventDefault();
      if (slot11.val() !== '') {
          localStorage.setItem('Entry11', slot11.val());

      }

  });

  button12.on('click', function() {
      event.preventDefault();
      if (slot12.val() !== '') {
          localStorage.setItem('Entry12', slot12.val());

      }
  });

  button1.on('click', function() {
      event.preventDefault();
      if (slot1.val() !== '') {
          localStorage.setItem('Entry1', slot1.val());

      }

  });

  button2.on('click', function() {
      event.preventDefault();
      if (slot2.val() !== '') {
          localStorage.setItem('Entry2', slot2.val());

      }

  });

  button3.on('click', function() {
      event.preventDefault();
      if (slot3.val() !== '') {
          localStorage.setItem('Entry3', slot3.val());

      }

  });

  button4.on('click', function() {
      event.preventDefault();

      if (slot4.val() !== '') {
          localStorage.setItem('Entry4', slot4.val());

      }

  });
  
  button5.on('click', function() {
      event.preventDefault();

      if (slot5.val() !== '') {
          localStorage.setItem('Entry5', slot5.val());

      }

  });

  checkTime();
});