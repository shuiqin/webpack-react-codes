/**
 * Created by shuiqin on 9/27/17.
 */
let numbers = [1,2,3];
let doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);
let mike = {name:'mike', age: 40};
mike = {...mike, sex:'male'}; // ...mike  7 
console.log(mike);