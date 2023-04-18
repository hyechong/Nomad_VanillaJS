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
const player = {
  name: 'toto',
  points: 100,
  handsome: true,
};
console.log(player); // {name: 'toto', points: 100, handsome: true}
console.log(player.name); // toto
console.log(player['name']); // toto

// object 업데이트 가능
console.log(player);
player.points = player.points + 15;
console.log(player.points); // 115

//object 추가
player.lastName = 'babo';
console.log(player); // {name: 'toto', points: 115, handsome: false, lastName: 'babo'}
