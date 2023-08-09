// 반복문 : 조건식의 평가 결과가 참인 경우 코드 블록을 실행한다. 그 후 조건식을 다시 평가해서 여전히 참이면, 코드블록을 다시 실행한다. 이 표현식(조건식)이 거짓일 때 까지 반복 실행한다. 

/*
1. 기본 반복문(for문, while문, do while문)

    while문 : 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속 반복 실행하며, 이때 "반복 횟수는 정해지지 않는다". 따라서 무한루프를 주의해야 한다. 확실한 상황이 아니라면 사용을 피하는 것이 좋지만, 반복 횟수를 알 수 없는 경우에는 장점이 될 수 있다.

    dowhile문은 코드 블록을 한 번 무조건 실행하고 그 다음 조건식을 평가한다.

    참고) continue문 

2. for of, for in 반복문(ES6)

    in연산자 : 객체 내에 특정 property가 존재하는지의 여부를 확인하는 연산자이다. 때문에 fon in이 객체 특화 반복문이 될 수 있다.

    for of : 객체 타입 중에서 배열을 반복할 때 사용하는 for문


3. forEach 메서드, map 메서드
    이 메서드는 배열의 메서드로 배열이어야지만 사용이 가능하다. 단, forEach는 유사 배열에도 사용이 가능하다.

    forEach메서드는 배열의 각 요소에 대해 주어진 함수를 실행하는데 사용되는 메서드이다. 주로 각 요소를 반복하면서 어떤 작업을 수행하도록 한다. 이 메서드는 콜백함수를 받아서 각 요소에 대해 순차적으로 호출하여 적용한다. 하지만, 배열을 직접 변경하지는 않는다. forEach의 특징이자 치명적인 단점으로는 반환값이 없다는 것이다. 배열 내의 각 요소를 순회하며 콜백함수를 호출만 한다. 

    map메서드는 배열의 각 요소를 반환해서 새로운 배열을 생성하는데 사용한다. 각 요소를 순회하며 주어진 콜백 함수에 적용하고, 함수의 반환값을 새배열로 만들어 추가한다. 하지만, 원본 배열은 변경되지 않는다.


        메서드 : 객체 내부에 선언된 함수, 객체에 종속된 기능, 함수를 메서드라고 한다.
        forEach, map은 반복문이 아니다. 공통점은 배열의 각 요소를 순회하며 콜백함수를 호출하는 것인데 forEach는 호출만 하고 끝나고, map은 새로운 배열이 만들어진다.

    결론. 단순 반복문을 사용할 경우 map과 forEach를 구분하지 않아도 된다. 하지만 배열이고, 배열 메서드를 정교하게 사용하거나 결과로 배열이 필요할 경우 반드시 map메서드를 사용해야한다.
    


배열과 유사배열 : 배열은 Array라고 표시되며, 객체 타입으로 인덱스로 탐색할 수 있다. 유사배열은 배열은 아니지만 배열처럼 순서가 있는 요소가 있어 반복문에 사용할 수 있다. 다만, 배열 메소드를 사용할 수 없다. 배열 메소드의 역할은 배열을 가지고, 추가 삭제, 고차원 함수 사용 등을 할 수 있다. 따라서 단순 반복문을 사용하려면 유사배열도 사용할 수 있지만, 더 복잡하고 정교한 순서, 인덱스 접근을 위해서는 배열이 필요하다. 그런데 DOM 요소에 접근하려면 해당 태그나, 클래스 등을 선택할 때 유사배열로만 가져올 수 있다. 그 때는 배열 전환을 해준다. 


변수.length : 배열의 index 수 또는 문자열의 문자 수의 개수
*/


// while문, do...while문
// let count = 0;
// while (count < 3){
//     console.log(count);
//     count++;
// }

// do {
//     //do 를 만나면 무조건 해당 코드블록을 실행하고 끝의 while문의 조건문을 평가한다. 참일 경우 반복, 거짓일 경우 break.
//     console.log(count);
//     count++;
// } while ( count < 3 );

// ------------------------------------

// let str = "Hello World";
// console.log(str.length)

// let l = "l";
// let counter = 0;

// for(let i = 0; i < str.length ; i++){            //type 1
//     if(str[i]!==l) continue; // str[i] 값이 l이 아니면 if문 탈출
//     counter++; //continue가 실행되면 증가되지 않음.
// }
// console.log(counter);


// for( let i = 0 ; i < str.length ; i++ ){         //type 2
//     console.log(str[i]);
//     if( str[i] === l ) counter++;
// }
// console.log(counter);

// -------------------------------------

// let lis = document.querySelectorAll("ul li");
// console.log(lis);

//기본 for문
// for(let i = 1; i<=6 ; i++ ){
//     console.log(i);
// }

//중첩 for문
//주사위 두개를 던져서 눈의 합이 6인 애들을 반복해서 구해주는 반복문

// for( let i = 1 ; i <= 6 ; i++ ){
//     for ( let j = 1 ; j <= 6 ; j++ ){
//         if( i + j === 6 ) console.log( `[${i}, ${j}]` );
//     }
// }

// let lis = document.querySelectorAll("ul li");
// console.log(lis);

// for(let i = 0; i<6; i++){
//     lis[i].onclick = function() {
//         console.log(i+1);
//     }
// }


// for of, for in (ES6 이후), of와 in이 연산자로 작용. of는 배열, in 객체.
// const를 사용하는 이유? 참조형이기 때문에 메모리 주소값이 들어가 있다. 따라서 객체에 변화가 있어도 메모리 주소는 변하지 않기때문에 가능하다.
const person = {
    name : "Kim", 
    address : "Gumi",
    age : 19
}

// "네임(key)" in 대상객체 : 대상객체에서 네임이 존재하는지 안하는지를 살펴보는 것. 만약 있으면 true, 없으면 false

console.log("name" in person);

for( const el in person ){  //el은 변수명이기 때문에 다른 이름을 지정해줘도 된다.
    // person 객체에서의 in의 연산자로 모든 이름(key)을 반복한다.
    console.log(el + ":" + person[el]); // 해당이름 + ":" + 이름에 해당하는 값. 
}


let lis = document.querySelectorAll("ul li");
const arr = Array.from(lis); // 유사배열이었던 lis를 Array 메소드를 사용하여 배열로 전환.

console.log(lis);
console.log(arr);

for (const el of lis) {
    el.onclick = function() {
        console.log("클릭");
    }
}

const numbers = [1, 2, 3, 4, 5];


numbers.forEach(function(el, index){ // el은 element의 약어로 배열값 하나하나를 구분하기 위해 사용, index는 순서를 구분하기 위해 사용.
    console.log("각각의 요소" + ":" + "el", "인덱스" + ":" + "index");
});

const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.map(function(el, index){
    return el * 2;
});

array.forEach(element => {
    
});

console.log(doubleNums);
