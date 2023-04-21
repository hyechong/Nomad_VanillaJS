// alert('hello');

// 2.2 Variables & 2.3 const, let
// const a = 5;
// const b = 2;
// let myName = 'toto';

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log('hello ' + myName);

// myName = 'tobato';

// console.log('your new name is ' + myName);

// 2.4 Booleans (true, false)
// const amIFat = false; // true, false는 "" 없이 작성
// console.log(amIFat); // false

// // null, undefined
// const amITall = null; // null : variable 안에 값이 없음을 의도적으로 알리기 위해 사용. 변수에 null(값이 없다)이 할당된다 즉, 정의됨
// let something; // undefined : 변수는 선언했지만 값을 할당하지는 않음 즉, 정의되지 않음

// console.log(amITall, something); // null, undefined

// 2.5 Arrays
// array(배열)은 가장 기본적인 데이터 구조임
// array의 목적은 하나의 variable(변수)안에 데이터의 list를 가지는 것
// const array = [item, item, item];의 형태

// const mon = 'Monday';
// const tue = 'Tuesday';
// const wed = 'Wednesday';
// const thu = 'Thursday';
// const fri = 'Friday';
// const sat = 'Saturday';

// const daysOfWeek = [mon, tue, wed, thu, fri, sat]; // 배열의 항목에는 variable(변수)도 들어갈 수 있다
// const nonsense = [1, 2, 'hello', false, true, null, undefined, 'toto'];
// // console.log(daysOfWeek, nonsense);

// // Get Item from Array
// console.log(daysOfWeek[5]); // Saturday 컴퓨터는 숫자 0 부터 셈

// // Add one more day to the Array
// daysOfWeek.push('Sunday');

// console.log(daysOfWeek); // (7) ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// 2.6 Objects
//const objects = {property:, property:, ...}; 의 형태

//variable
//const playerName = 'toto';
//const playerPoints = 100;
//const playerHandsome = true;

//array
//const player = ['toto', 100, true];

//object
// const player = {
//   name: 'toto',
//   points: 100,
//   handsome: true,
// };
// console.log(player); // {name: 'toto', points: 100, handsome: true}
// console.log(player.name); // toto
// console.log(player['name']); // toto

// // object 업데이트 가능
// console.log(player);
// player.points = player.points + 15;
// console.log(player.points); // 115

// //object 추가
// player.lastName = 'babo';
// console.log(player); // {name: 'toto', points: 115, handsome: false, lastName: 'babo'}

// 2.7-8 Functions

// function sayHello(nameOfPerson, age) {
//   console.log('Hello my name is ' + nameOfPerson + " and I'm " + age);
// }

// sayHello('toto', 13);
// sayHello('hyunba', 29);
// sayHello('hyechong', 27);

// function plus(firstNum, secondNum) {
//   console.log(firstNum + secondNum);
// }

// function divide(a, b) {
//   console.log(a / b);
// }

// plus(8, 60);
// divide(98, 20);

// const player = {
//   name: 'toto',
//   sayHello: function (personName) {
//     console.log('Hello ' + personName + '! nice to meet you~');
//   },
// };
// console.log(player.name);
// player.sayHello('lynn');

// const calculator = {
//   add: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
//   power: function (a, b) {
//     console.log(a ** b);
//   },
// };

// calculator.add(3, 5);
// calculator.minus(10, 5);
// calculator.divide(10, 2);
// calculator.power(2, 3);

// const age = 25;
// function caculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = caculateKrAge(age);

// console.log(krAge);

// 2.11 Returns
// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };

// const plusResult = calculator.plus(3, 5); // 8
// const minusResult = calculator.minus(plusResult, 5); // 3
// const divideResult = calculator.divide(9, minusResult); // 3
// const powerResult = calculator.power(divideResult, minusResult); // 27

// 2.13-15 Conditionals (조건문)

// const age = prompt('How old are you?');

