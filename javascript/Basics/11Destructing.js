// Object Destructring

var data = {
    name: 'saikrishna',
    age: 27,
    email: "saikrishna@gmail.com",
    Phone: 949494949
}

const { name } = data;
const { age } = data;
const { email } = data;

var details = `${name} ${age} ${email}`;
console.log(details);

// const { name, age, email } = data;
// var details2 = `${name} ${age} ${email}`;
// console.log(details2)

// Rest Operator
var info = {
    Username: 'saikrishna',
    UserAge: 27,
    USerEmail: "saikrishna@gmail.com",
    UserPhone: 949494949
}
const { Username, UserAge, ...remaining } = info;
console.log(Username, UserAge);
console.log('rest', remaining);










// Array Destructing

var data2 = ['one', 'two', 'three', 'four']

const [one, two, ...remain] = data2
console.log(remain);


var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];

// ES5 we have to use concat

var c = a.concat(b);
console.log(c);

// ES6 we have to use Spred opartor

var d = [...a, ...b]
console.log(d);
console.log(...b);


// ES5 Sum model
function add() {
    console.log(arguments);
    sum = 0;
    for (let value of arguments) sum += value;
    return sum;
}
console.log(add(1, 2, 3, 4));

// ES6 Sum Model

const add1 = (...arg) => {
    sum = 0;
    for (let value of arg) sum += value;
    return sum;
}
console.log(add1(1, 2, 3, 4, 5))


// Examples:1

function add3(x, y) {
    return x + y;
}
console.log(add3(2, 3, 4, 5, 6, 7));

// Es5

function add4() {
    console.log('arg', arguments);
    sum = 0;
    for (let value of arguments) sum += value;
    return sum;
}
console.log('argumentsdata', add4(2, 3, 4, 5, 6, 7, 8));

// es6   (a,b,...arg);
const add5 = (...arg) => {
    console.log(arg);
    sum = 0;
    for (let value of arg) sum += value;
    return sum;
}
console.log(add5(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//split Example;
// [...name];
// concate
//arrayOf


// Examples:2
// copy by value and copy by reference
//deep copy and shallow copy
var Array1=[1,2,3,4,5];
var Array2=Array1; //concat([]) and slice(0,2)
Array2.push(6);
console.log('arr1',Array1);
console.log('arr2',Array2);

// or

var name1="saikrishna";
var name2=name1;
name2=name2+' Bandaru';
console.log('name1',name1);
console.log('name2',name2)