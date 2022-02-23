// Top-section
const filterPeople = document.querySelector('.children');
const filterPeopleOptions = document.querySelector('.filter_wrapper')
filterPeople.addEventListener('click', function() {
  filterPeopleOptions.style.display = 'block'
});

// Closing the filter when clicking outside it
const inputChildrenClick = document.querySelector('.children');
const chilndrenFilters = document.querySelector('.filter_wrapper');
const toggleChilndrenFilters = function(e) {
  e.stopPropagation ()
  chilndrenFilters.classList.add('open');
}

document.querySelector('body').addEventListener('click', function(e) {
  if (!e.target.closest('.filter_wrapper') && chilndrenFilters.classList.contains('open')) {
    chilndrenFilters.classList.remove('open');
  }
})

const toggleChilndrenFiltersAdd = function(e) {
  console.log(e.target)
  document.querySelector('.filter_wrapper').classList.add('open')
}

// document.querySelector('.age_select').addEventListener('click', function() {
//   toggleChilndrenFiltersAdd();
// })

inputChildrenClick.addEventListener('click', toggleChilndrenFilters);

// document.addEventListener('click', function(e) {
//     const target = e.target;
//     console.log(target)
//     const its_chilndrenFilters = target == chilndrenFilters || chilndrenFilters.contains(target);
//     // const its_inputChildrenClick = target == inputChildrenClick;
//     const chilndrenFilters_is_active = chilndrenFilters.classList.contains('open');
    
//     // if (!its_chilndrenFilters && !its_inputChildrenClick && chilndrenFilters_is_active) {
//     if (!its_chilndrenFilters && chilndrenFilters_is_active) {
//         // toggleChilndrenFilters();
//     }
// });

// Adults
const filterAdultsMinus = document.querySelector('.filter_adults > .filter_plus-minus > .minus')
const filterAdultsPlus = document.querySelector('.filter_adults > .filter_plus-minus > .plus')
const filterAdultsNumber = document.querySelector('.filter_adults > .filter_plus-minus > .filter_number')
const adultsCounter = document.getElementById('input_adults_count')
// console.log(adultsCounter)
let adultsNumber = 1;
filterAdultsPlus.addEventListener('click', function() {
  // toggleChilndrenFilters(e);
  adultsNumber++;
  if (adultsNumber >= 30) {
    adultsNumber = 30
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
  if (adultsNumber < 30) {
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
    <option value="0">0 year old</option>
    <option value="1">1 year old</option>
    <option value="2">2 years old</option>
    <option value="3">3 years old</option>
    <option value="4">4 years old</option>
    <option value="5">5 years old</option>
    <option value="6">6 years old</option>
    <option value="7">7 years old</option>
    <option value="8">8 years old</option>
    <option value="9">9 years old</option>
    <option value="10">10 years old</option>
    <option value="11">11 years old</option>
    <option value="12">12 years old</option>
    <option value="13">13 years old</option>
    <option value="14">14 years old</option>
    <option value="15">15 years old</option>
    <option value="16">16 years old</option>
    <option value="17">17 years old</option>
  </select>`
};

let childrenNumber = 0;
filterChildrenPlus.addEventListener('click', function() {
  // toggleChilndrenFilters(e);
  childrenNumber++;
  if (childrenNumber >= 10) {
    childrenNumber = 10
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
    console.log(1)
    document.querySelector('.child_age_selects').insertAdjacentHTML('beforeend', createAgeSelect())
    document.querySelectorAll('.age_select').forEach(select => {
      select.addEventListener('click', function(e) {
        select.closest('.filter_wrapper').classList.add('open')
      })
    })
  }
  filterChildrenNumber.innerHTML = childrenNumber;
  childrenCounter.innerHTML = childrenNumber;
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
  if (childrenNumber < 10) {
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
filterRoomsPlus.addEventListener('click', function() {
  // toggleChilndrenFilters(e);
  roomsNumber++;
  if (roomsNumber >= 30) {
    roomsNumber = 30
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
  if (roomsNumber < 30) {
    filterRoomsPlus.classList.remove('plus_gray')
  }
  filterRoomsNumber.innerHTML = roomsNumber;
})

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

// fetch ('https://fe-student-api.herokuapp.com/api/hotels/popular')
//   .then(response => response.json())
//   .then(data => 
//     (function (){
//       data.forEach((element) => {
//         swiper.appendSlide(createCard(element))
//       })
//     }()));

(function () {
      fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then(response => response.json())
      .then(data => {
          data.forEach((element) => swiper.appendSlide(createCard(element)))
      })
      .catch(error => console.error(error))
  })();
    