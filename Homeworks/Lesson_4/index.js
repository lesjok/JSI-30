// Проверяем себя, если не понимаем почему так а не иначе пишем в чат или в ЛС, желательно объяснять почему то или иное решение

// Типы данных

console.log([1, 2, 3] + ' is the answer.'); // '1,2,3 is the answer'
console.log(false || true * 2); // 2
console.log({ valueOf: () => 42 } * 2); // 84
console.log(parseInt('7.5') + parseFloat('2.5')); // 9.5
console.log(!!'Hello' - 1); // 0
console.log(new String('hello') instanceof Object); // true
console.log((true ^ false) === (false ^ true)); // true
console.log(true && '5' + 5); // '55'
console.log({ valueOf: () => '10', toString: () => '20' } + 5); // '105'
console.log((5).toString() === '5'); // true
console.log(null || false || undefined); // undefined
console.log(0 || 2 || NaN); // 2
console.log(1 && null && 2); // null

//

function xy() {}

console.log(typeof xy); // 'function'
console.log(xy instanceof Object); // true

var str1 = String(123);
var str2 = new String(123);

console.log(typeof str1 === typeof str2); // false
console.log(str1 === str2); // false
console.log(str1 === String(123)); // true
console.log(str2 === new String(123)); // false
console.log(str1 === 123); // false
console.log(str1 === '123'); // true
console.log(str1 == str2); // true
console.log(str1 == 123); // true
console.log(str1 == '123'); // true

var arr = [];
console.log(typeof arr); // 'object'

var str3 = '123';
str3[0] = '2';
console.log(str3); // 123

var p = 1 + 2 + 3 + '';
var z = '' + 1 + 2 + 3;

console.log(p, typeof p); // '6 string'
console.log(z, typeof z); // '123 string'

var o = '123x';
console.log(Number(o)); // NaN
console.log(parseInt(o, 10)); // 123
console.log(+o); // NaN
console.log(typeof +o); // number
console.log(Boolean(String(false))); // true

var h = [];
console.log(h ? 1 : 2); // 1

// Переменные

let a = a + 1;
console.log(a); // err

//

var b = b + 1;
console.log(b); // err

//

function foo(c) {
  if (c > 0) {
    var c = c + 10;
    return c;
  }
  return c;
}
console.log(foo(15)); // 25

//

function foo() {
  console.log(d2); // '2'
  let d1 = '1';
  return function () {
    console.log(d1); // '1'
    console.log(d2); // '2'
  };
}

const d2 = '2';
const x = foo();

x();

//

function giveMeX(showX) {
  if (showX) {
    let x = 5;
  }
  return x;
}

console.log(giveMeX(false)); // err
console.log(giveMeX(true)); // err

//

console.log(x); // err

var y = 1;

console.log(y); // 1

function car() {
  if (false) {
    var y = 2;
  }
  console.log(y);
}

car(); // undefined
console.log(y); // 1

//

var i = 1;
var j = {};

(function () {
  i++;
  j.j = 1;
})();
console.log(i, j); // 2 { j: 1 }

(function (i, j) {
  i++;
  j.k = 1;
})(i, j);
console.log(i, j); // 2 { j: 1, k: 1 }

//

// Бонус

// Создать объект всеми возможными способами

const obj1 = {};
const obj2 = Object.create(proto, properties);
const obj3 = Object.assign(targetObject, ...sourceObjects);
const obj4 = new Object();

//

// Написать функцию глубокого сравнения двух объектов:
// объекты могут быть любыми, и иметь любой уровень вложенности

const firstObj = { here: { is: 'on', other: '3' }, object: 'any' };
const secondObj = { here: { is: 'on', other: '2' }, object: 'any' };

const deepEqual = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length !== secondObjKeys.length) return false;

  for (var key of firstObjKeys) {
    const value1 = firstObj[key];
    const value2 = secondObj[key];
    const isObjects = value1 != null && typeof value2 === "object" && value1 != null && typeof value2 === "object";

    if ((isObjects && !deepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

//

console.log(deepEqual(firstObj, secondObj)); // false;
