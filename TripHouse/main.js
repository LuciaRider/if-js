// Top-section
const filterPeople = document.querySelector('.children');
const filterPeopleOptions = document.querySelector('.filter_wrapper')

filterPeople.addEventListener('click', (e)  => {
  if (!e.target.closest('.filter_wrapper')) {
    filterPeopleOptions.classList.toggle('open');
  }
});


window.addEventListener('click', (e) => {
  const check = e.target.closest('.filter_wrapper') || e.target.closest('.children');
  if (!check && filterPeopleOptions.classList.contains('open')) {
    filterPeopleOptions.classList.remove('open');
  } 
});

// Adults
const filterAdultsMinus = document.querySelector('.filter_adults > .filter_plus-minus > .minus')
const filterAdultsPlus = document.querySelector('.filter_adults > .filter_plus-minus > .plus')
const filterAdultsNumber = document.querySelector('.filter_adults > .filter_plus-minus > .filter_number')
const adultsCounter = document.getElementById('input_adults_count')
// console.log(adultsCounter)
let adultsNumber = 1;
const adultsMaxNumber = 30;
filterAdultsPlus.addEventListener('click', function() {
  // toggleChilndrenFilters(e);
  adultsNumber++;
  if (adultsNumber >= adultsMaxNumber) {
    adultsNumber = adultsMaxNumber
    filterAdultsPlus.classList.add('plus_gray')
  } else {
    filterAdultsPlus.classList.remove('plus_gray')
  }
  if (adultsNumber > 1) {
    filterAdultsMinus.classList.add('minus_blue')
  }
  filterAdultsNumber.innerHTML = adultsNumber;
  adultsCounter.innerHTML = adultsNumber;
})

filterAdultsMinus.addEventListener('click', function() {
  // toggleChilndrenFilters(e);
  adultsNumber--;
  if (adultsNumber < 1) {
    adultsNumber = 1
  }
  if (adultsNumber > 1) {
    filterAdultsMinus.classList.add('minus_blue')
  } else {
    filterAdultsMinus.classList.remove('minus_blue')
  }
  if (adultsNumber < adultsMaxNumber) {
    filterAdultsPlus.classList.remove('plus_gray')
  }
  filterAdultsNumber.innerHTML = adultsNumber;
  adultsCounter.innerHTML = adultsNumber;
})

// Children
const filterWrapper = document.querySelector('filter_wrapper')
const filterChildrenMinus = document.querySelector('.filter_children > .filter_plus-minus > .minus')
const filterChildrenPlus = document.querySelector('.filter_children > .filter_plus-minus > .plus')
const filterChildrenNumber = document.querySelector('.filter_children > .filter_plus-minus > .filter_number')
const childrenCounter = document.getElementById('input_children_count')

function createAgeSelect() {
  return `
  <select class="age_select age_select_adaptive" name="age" id="age">
    ${createOptions(17)}
  </select>`
};

function createOptions(n) {
  let options = '';
  for (let i=0; i<=n; i++) {
    options += `<option value="${i}">${i} year old</option>`
  }
  return options
}

let childrenNumber = 0;
const childrenMaxNumber = 10;
filterChildrenPlus.addEventListener('click', function() {
  // toggleChilndrenFilters(e);
  childrenNumber++;
  if (childrenNumber >= childrenMaxNumber) {
    childrenNumber = childrenMaxNumber
    filterChildrenPlus.classList.add('plus_gray')
  } else {
    filterChildrenPlus.classList.remove('plus_gray')
  }
  if (childrenNumber >= 1) {
    filterChildrenMinus.classList.add('minus_blue')
    document.querySelector('.child_age').style.display = 'block'
    document.querySelector('.filter_wrapper').classList.add('filter_wrapper_select')
  } 
  if (childrenNumber >= 2) {
    document.querySelector('.child_age').style.display = 'none'
    document.querySelector('.age_select').classList.add('age_select_without-text')
    document.querySelector('.filter_wrapper').classList.add('filter_wrapper_select_without-text')
  }
  document.querySelector('.child_age_selects').innerHTML = ''
  for (let i = 0; i < childrenNumber; i++) {
    document.querySelector('.child_age_selects').insertAdjacentHTML('beforeend', createAgeSelect())
    document.querySelectorAll('.age_select').forEach(select => {
      select.addEventListener('click', function(e) {
        select.closest('.filter_wrapper').classList.add('open')
      })
    })
  }
  filterChildrenNumber.innerHTML = childrenNumber;
  childrenCounter.innerHTML = childrenNumber;
  console.log(childrenNumber)
})

