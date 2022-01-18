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

// Функция palindrome
function isPalindrome(str) {
    let strCompare = str.split('').reverse().join('');
    if (strCompare.toLowerCase === str.toLowerCase) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome('Zorroz'));

// Функция min(a, b) и функция max(a,b)
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(1, 3));

function min(a, b) {
    return (a < b) ? a : b;
}
console.log(min(-1, 3));

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(1, 3));

function max(a, b) {
    return (a < b) ? a : b;
}
console.log(max(-1, 3));

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