// Работа с переменными
let user = 'John Doe';
console.log(user);
let student = 'Valentina';
console.log(student);
user = student;
// Valentina
console.log(user);

// Работа с примитивами
let test = 1;
test = test + 1;
test = test + '1';
// 21
console.log(test);
test = test - 1;
// 20
console.log(test);
test = Boolean(test);
// true
console.log(test);

// Дан массив [2, 3, 5, 8]. С помощью цикла for найдите произведение элементов этого массива. Результат выведите в консоль.
let array = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < array.length; i++) {
    result = result * array[i];
}
console.log(result);

// Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 5-ти, но меньше 10-ти.
let array2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 5 && array2[i] < 10) {
        console.log(array2[i]);
    }
}

// Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль четные элементы массива.
let array3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array3.length; i++) {
    if ((array3[i] % 2) === 0) {
        console.log(array3[i]);
    }
}

// Функция palindrome
function isPalindrome(str) {
    let strCompare = str.split('').reverse().join('');
    if (strCompare.toLowerCase() === str.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome('Zorroz'));

// Функция min(a, b) и функция max(a,b)
function min (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log (min (1, 3));

function min (a, b){
	return (a < b) ? a: b;
}
console.log (min (-1, 3));

function max (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log (max (1, 3));

function max (a, b) {
	return (a < b) ? a: b;
}
console.log (max (-1, 3));

// Замена элементов массива
function randomArray(count, min, max) {
    let arr = [];
    let num;
    for (let i = 0; i < count; count--) {
        num = Math.floor(Math.random() * (max-min) + min);
        arr.push(num);
    }
    // return arr.join().replace(/0/gi, 'zero').split(',');
      for (let z = 0; z<arr.length; z++) {
        if ((arr[z] % 10 === 0)) {
          arr[z] = arr[z].toString().replaceAll(0, 'zero')
        }
      }
    return arr;
}
console.log(randomArray(10, 1, 100));

// Напишите функцию sum, которая возвращает сумму чисел следующим образом:
function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
};
function corSum(a, b) {
    return a + b;
};
let sum = curry(corSum);
console.log(sum(5)(2));
// module.exports = corSum;

// Покрасьте абзацы по клику (событие click):
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
function changeColor() {
    let currentColorIndex = 0;
    return function () {
        this.style.color = colors[currentColorIndex];
        currentColorIndex++;
        if  (currentColorIndex === colors.length) {
            currentColorIndex = 0;
        }
    }
};
text1.addEventListener('click', changeColor());
text2.addEventListener('click', changeColor());
text3.addEventListener('click', changeColor());


























































































/* Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково. Прим "шалаш".):
создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, является ли переданное функции слово палиндромом или нет;
теперь уже зная как работать со строками и массивами запишите реализацию этого метода в одну строку. */

function isPalindrome(str) {
    let strCompare = str.split('').reverse().join('');
    if (strCompare.toLowerCase() === str.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome('Zorroz'));

/* Поиск объектов размещения:
дан массив;
напишите функцию поиска, которая будет принимать строку;
по полученной строке найдите все совпадения в массиве по любому из полей;
верните масиив строк в формате: страна, город, отель;
зная как работать с массивами, сократите вашу функцию избавившись от цикла for. */

const hotels = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Virgin Hotel',
      city: 'Chicago',
      country: 'USA',
    },
    {
      name: 'Grand Beach Resort',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'Shilla Stay',
      city: 'Seoul',
      country: 'South Korea',
    },
    {
      name: 'San Firenze Suites',
      city: 'Florence',
      country: 'Italy',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Black Penny Villas',
      city: 'BTDC, Nuca Dua',
      country: 'Indonesia',
    },
    {
      name: 'Koko Hotel',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      name: 'Ramada Plaza',
      city: 'Istanbul',
      country: 'Turkey',
    },
    {
      name: 'Waikiki Resort Hotel',
      city: 'Hawaii',
      country: 'USA',
    },
    {
      name: 'Puro Hotel',
      city: 'Krakow',
      country: 'Poland',
    },
    {
      name: 'Asma Suites',
      city: 'Santorini',
      country: 'Greece',
    },
    {
      name: 'Cityden Apartments',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      name: 'Mandarin Oriental',
      city: 'Miami',
      country: 'USA',
    },
    {
      name: 'Concept Terrace Hotel',
      city: 'Rome',
      country: 'Italy',
    },
    {
      name: 'Ponta Mar Hotel',
      city: 'Fortaleza',
      country: 'Brazil',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Le Meridien',
      city: 'Nice',
      country: 'France',
    },
    {
      name: 'Apart Neptun',
      city: 'Gdansk',
      country: 'Poland',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Nox Hostel',
      city: 'London',
      country: 'UK',
    },
    {
      name: 'Leonardo Vienna',
      city: 'Vienna',
      country: 'Austria',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'Steigenberger Hotel',
      city: 'Hamburg',
      country: 'Germany',
    },
  ];

const {name, city, country} = hotels;

function search (str1) {
      return hotels 
      //.filter((input) => (input.name + input.city + input.country).includes(str1))
      //.map(input => `${input.name}, ${input.city}, ${input.country}`);
      
      .filter(({name, city, country}) => `${name} + ${city} + ${country}`.includes(str1))
      .map(({name, city, country}) => `${name}, ${city}, ${country}`);
    }
  console.log(search("Hotel"));

/* Сопоставте страны с городами из массива:
дан массив;
напишите функцию, которая выберет все уникальные страны и сопоставит с ними города;
в консоли должен быть выведен примерно такой результат:
{
   Australia: ['Sydney'],
   Germany: ['Berlin', 'Hamburg'],
   Italy: ['Florence', 'Rome'],
   USA: ['Chicago', 'Hawaii', 'Miami'],
   Ukraine: ['Kyiv']
} */
let countries = [];
// hotels.forEach(element => console.log(element.country))
let countryCity = {};
hotels.forEach(element => countries.push(element.country))
countries = [...new Set (countries)]
countries.forEach(land => {
    countryCity[land]=[];
    Object.keys(hotels).forEach(element => {
        if (hotels[element].country == land) {
            countryCity[land].push(hotels[element].city)
        }
    })
})
console.log(countryCity);










