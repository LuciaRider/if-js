// Top-section
const filterPeople = document.querySelector('.children');
const filterPeopleOptions = document.querySelector('.filter_wrapper')
filterPeople.addEventListener('click', function() {
  filterPeopleOptions.style.display = 'block'
});

// Closing the filter when clicking outside it
const inputChildrenClick = document.querySelector('.children');
const chilndrenFilters = document.querySelector('.filter_wrapper');
const toggleChilndrenFilters = function() {
  chilndrenFilters.classList.toggle('open');
}

const toggleChilndrenFiltersAdd = function() {
  chilndrenFilters.classList.add('open')
}

inputChildrenClick.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleChilndrenFilters();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_chilndrenFilters = target == chilndrenFilters || chilndrenFilters.contains(target);
    const its_inputChildrenClick = target == inputChildrenClick;
    const chilndrenFilters_is_active = chilndrenFilters.classList.contains('open');
    
    if (!its_chilndrenFilters && !its_inputChildrenClick && chilndrenFilters_is_active) {
        toggleChilndrenFilters();
    }
});

document.querySelector('.age_select').addEventListener('click', function() {
  toggleChilndrenFiltersAdd();
})

// Adults
const filterAdultsMinus = document.querySelector('.filter_adults > .filter_plus-minus > .minus')
const filterAdultsPlus = document.querySelector('.filter_adults > .filter_plus-minus > .plus')
const filterAdultsNumber = document.querySelector('.filter_adults > .filter_plus-minus > .filter_number')
let adultsNumber = 1;
filterAdultsPlus.addEventListener('click', function() {
  toggleChilndrenFilters();
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
})

filterAdultsMinus.addEventListener('click', function() {
  toggleChilndrenFilters();
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
})

// Children
const filterWrapper = document.querySelector('filter_wrapper')
const filterChildrenMinus = document.querySelector('.filter_children > .filter_plus-minus > .minus')
const filterChildrenPlus = document.querySelector('.filter_children > .filter_plus-minus > .plus')
const filterChildrenNumber = document.querySelector('.filter_children > .filter_plus-minus > .filter_number')
let childrenNumber = 0;
filterChildrenPlus.addEventListener('click', function() {
  toggleChilndrenFilters();
  childrenNumber++;
  if (childrenNumber >= 10) {
    childrenNumber = 10
    filterChildrenPlus.classList.add('plus_gray')
  } else {
    filterChildrenPlus.classList.remove('plus_gray')
  }
  if (childrenNumber >= 1) {
    filterChildrenMinus.classList.add('minus_blue')
    document.querySelector('.child_age_moreOne').style.display = 'block'
    document.querySelector('.filter_wrapper').classList.add('filter_wrapper_select')
  } 
  if (childrenNumber >= 2) {
    document.querySelector('.child_age').style.display = 'none'
    document.querySelector('.age_select').classList.add('age_select_without-text')
    document.querySelector('.filter_wrapper').classList.add('filter_wrapper_select_without-text')
  }
  filterChildrenNumber.innerHTML = childrenNumber;
})

filterChildrenMinus.addEventListener('click', function() {
  toggleChilndrenFilters();
  childrenNumber--;
  if (childrenNumber <= 0) {
    childrenNumber = 0
    filterChildrenMinus.classList.remove('minus_blue')
    document.querySelector('.child_age_moreOne').style.display = 'none'
    document.querySelector('.child_age').style.display = 'block'
    document.querySelector('.filter_wrapper').classList.remove('filter_wrapper_select_without-text')
    document.querySelector('.filter_wrapper').classList.remove('filter_wrapper_select')
    document.querySelector('.age_select').classList.remove('age_select_without-text')
  } 
  if (childrenNumber < 10) {
    filterChildrenPlus.classList.remove('plus_gray')
  }
  filterChildrenNumber.innerHTML = childrenNumber;
})

// Rooms
const filterRoomsMinus = document.querySelector('.filter_rooms > .filter_plus-minus > .minus')
const filterRoomsPlus = document.querySelector('.filter_rooms > .filter_plus-minus > .plus')
const filterRoomsNumber = document.querySelector('.filter_rooms > .filter_plus-minus > .filter_number')
let roomsNumber = 1;
filterRoomsPlus.addEventListener('click', function() {
  toggleChilndrenFilters();
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
})

