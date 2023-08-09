/* 
제어문 : 조건에 따라 코드 블록을 실행하거나, 반복 실행하는 것을 말한다. 일반적으로는 코드 위에서 아래 방향으로 순차적인 실행을 하지만, 제어문을 사용하면 코드의 흐름을 개발자의 의도에 따라 제어할 수 있다. 핵심은 코드의 흐름을 개발자 의도대로 흐르게 할 수 있다는 것.

블록문 : 0개 이상의 문을 중괄호로 묶은 것으로 코드 블록이라고도 한다. 자바스크립트는 블록문을 하나의 실행 단위로 취급한다.

조건문 : 주어진 조건식의 평가결과에 따라 코드블록의 실행을 결정하는 것을 말하며, 조건식은 참, 거짓 즉 불린값으로 평가 될 수 있는 표현식이어야 한다.
    if문

    삼항 연산자, 삼항 조건연산자 : 조건식 ? (조건식이 참일 때의 값) : (조건식이 거짓일 때의 값);
    =>조건식이 평가되어 결과가 불린값이 아니면, 암묵적 타입 변환이 일어난다. 삼항 연산자의 경우 앞의 조건문이 표현식으로 되어있어 변수에 할당할 수 있습니다. 그러나 일반 if문의 경우 표현식이 아니므로 변수 할당이 안된다. 변수 할당이 필요하다면 삼항 연산자를, 그렇지 않은 경우에는 if문을 사용하는 것이 가독성에 좋다.

        let num = 3;
        let result;

        if(num > 0){
            result = "양수";
            // num이 0보다 크면 양수
        }else if(num === 0){
            result = "0";
            //num의 값이 0과 같고, 데이터 타입 또한 숫자형이면 0
        }else{
            result = "음수";
            //num의 값이 양수도, 0도 아니면 음수
        } 

        // 주어진 조건식에 부합하지 않으면 무시되고, 부합할 시에만 적용된다.
        console.log(result);

        let x = 5;
        let number = x % 2 ? "홀수" : "짝수" ; 

        if(x%2){ //나눈 값이 1일 때 (1 = 참)
            number = "홀수";
        }else{ //아닐 때 (0 : 거짓)
            number = "짝수";
        }

        console.log(number);
        
        // let asked = prompt("당신은 하루에 몇 보나 걸으십니까?", "숫자로만 입력하세요");

        // if(asked > 1000) alert("이틀은 더 살겠네");
        // 조건이 하나일 경우 중괄호를 생략하기도 한다.

        // let userName = prompt("당신의 이름을 입력해 주세요");

        // if(userName) alert(userName + "님 반갑다");
        // userName의 값이 존재하면 참, 존재하지 않으면 거짓.

        let add = document.querySelector("ul");
        if(add) console.log("ul은 살아있다.")
        // 값을 받아서 존재하는지에 따라 조건문을 참으로 만드는 방식은 특정 클래스나 태그, 아이디 등 변수로 담아서 존재의 유무를 찾는 방법으로 많이 사용한다. 동적으로 생성될 특정 태그나 클래스를 추적해서 존재한다면 특정 상황을 구현하고, 존재하지 않으면 무시하게 해서 특정 상황을 구현하는 코드로 자주 사용한다.
    
    switch문 : 주어진 표현식을 평가하여 그 값과 일치하는 표현식인 case 문으로 실행의 흐름을 옮기는 것이다. 만약 일치하는 case문이 없으면 default문으로 이동한다. 다만, default문은 선택사항이므로 사용하지 않아도 된다.

        switch(표현식A){
            case 표현식1:
                표현식A의 값이 표현식 1과 일치하면 실행하는 문;
                break;
            case 표현식2:
                표현식A의 값이 표현식 2과 일치하면 실행하는 문;
                break;
            case 표현식3:
                표현식A의 값이 표현식 3과 일치하면 실행하는 문;
                break;
            default:
                일치하는 case가 없을 경우 실행하는 문;
        }


prompt
alert
confirm
*/

// let num1 = prompt("좋아하는 숫자를 써주세요", "숫자만 입력");
// if(num1 % 2 === 0){
//     alert("짝수");
// }else{
//     alert("홀수")
// }

// let res = confirm("정말로 탈퇴하시겠습니까"); //결과값의 형태가 불린값이다.
// if(res) alert("탈퇴처리 했어요");
// else alert("탈퇴처리 안했어요 ");

// let month = prompt("당신은 몇 월에 태어나셨나요?", "1 ~ 12");
// if(month > 12 || month < 1) alert("거짓말 치지 마");
// else if(month > 2 && month <= 5) alert("봄");
// else if(month > 5 && month <= 8) alert("여름");
// else if(month > 8 && month <= 11) alert("가을");
// else alert("겨울");


let year = 2023;
let month = 8;
let day = 0;
let i;

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:    
    case 8:
    case 10:
    case 12:
        day = 31;
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;

    case 2:
        day = ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) ? 29 : 30
        break;
}

console.log(day);