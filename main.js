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
    if ((array3[i] % 2) == 0) {
        console.log(array3[i]);
    }
}
*/










































































































































































































































































































































































































// Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными уровнями вложенности.
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  let obj1 = JSON.stringify(object1);
  let obj2 = JSON.stringify(object2);
  console.log(obj1.split('').sort().join('') === obj2.split('').sort().join(''));
}
deepEqual(obj1, obj2);
deepEqual(obj1, obj3);