filterRoomsMinus.addEventListener('click', function() {
  toggleChilndrenFilters();
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

// Top-section_adaptive

const childrenInput = document.querySelector('.properties_children_adaptive')
childrenInput.addEventListener('click', function() {
  document.querySelector('.filter_wrapper_adaptive').style.display = 'block'
})

const filterChildrenMinusAdaptive = document.querySelector('.minus_adaptive')
const filterChildrenPlusAdaptive = document.querySelector('.plus_adaptive')
const filterChildrenNumberAdaptive = document.querySelector('.filter_number_adaptive')
let childrenNumberAdaptive = 0;
let childrenCount = document.getElementById('children_input_adaptive')
let childrenCountAttrib = childrenCount.getAttribute('value')
// console.log(childrenCountAttrib)
filterChildrenPlusAdaptive.addEventListener('click', function() {
  // toggleChilndrenFiltersAdaptive();
  childrenNumberAdaptive++;
  if (childrenNumberAdaptive >= 10) {
    childrenNumberAdaptive = 10
    filterChildrenPlusAdaptive.classList.add('plus_gray')
  } else {
    filterChildrenPlusAdaptive.classList.remove('plus_gray')
  }
  if (childrenNumberAdaptive >= 1) {
    filterChildrenMinusAdaptive.classList.add('minus_blue')
    document.querySelector('.child_age_moreOne_adaptive').style.display = 'block'
    document.querySelector('.filter_wrapper_adaptive').classList.add('filter_wrapper_select')
  } 
  if (childrenNumberAdaptive >= 2) {
    document.querySelector('.child_age_adaptive').style.display = 'none'
    document.querySelector('.age_select_adaptive').classList.add('age_select_without-text')
    document.querySelector('.filter_wrapper_adaptive').classList.add('filter_wrapper_select_without-text')
  }
  filterChildrenNumberAdaptive.innerHTML = childrenNumberAdaptive;
  childrenCountAttrib = childrenNumberAdaptive;
})

filterChildrenMinusAdaptive.addEventListener('click', function() {
  // toggleChilndrenFiltersAdaptive();
  childrenNumberAdaptive--;
  if (childrenNumberAdaptive <= 0) {
    childrenNumberAdaptive = 0
    filterChildrenMinusAdaptive.classList.remove('minus_blue')
    document.querySelector('.child_age_moreOne_adaptive').style.display = 'none'
    document.querySelector('.child_age_adaptive').style.display = 'block'
    document.querySelector('.filter_wrapper_adaptive').classList.remove('filter_wrapper_select_without-text')
    document.querySelector('.filter_wrapper_adaptive').classList.remove('filter_wrapper_select')
    document.querySelector('.age_select_adaptive').classList.remove('age_select_without-text')
  } 
  if (childrenNumberAdaptive < 10) {
    filterChildrenPlusAdaptive.classList.remove('plus_gray')
  }
  filterChildrenNumberAdaptive.innerHTML = childrenNumberAdaptive;
})

// Closing the filter when clicking outside it
const inputChildrenClickAdaptive = document.querySelector('.properties_children_adaptive');
const chilndrenFiltersAdaptive = document.querySelector('.filter_wrapper_adaptive');
const toggleChilndrenFiltersAdaptive = function() {
  chilndrenFiltersAdaptive.classList.toggle('open');
}

const toggleChilndrenFiltersAddAdaptive = function() {
  chilndrenFiltersAdaptive.classList.add('open')
}

inputChildrenClickAdaptive.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleChilndrenFiltersAdaptive();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_chilndrenFiltersAdaptive = target == chilndrenFiltersAdaptive || chilndrenFiltersAdaptive.contains(target);
    const its_inputChildrenClickAdaptive = target == inputChildrenClickAdaptive;
    const chilndrenFiltersAdaptive_is_active = chilndrenFiltersAdaptive.classList.contains('open');
    
    if (!its_chilndrenFiltersAdaptive && !its_inputChildrenClickAdaptive && chilndrenFiltersAdaptive_is_active) {
        togglechilndrenFiltersAdaptive();
    }
});

document.querySelector('.age_select_adaptive').addEventListener('click', function() {
  toggleChilndrenFiltersAddAdaptive();
})

// Homes guests loves
const data = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa  Cruz de Tenerife',
      country: 'Spain',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
  ];


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
        <img src="${data.imageUrl}" alt="${data.name}">
        <p class="accent-blue">${data.name}</p>
        <p class="secondary">${data.city}, ${data.country}</p>
      </div>
    </div>`
};

console.log(swiper)

data.forEach((element) => {
  swiper.appendSlide(createCard(element))
});