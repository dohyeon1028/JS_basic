let main = document.getElementsByTagName("main");
console.log(main);

let item1 = document.getElementsByClassName("item1");
console.log(item1);

let item3 = document.getElementById("item3");
console.log(item3);

let ul = document.querySelector("ul");
console.log(ul);

// let lis = document.querySelectorAll("ul li");
// console.log(lis);

let _li = document.querySelector("#item3");
console.log(_li);

// let lis = document.querySelector("main section irticle div ul #lis");
// console.log(lis); 

// let lis = document.getElementById("lis");
// console.log(lis);

let set = document.querySelector("section");
let ul_lis = set.querySelector("#lis");
let lis = ul_lis.querySelectorAll("li");



