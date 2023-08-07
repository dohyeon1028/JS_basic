/*

변수 : 프로그래밍 언어에서 데이터를 관리하기 위한 개념
인간의 논리 해석 과정과 같이 컴퓨터도 이에 해당하는 과정이 있다.
따라서 JS도 코드를 평가하려면 리터럴, 연산자라는 기호의 의미와 표현식의 해석이 가능해야 CPU에서 연산하고 메모리를 통해서 데이터를 기억하고 해석할 수 있는 것

JS에서 어떤 식이나 값이 생성되면 메모리에 저장하는데, 각 메모리는 고유 메모리 주소를 가지며. 값은 2진수로 저장한다.

따라서 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체, 그 메모리 공간의 이름이라고 할 수 있다.

변수는 변수 이름과 변수 값으로 이루어져 있으며 변수 이름을 식별자라고도 부른다. 즉, 변수 이름 = 식별자는 값을 기억하는 것이 아니라 메모리 주소를 기억하는 것이다. 변수에 식별자, 이름을 붙이는 것은 선언에 의해 자바스크립트에게 알리는 것

변수 선언 과정 : 변수를 사용하기 위해서 선언을 해야 하는데, 변수선언의 방법으로는 var, let, const라는 방법이 존재한다. 
1. 선언 단계 : 변수 이름을 등록해서, 자바스크립트 엔진에 변수 존재를 알림.

2. 초기화 단계 : 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 'undefined'를 할당하여 초기화한다. 이런 과정을 거친 변수가 선언이 되면 변수이름(식별자)은 실행 컨텍스트라는 자바스크립트 엔진이 코드를 평가하고 실행하기 위한 관리영역에 등록되어 관리된다.
    2-1. 실행 컨텍스트 : 코드의 실행 순서, 범위 등을 관리하며 실행 중 변수나 함수의 식별자들을 해석하는 도움을 주는 도우미

변수가 중복되면, 마지막에 코딩한 값이 덮어쓰여져서 재할당이 일어난다. var로 선언하는 변수는 변수의 중복선언을 허용한다.

변수를 사용하려면 변수의 이름(식별자)을 부르면 변수를 사용할 수 있다. 이것을 "변수를 사용한다." 또는 "변수를 참조한다."라고 표현한다.

변수 선언과 호이스팅
    호이스팅이란 변수 선언이 스코프의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유 특징이다. 변수의 선언이 소스 코드에 한 줄씩 순차적으로 실행되는 시점(런타임)이 아니라 그 이전 단계에서 먼저 실행되는데, 자바스크립트 엔진은 실행을 위한 준비단계인 소스코드 평가의 과정에서 변수 선언을 포함한 모든 선언문을 소스코드에서 모두 찾아서 먼저 실행함에 따라서 문서 처음 단계에서 문서안의 모든 선언문을 이미 알고 시작한다. 그리고 소스코드 평가가 끝나면 한 줄씩 순차적으로 실행하는 과정을 거치는데 이때 일어나는 것을 이미 알고 시작하는 현상을 호이스팅이라고 한다.

    변수의 스코프 : 변수가 영향을 미치는 범위
        1. 전역 변수 : 자바스크립트 최상단에서 선언된 변수. 적용범위는 자바스크립트 코드 전체.
            특징
                1) 암묵적 결합 : 모든 코드가 전역 변수를 참조하고 변경할 수 있음. -> 변수의 스코프는 클수록 가독성은 나빠지고, 위험성도 높아진다.
                2) 긴 생명 주기 : 전역 변수는 해당 문서가 유효하는 한, 남아있어 메모리 누수가 크다.
                3) 네임스페이스 오염 : 네임스페이스는 변수 이름들을 관리하는 자바스크립트 내부의 공간인데, 자바스크립트는 파일을 분리하더라도 같은 html에 연결되어 있으면 하나의 전역 스코프를 공유하기 때문에 두 개의 분리된 파일의 전역 변수를 공유하게 된다. 그 이유는 전역 변수나 전역 함수 등은 같은 스코프에 존재하기 때문이다.

        2. 지역 변수 : 어떠한 함수 또는 코드블럭 안에서 선언된 변수. 적용범위는 선언된 함수 안. 지역변수는 자신의 지역 스코프와 하위 지역 스코프에서만 유효하고 var로 선언된 변수는 오직 함수의 코드 블록만 지역변수로 인정된다.
            특징
                1) 블록 레벨 스코프 : 대부분의 프로그래밍 언어는 코드블록('{}')이 지역 스코프를 만드는데 이것을 블록 레벨 스코프라고 한다.

                2) 함수 레벨 스코프 : var 키워드로 선언된 변수는 오직 함수의 코드 블록만 지역 스코프로 인정하는데 이러한 자바스크립트의 특징을 함수 레벨 스코프라고 한다.

                3) 동적 스코프 : 호출을 어느 곳에서 하였는지에 따라서 동적으로 상위 스코프가 변경되는 방식을 동적 스코프라고 한다.

                4) 정적 스코프 : 렉시컬 스코프라고도 하며, 자바스크립트는 이 방법으로 상위 스코프를 정하며, 정의되는 지점에서의 상위 스코프가 고정되는 방식이다. => 이에 따라 자바스크립트는 함수를 어느 곳에서 만들던지 상관이 없다.

    == 변수의 생명주기
        변수는 선언에 의해서 생성되고, 할당에 의해 값을 가진다. 이후 데이터의 타입에 따라 소멸되는 시간이 존재하게 되는데 이를 변수의 생명 주기라고 한다. 만약 변수의 생명주기가 없다면, 변수는 계속해서 메모리 공간을 차지하게 된다. 결론적으로는 변수의 생명 주기는 변수의 스코프와 관련 있으며, 스코프가 끝나는 지점이 소멸, 마감한다.

    == 변수 이름의 규칙
        1) 숫자로 시작할 수 없다.
        2) 특수 문자는 사용할 수 없다. (단, '$'와 '_'는 사용 가능)
        3) '-' 사용 불가능
        4) 예약어(자바스크립트가 사용하는 단어)는 모두 사용 불가
        5) 대문자 소문자는 구분 되어야하고, 서로 다른 변수가 된다.
        6) 한글 변수는 가능하지만, 되도록 피하는 것이 좋다.

    ==네이밍 컨벤션 (표기법)
        1) 카멜 표기법 - 두 단어가 합쳐진 네이밍에서 합쳐지는 단어의 첫 알파벳을 대문자로 표기.
        2) 스네이크 표기법 - 두 단어가 합쳐진 네이밍에서 연결되는 부분을 '_'를 사용하여 표기.
        3) 파스칼 표기법 - 두 단어가 합쳐진 네이밍에서 모든 단어의 맨 앞의 알파벳만 대문자로 사용하여 표기
        4) 헝가리언 표기법 - 데이터 타입을 변수 이름 앞에 붙여서 표기하는 방식. 합쳐진 변수의 맨 앞의 알파벳은 대문자로 표기한다.

            user + details  

            1) userDetails
            2) user_details
            3) UserDetails
            4) strUserdetails

변수 선언 방법의 종류
1. var

var는 ES5 까지의 방법이며 여러가지 문제점이 있다.
    문제점 
        1) 변수 중복 선언을 허용한다. => 코드를 작성하면서 변수 값이 변경되는 부작용이 비일비재하게 발생한다.
        2) 함수 레벨 스코프. var로 선언하면 함수 코드블록만 지역 변수로 인식 되고 나머지는 전역 변수로 인식하기 때문에 지역 변수의 할당이 어려워 진다.
        3) 호이스팅 
    사용하는 이유
        1)레거시 코드가 존재

2. let

let은 ES6 이후 var의 문제점을 개선한 방법이다.
    해결 방안
        1) 변수 중복 선언을 금지한다.
        2) 블록 레벨 스코프
            let abcd = 1;
            if(true){
                let abcd=10;
            }
            console.log(abcd); var에서 쓰면 10, let에서 쓰면 1
        3) 호이스팅 문제 해결(된 것처럼 보인다.)
            let으로 변수를 선언할 경우 선언과 초기화 단계 사이에 "일시적 사각지대"를 설정하여, 변수 선언을 초기화 전에 참조할 수 없게 한다.

3. const
    변수 - 변하는 수
    상수 - 변하지 않는 값을 담는 것.

    const는 상수를 지정하는 방법으로 정해져 있지만, 반드시 상수 지정에만 사용하는 것은 아니다.

    상수지정 방법 - 상수의 이름을 모두 대문자로 선언한다. 이렇게 되면 상수가 되어 값을 온전히 보존하게 된다.
    const ROUNDNUMBER = 3.14;

    let과 거의 동일하며, 다른 부분만 살펴본다면 const는 반드시 선언과 동시에 초기화 작업을 해야 문법에러가 발생하지 않는다. 상수로 취급되기 때문에 변수의 재할당이 불가능하지만, 이후에 배울 데이터 타입에 따라서 변수처럼 재할당이 가능해진다. 주의해야 할 점은 const 키워드는 재할당을 방지할 뿐, 불변성을 담보하는 것은 아니다.


let abc=1;
{
    console.log(abc); //레퍼런스 에러 발생. 에러의 발생에 따라 알 수 있는 것은 밑에 2라는 값의 변수가 호이스팅 되고 있다는 뜻이다. 호이스팅이 없다면 전역 변수 abc인 1의 값이 정상적으로 찍힐 것이다.
    let abc=2;
}

*/

