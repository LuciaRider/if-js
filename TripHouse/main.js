// Top-section

const filterPeople = document.querySelector('.children');
const filterPeopleOptions = document.querySelector('.filter_wrapper')
filterPeople.addEventListener('click', function() {
  filterPeopleOptions.style.display = 'block'
});

// Adults
const filterAdultsPlus = document.querySelector('.filter_adults > .filter_plus-minus > .plus')
const filterAdultsNumber = document.querySelector('.filter_adults > .filter_plus-minus > .filter_number')
let adultsNumber = 1;
filterAdultsPlus.addEventListener('click', function() {
  adultsNumber++;
  if (adultsNumber > 30) {
    adultsNumber = 30
  }
  filterAdultsNumber.innerHTML = adultsNumber;
})

const filterAdultsMinus = document.querySelector('.filter_adults > .filter_plus-minus > .minus')
filterAdultsMinus.addEventListener('click', function() {
  adultsNumber--;
  if (adultsNumber < 1) {
    adultsNumber = 1
  }
  filterAdultsNumber.innerHTML = adultsNumber;
})

// Children
const filterChildrenPlus = document.querySelector('.filter_children > .filter_plus-minus > .plus')
const filterChildrenNumber = document.querySelector('.filter_children > .filter_plus-minus > .filter_number')
let childrenNumber = 0;
filterChildrenPlus.addEventListener('click', function() {
  childrenNumber++;
  console.log(childrenNumber)
  if (childrenNumber > 30) {
    childrenNumber = 30
  }
  filterChildrenNumber.innerHTML = childrenNumber;
})

const filterChildrenMinus = document.querySelector('.filter_children > .filter_plus-minus > .minus')
const childAgeMoreOne = document.querySelector('.child_age_moreOne')
filterChildrenMinus.addEventListener('click', function() {
  childrenNumber--;
  if (childrenNumber < 0) {
    childrenNumber = 0
    filterChildrenMinus.classList.add('children_minus_moreOne')
    childAgeMoreOne.style.display = 'none'
  } else {
    filterChildrenMinus.classList.remove('children_minus_moreOne')  
    childAgeMoreOne.style.display = 'block'
  }
  filterChildrenNumber.innerHTML = childrenNumber;
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