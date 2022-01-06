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
    if ((array3[i] % 2) == 0) {
        console.log(array3[i]);
    }
}




















































































































































































































































































































































































































































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







