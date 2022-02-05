/*

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

<<<<<<< HEAD
















































































































































































































































































































































































































































// Работа с классами:
const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
];

class User {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullname() {
      return `${this.firstName} ${this.lastName}`
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
      super(firstName, lastName)
      this.admissionYear = admissionYear
      this.courseName = courseName
  }

  get course() {
    const currentYear = new Date().getFullYear()
    return currentYear - this.admissionYear
  }
}

class Students {
  
  constructor (students) {
    this.students = students
    this.data = []
    this.students.forEach(student => {
        const user = new Student(student.firstName, student.lastName, student.admissionYear, student.courseName)
        this.data.push({
            fullname: user.fullname,
            courseName: user.courseName,
            course: user.course
        })
    })
  }

  getInfo() {
      return (this.data
          .sort((a, b) => a.course - b.course)
          .map(user => `${user.fullname} - ${user.courseName}, ${user.course} курс`))
  }

}

const students = new Students(studentsData);
console.log(students.getInfo());







=======
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

*/

/* Преобразование формата даты:
в переменной date лежит дата в формате '2020-11-26';
преобразуйте эту дату в формат '26.11.2020';
функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату. */
function formatDate(date) {
     let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('.');
}
console.log(formatDate('2020-11-26'));

module.exports = formatDate;

/* Поиск объектов размещения:
дан массив;
напишите функцию поиска, которая будет принимать строку;
по полученной строке найдите все совпадения в массива;
верните список строк в формате: страна, город, отель. */
const data = [
    {
      country: 'Russia',
      city: 'Saint Petersburg',
      hotel: 'Hotel Leopold',
    },
    {
      country: 'Spain',
      city: 'Santa Cruz de Tenerife',
      hotel: 'Apartment Sunshine',
    },
    {
      country: 'Slowakia',
      city: 'Vysokie Tatry',
      hotel: 'Villa Kunerad',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hostel Friendship',
    },
    {
      country: 'Indonesia',
      city: 'Bali',
      hotel: 'Ubud Bali Resort&SPA',
    },
    {
      country: 'Netherlands',
      city: 'Rotterdam',
      hotel: 'King Kong Hostel',
    },
    {
      country: 'Marocco',
      city: 'Ourika',
      hotel: 'Rokoko Hotel',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hotel Rehberge Berlin Mitte',
    },
  ];
// keep it for myself
  const array5 = [];
  for (let i = 0; i < data.length; i++) {
      array5.push(`${data[i].country}, ${data[i].city}, ${data[i].hotel}`);
  }
  console.log(array5);
  const array6 = [];
  for (let j = 0; j < array5.length; j++) {
      if (array5[j].includes('Saint Petersburg')) {
          array6.push(array5[j])
      };
  };
  console.log(array6);
// 

let input = 'Saint Petersburg';
const arrData = [];
const resultArr = [];
for (let i = 0; i < data.length; i++) {
    arrData.push(`${data[i].country}, ${data[i].city}, ${data[i].hotel}`);
}
for (let j = 0; j < arrData.length; j++) {
    if (arrData[j].includes(input)) {
        resultArr.push(arrData[j])
    };
};
console.log(resultArr);
>>>>>>> d0c31867be283bb5c3cdfc0470f2575b8c39aae9
