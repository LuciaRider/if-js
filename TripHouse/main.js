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

const homesContent = document.querySelector('.homes_content');
function createCard1(data) {
  return `
  <div class="content_img col-xs-6 col-sm-6">
    <img src="${data.imageUrl}" alt="${data.name}">
    <p class="accent-blue">${data.name}</p>
    <p class="secondary">${data.city}, ${data.country}</p>
  </div>`
};
data.forEach((element, index) => {
  if (index < 4) {
    homesContent.insertAdjacentHTML('beforeend', createCard1(element))
  }
});

const homesImgArrowRight = (homesContent.getElementsByClassName('content_img')[3]);
function createArrowRigt() {
  return `<img class="arrow_right" src="./img/arrow-right.png" alt="arrow-right">`
};
homesImgArrowRight.insertAdjacentHTML('beforeend', createArrowRigt())

const homesImgArrowLeft = (homesContent.getElementsByClassName('content_img')[0])
function createArrowLeft() {
  return `<img class="arrow_left" src="./img/arrow-left.png" alt="arrow-leftt">`
};
homesImgArrowLeft.insertAdjacentHTML('beforeend', createArrowLeft());

const slider = document.querySelector('.homes_content');
const slides = document.querySelectorAll('.content_img')
const next = document.querySelector('.arrow_right');
const prev = document.querySelector('.arrow_left');

let position = 0;

if (position === 0) {
	prev.style.display = 'none';
}

// next.addEventListener('click', function() {
// 	position	-= slides[0].offsetWidth;
// 	if (position  < 0) prev.style.display = 'block'
// 	if (position === -slider.offsetWidth + slides[0].offsetWidth) {
// 		next.style.display = 'none';
// 		position = -slider.offsetWidth + slides[0].offsetWidth;
// 	}
// 	slider.style.transform = `translateX(${position}px)`;
// })

// prev.addEventListener('click', function() {
// 	position	+= slides[0].offsetWidth;
// 	if (position >= -slider.offsetWidth + slides[0].offsetWidth) next.style.display = 'block';
// 	if (position === 0) {
// 		prev.style.display = 'none';
// 		position = 0;
// 	}
// 	slider.style.transform = `translateX(${position}px)`;
// })