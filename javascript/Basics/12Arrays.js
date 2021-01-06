// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement


var array = [1, 2, 3, 4, 5];
var arr = [];

// for (var i = 0; i < array.length; i++)
// {
//     let value = array[i];
//     value = value * 2;
//     arr.push(value);
// }
array.forEach(function(value,index){
    arr.push(value*2)
});
console.log('arr',arr);

// map example

// Return keyword is not working in for each 
// const info=array.forEach(function(value,index){
//     return value*2;
// });
// arr.push(info);
// ??

// console.log(arr);
// map is working in return keyword
const arr1=array.map(function(value,index){
    value*2+2;  //it should be return array but foreach push the new arry
})

console.log('###',arr1)
// filter
const arr3=array.filter(function(value,index){
    return value>2;
})
console.log("filters",arr3 )


// Reduce:
const reducesss=array.reduce(function(start,next){
return start+next;
},1)
console.log('reduce',reducesss);

// some: some is return the true or false values

let some1=array.some(function(value){
    return value>2;       // it should be return TRUE or FALSE Values if data is their it's return TRUE if Data is not Their it should be return FALSE
})
console.log("some",some1);

// every: every is return the true or false values and it check the entrie array 

// Examples:


var a = ['sai', 'krishna', 'harsha', 'venkateswarlu', 'sonal', 'poornima'];

console.log('111', a);
console.log(a.length);
 console.log(a[1]);
 console.log('@@@',a.length -1)
console.log('222',a[a.length -2])
a.push('saikrishna');

console.log('push', a)
console.log(a.pop());
console.log('pop', a)
console.log(a.shift());
console.log('shift', a);
console.log(a.unshift('sai1'));
console.log('unshift', a)
a.splice(2, 2, 'addNewfile');
console.log('splice', a);
//  a[1]='LLL'
//  console.log(a)
//  console.log(a.indexOf('sai'))



// console.log(Array.prototype);
//Array.prototype.sum=function(){
// }

//settimeout and setinterval

