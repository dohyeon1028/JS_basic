let list = document.querySelector("main ul");
console.log(list);

let item2 = list.querySelector(".item2");
console.log(item2);

console.log(item2.parentElement);

console.log(item2.closest("main")); //closest = 가장 가까운

console.log(item2.previousElementSibling);

console.log(item2.nextElementSibling);

console.log(list.firstElementChild);
// 부모요소에서 첫 번째 자식요소
console.log(list.lastElementChild);
// 부모요소에서 마지막 자식요소