filterChildrenMinus.addEventListener('click', function() {
  // toggleChilndrenFilters(e);
  childrenNumber--;
  
  if (childrenNumber <= 0) {
    childrenNumber = 0
    filterChildrenMinus.classList.remove('minus_blue')
    
    // document.querySelector('.child_age_moreOne').style.display = 'none'
    document.querySelector('.child_age').style.display = 'none'
    document.querySelector('.filter_wrapper').classList.remove('filter_wrapper_select_without-text')
    document.querySelector('.filter_wrapper').classList.remove('filter_wrapper_select')
    // document.querySelector('.age_select').classList.remove('age_select_without-text')
  } 
  if (childrenNumber < childrenMaxNumber) {
    filterChildrenPlus.classList.remove('plus_gray')
  }
  if (childrenNumber >= 1) {
    filterChildrenMinus.classList.add('minus_blue')
    document.querySelector('.child_age').style.display = 'block'
    document.querySelector('.filter_wrapper').classList.add('filter_wrapper_select')
  } 
  if (childrenNumber >= 2) {
    document.querySelector('.child_age').style.display = 'none'
    document.querySelector('.age_select').classList.add('age_select_without-text')
    document.querySelector('.filter_wrapper').classList.add('filter_wrapper_select_without-text')
  }
  document.querySelector('.child_age_selects').innerHTML = ''
  for (let i = 0; i < childrenNumber; i++) {
    document.querySelector('.child_age_selects').insertAdjacentHTML('beforeend', createAgeSelect())
  }
  filterChildrenNumber.innerHTML = childrenNumber;
  childrenCounter.innerHTML = childrenNumber;
})

// Rooms
const filterRoomsMinus = document.querySelector('.filter_rooms > .filter_plus-minus > .minus')
const filterRoomsPlus = document.querySelector('.filter_rooms > .filter_plus-minus > .plus')
const filterRoomsNumber = document.querySelector('.filter_rooms > .filter_plus-minus > .filter_number')
const roomsCounter = document.getElementById('input_rooms_count')
let roomsNumber = 1;
const roomsMaxNumber =30;
filterRoomsPlus.addEventListener('click', function() {
  // toggleChilndrenFilters(e);
  roomsNumber++;
  if (roomsNumber >= roomsMaxNumber) {
    roomsNumber = roomsMaxNumber
    filterRoomsPlus.classList.add('plus_gray')
  } else {
    filterRoomsPlus.classList.remove('plus_gray')
  }
  if (roomsNumber > 1) {
    filterRoomsMinus.classList.add('minus_blue')
  }
  filterRoomsNumber.innerHTML = roomsNumber;
  roomsCounter.innerHTML = roomsNumber;
})

filterRoomsMinus.addEventListener('click', function() {
  // toggleChilndrenFilters(e);
  roomsNumber--;
  if (roomsNumber < 1) {
    roomsNumber = 1
  }
  if (roomsNumber > 1) {
    filterRoomsMinus.classList.add('minus_blue')
  } else {
    filterRoomsMinus.classList.remove('minus_blue')
  }
  if (roomsNumber < roomsMaxNumber) {
    filterRoomsPlus.classList.remove('plus_gray')
  }
  filterRoomsNumber.innerHTML = roomsNumber;
})

// 12.2
const formButton = document.querySelector('.form_button');
formButton.addEventListener('click', function() {
  const childrenFetchParam = [].join(',');
  const search = document.querySelector('.destination_input').value;
  fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${search}&adults=${adultsNumber}&children=${childrenFetchParam}&rooms=${roomsNumber}`)
  .then(response => response.json())
  .then(data => console.log(data))
})

// lesson-13
function getRequest(url) {
  const cachedValue = sessionStorage.getItem(url);
  if (cachedValue) {
    return Promise.resolve(JSON.parse(cachedValue))
  } 
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      sessionStorage.setItem(url, JSON.stringify(data));
      return data;
    })
}

// Top-section_adaptive

// Homes guests loves

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    
    560: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    
    992: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

function createCard(data) {
  return `
    <div class="swiper-slide">
      <div class="content_img">
        <div class="image_wrapper">
          <img src="${data.imageUrl}" alt="${data.name}">
        </div>
        <p class="accent-blue">${data.name}</p>
        <p class="secondary">${data.city}, ${data.country}</p>
      </div>
    </div>`
};

(function () {
      fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then(response => response.json())
      .then(data => {
          data.forEach((element) => swiper.appendSlide(createCard(element)))
      })
      .catch(error => console.error(error))
  })();
    