// parseInt() // string 을 number로 바꿔주는 함수

// console.log(typeof age); // string (default)
// console.log(age, parseInt(age)); // string, number

// const age = parseInt(prompt('How old are you?'));
// //console.log(age); // number or NaN

// // isNaN();// NotaNumber인지 판별해주는 함수 즉, number면 false, 아니면 true.

// //console.log(isNaN(age));
// if (isNaN(age) || age < 0) {
//   console.log('Please write a real positive number');
// } else if (age < 18) {
//   console.log('You are too young');
// } else if (age >= 18 && age <= 50) {
//   console.log('You can drink');
// } else if (age > 50 && age <= 80) {
//   console.log('You should exercise');
// } else if (age > 80) {
//   console.log('You can do whatever you want');
// }

// && : and , || : or

// 3.0 The Document Object
// const title = document.getElementById('title');

// // console.dir(title);
// title.innerText = 'Got you!';

// 3.2 Searching For Elements
// const hellos = document.getElementsByClassName('hello');

// console.log(hellos);

// const title = document.getElementsByTagName('h1');
// console.log(title);
// const h1 = document.querySelector('.hello h1');
//console.log(title);

// title.innerText = 'Hello';

// 3.3 Events

//console.dir(title);
//title.style.color = 'blue';

// function handleTitleClick() {

//   h1.style.color = 'blue';
// }

// function handleTitleEnter() {
//   h1.innerText = 'Mouse is here!';
// }

// function handleTitleLeave() {
//   h1.innerText = 'Mouse is gone!';
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = 'tomato';
// }

// function handleWindowCopy() {
//   alert('copy cat!');
// }

// function handleWindowOffline() {
//   alert('SOS no WIFI');
// }

// function handleWindowOnline() {
//   alert('All gooood!');
// }

// h1.addEventListener('click', handleTitleClick);
// h1.addEventListener('mouseenter', handleTitleEnter);
// h1.addEventListener('mouseleave', handleTitleLeave);

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', handleWindowCopy);
// window.addEventListener('offline', handleWindowOffline);
// window.addEventListener('online', handleWindowOnline);

// const h1 = document.querySelector('.hello h1');

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === 'blue') {
//     newColor = 'tomato';
//   } else {
//     newColor = 'blue';
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener('click', handleTitleClick);

// 3.7 CSS in JS part 2
// const h1 = document.querySelector('.hello h1');

// function handleTitleClick() {
//   const clickedClass = 'active';
//   if (h1.className === clickedClass) {
//     h1.className = '';
//   } else {
//     h1.className = clickedClass;
//   }
// }

// h1.addEventListener('click', handleTitleClick);

// 3.8 CSS in JS part 3
// const h1 = document.querySelector('.hello h1');

// function handleTitleClick() {
//   // const clickedClass = 'active';
//   // if (h1.classList.contains(clickedClass)) {
//   //   h1.classList.remove(clickedClass);
//   // } else {
//   //   h1.classList.add(clickedClass);
//   // } // toggle 함수가 같은 역할을 해준다.
//   h1.classList.toggle('active');
// }

// h1.addEventListener('click', handleTitleClick);

// 5일차 과제
// const bgColor = document.querySelector('.yellow');

// function changeColor() {
//   if (window.innerWidth >= 800) {
//     bgColor.classList.remove('purple');
//     bgColor.classList.remove('blue');
//     bgColor.classList.add('yellow');
//   } else if (window.innerWidth <= 800 && window.innerWidth >= 600) {
//     bgColor.classList.remove('blue');
//     bgColor.classList.remove('yellow');
//     bgColor.classList.add('purple');
//   } else if (window.innerWidth <= 600) {
//     bgColor.classList.remove('purple');
//     bgColor.classList.remove('yellow');
//     bgColor.classList.add('blue');
//   }
// }

// window.addEventListener('resize', changeColor);
