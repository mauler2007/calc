'use strict';
let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


// фор ич
// arr.forEach(function (item, i, array) {
//   console.log(item,i,array);
// });


// фор оф
// for( let item of arr) {
//   console.log(item);
// }

// фор ин не подходит для работы с массивами
// for(let item in arr) {
//   console.log(item);
// }

delete arr[2];

console.log(arr[3]);

let obj = {
  a: 3,
  b: 4,
  c: true
};

delete obj.b;
// let array = ['apple', 'orange', 'banana','strawberry'];

// let car = {
//   model: 'mazda',
//   year: 2006,
//   turbochargong: true,
//   specifiction: [],
//   style: {
//     color: 'blue'
//   }
// };


// console.log(car.lenght);

// console.log(Object.keys(car).lenght);


// for(let i in car) {
//  console.log('ключ ' + i + ' значение ' + car[i] );
// }

// console.log(Object.keys(car).lenght);


// for (let key in car) {
//   console.log('Ключ: ' + key + ' Значение ' + car[key]);
// }


// // quantiti of keys
// console.log(Object.keys(car).length);



// let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(arr.concat());
// console.log(arr[6]);

// arr[0]= 200;
// console.log(arr[0]);

// console.log(arr.length);



// console.log(arr.splice(1,1,'3'));







// array.push('kivi');
// array.unshift('papaya');
// console.log(array);



// array.shift();

// array.pop();


// console.log(array);
// console.log(array.pop());
// console.log(array.shift());
// console.log(array);
// console.log(array.sort());
// console.log(array.slice(1, 3));
// console.log(array.slice(-2));


// console.log(array);
// console.log(array.splice(1, 2, 'avocado', 'arbuz'));
// console.log(array);

// console.log(array.join());
// console.log(array.join(' - '));
// console.log(array.reverse());

// console.log(array.concat(['carrot', 'mango', 'cherry'] , 'berry'));


// let car = {
//   model: 'mazda',
//   year: 2006,
//   turbocharging: true,
//   specifications: [],
//   style: {
//     color: 'blue'
//   }
// };

// console.log(car.model);
// console.log(car['model'], car['turbocharging'], car['style'], car['specifications']);


// car['best place'] = 'city';
// console.log(car);

// car['second place'] = 'town';

// let title = ' привет это титульная страница';


// console.log(car);


// car.ride = function(speed) {
//   console.log('Машина едет со скоростью :' + speed + ' км/час');
// };

// car.ride(60);
// // console.log(car);


// car.stop = stop;
// car.stop();

// console.log(car);

// function stop() {
//   console.log('Машина стоит  скорость : 0 км/час');
// }
// let car = {
//   model: 'mazda',
//   year: 2006
// };

// let obj = new Object();

// console.log(car.model);

// obj.color='black';
// obj.type='type';
// console.log(obj.color);

// car.turbocharging = true;
// car.transmission = 'manual';
// console.log(obj);

// car.style = obj;
// console.log(car);


// console.log(car);
// console.log(car.model);
// console.log(car.transmission);


// obj.color = 'black';
// obj.wheel = 4;

// car.style = obj;
// console.log(car.style === obj);