// var aaa = 33;
// var aaa = 333;
// let bbb = 33;
// let bbb = 333; 밑줄이 그어져 오류를 발생시킨다.

let aaa = 33; //let으로 변수 선언과 동시에 초기화하여 값을 넣은 것.
console.log(aaa);
aaa = 44; //기존 변수 값에 덮어쓰는 것(재할당)
console.log(aaa);

const con =333;
console.log(con);

let abcd = 1;

if(true){
    let abcd=10;
}

console.log(abcd);

var i=10;

for(var i=0; i<5; i++){
    console.log(i);
}
console.log(i);

var f = 10;

function abc(){
    var f = 34;
    console.log(f);
}
abc();
console.log(f);

var day;
console.log(day);

day=30;
console.log(day);

var student;
student = "학생";
console.log(student);
var student = "김도현";
console.log(student);

console.log(stop);
var stop = "스톱";

// console.log(aaa); 레퍼런스 에러
// let aaa;
// console.log(aaa); 인디파인드가 출력됨. 출력된다는 것은 해당 aaa의 존재를 알고 있다는 뜻으로 호이스팅이 일어났다고 볼 수 있음. 즉 호이스팅이 없었다면 aaa의 존재를 변수 선언 상태인 지금 상태에서는 존재를 몰라서 에러가 발생해야 함
// aaa=333;     
// console.log(aaa);

// let aaa;
// console.log(aaa);
// aaa=333;
// console.log(aaa);

// let abc=1;
// {
//     console.log(abc);
//     let abc=2;
// }

console.log(test)

var x = 1;

function and(){
    var x = 10;
    or(x);
}

function or(x){
    console.log(x);
}

and();
or();

var a=1;
var b=2;
console.log("a =",a)
console.log("b =",b)
var a=100;
console.log(a)



// var a = 3;
// var b = 7;
// var result = a + b;
// console.log(result);
