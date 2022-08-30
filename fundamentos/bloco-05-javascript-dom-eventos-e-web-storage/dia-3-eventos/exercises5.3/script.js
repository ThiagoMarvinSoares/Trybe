function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  let ulList = document.querySelector('.days-container');
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let daysList = decemberDaysList[index];

    let daysListItem = document.createElement('li');
    daysListItem.innerText = daysList;
    daysListItem.className = 'day';
    ulList.appendChild(daysListItem);

    if (daysList === 24) {
      daysListItem.className = 'day holiday';
    }
    if (daysList === 25) {
      daysListItem.className = 'day holiday friday';
    }
    if (daysList === 31) {
      daysListItem.className = 'day holiday';
    }
    if (daysList === 4) {
      daysListItem.className = 'day friday';
    }
    if (daysList === 11) {
      daysListItem.className = 'day friday';
    }
    if (daysList === 18) {
      daysListItem.className = 'day friday';
    }
  }
  

  function createHolidayButtom(buttonName) {
    const createButon = document.querySelector('.buttons-container');
    const newChildBtn = document.createElement('button');
    newChildBtn.id = 'btn-holiday';

    newChildBtn.innerHTML = buttonName;
    // newChildBtn.id = newChildBtn.id;
    createButon.appendChild(newChildBtn);
  }
  createHolidayButtom('Feriados')
  
  function changeBtnColor() {
    const holidayBtn = document.getElementById('btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    holidayBtn.addEventListener('click', function () {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if(getHolidays[index].style.backgroundColor === 'white'){
          getHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
          getHolidays[index].style.backgroundColor = 'white';
        }
      }
    })
  }
  changeBtnColor();

  function buttonFriday(buttonName) {
    const btnsContainer = document.querySelector('.buttons-container');
    const createBtn = document.createElement('button');
    createBtn.id = 'btn-friday';
    btnsContainer.appendChild(createBtn);
    createBtn.innerHTML = buttonName;

  }
  buttonFriday('Sexta-feira');

  function changeTextFridayBtn(fridays) {
    const fridayBtn = document.querySelector('#btn-friday');
    let getFriday = document.getElementsByClassName('friday');
    let newText = 'Sextaaaaaaaaa';

    fridayBtn.addEventListener('click', function () {
      for (let index = 0; index < getFriday.length; index += 1) {
        if(getFriday[index].innerHTML !== newText){
          getFriday[index].innerHTML = newText;
        } else {
          getFriday[index].innerHTML =  fridays[index];
        }
      }
    })
  }
  let arrayDays = [4, 11, 18, 25];
  changeTextFridayBtn(arrayDays);