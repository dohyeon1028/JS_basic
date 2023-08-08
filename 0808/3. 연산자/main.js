/* 
연산자란 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입, 지수 연산 등을 수행하여 하나의 값을 만드는 것. 이때 연산의 대상을 피연산자라고 하고, 피연산자는 값으로 평가될 수 있는 표현식이어야 한다. 피연산자를 명사에 비유핟나면, 연산자는 피연산자들로 또 다른 값을 만드는 동사라고 할 수 있다.

1. 산술연산자
    피연산자를 대상으로 수학적 계산을 수행해서 새로운 숫자값을 만드는 것.
    산술 연산이 불가능한 경우 NaN을 반환한다.(대소문자 주의) NaN = Not A Number라는 뜻으로 대소문자가 다르면 다른 뜻이니 주의.
    
    항이란 산술연산에 있어서 산술 연산자를 제외한 것. 즉, 피연산자를 항이라고 한다.
        1) 단항 산술연산자 : 항이 하나인 식에서 산술 연산을 하는 것으로 증가연산, 감소연산
            let num = 5;
            let result;

            result = num++;
            console.log(result, num);
            // 변수 할당은 우변이 좌변에 할당되므로 우변의 연산이 끝나고난 뒤에 값이 좌변 변수에 담기는데 num++은 후위연산으로 값을 넘기는 연산을 먼저 수행하고, 이후 후위연산인 증가를 시킨다. 따라서 result에는 5가 담기고, num은 이후에 연산되어 6이 된다.

            result = ++num;
            // ++num은 전위연산으로 값을 넘기기 전에 먼저 연산을 수행하고 그 이후 변수에 담긴다. 따라서 num은 7이 되고, result도 7이 된다.

            // num = 7

            result = num--;
            console.log(result,num); //result = 7, num = 6

            result = num++;
            console.log(result, num); // result = 6, num = 7

            숫자형 변환
                let num1 = "1";
                console.log(num1);
                console.log(typeof num1);
                console.log(+num1);
                console.log(typeof +num1);

            문자열 연결 연산자 : + 연산자는 피연산자 중 하나 이상의 문자열인 경우 문자열을 연결하는 연산을 합니다. 이로 인해 형 변환이 또 일어난다.
                let res = "1" + 2;
                let res1 = 1 + "2";
                console.log(res);
                console.log(typeof res);
                console.log(res1);
                console.log(typeof res1);

                console.log(true == 1);

                let res2 = 1 + true;
                console.log(res2);

        2) 이항 산술연산자 : 두 개의 피연산자를 대상으로 연산하여 새로운 숫자를 만든다. 만약 산술연산이 불가능하면 NaN을 반환한다. 기존 사칙연산인 +,-,*,/와 나머지를 구하는 %가 있다. +, -는 단항산술연산자이면서 이항 산술연산자이다. 사용의미는 같다.

            typeof 연산자
                console.log(typeof ""); //string
                console.log(typeof 1); //number
                console.log(typeof NaN); //number
                console.log(typeof true); //boolean
                console.log(typeof Symbol); //function
                console.log(typeof Symbol()); //Symbol
                console.log(typeof function(){}); //function
                console.log(typeof Null); //object => 버그, 원래는 null이 맞음
                console.log(typeof []); //object
                console.log(typeof abc); //undefined (식별자 : 변수이름, 함수이름)
            
2. 할당 연산자
    우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당하는 것. 좌항의 변수값이 변한다.
    
    let number = 5;
    number += 5;
    console.log(number); 에서 좌항의 변수값은 변하게 된다.

    let number2 = 5;
    number2 -= 5;
    // number = number - 5;
    console.log(number2);       //'-'

    let number3 = 5;
    number3 *= 5;
    // number = number * 5;
    console.log(number3);       //'*'

    let number4 = 5;
    number4 /= 5;
    // number = number / 5;
    console.log(number4);       //'/'

3. 비교연산자 : 좌항과 우항의 피연산자를 비교한 다음 불린값으로 반환하며, 조건문(if문), 반복문(for문) 등에 사용하는 연산자이다.
    1. 동등/ 일치 비교연산자
        == : 동등비교연산자, 수학에서의 등호와 같다.
        === : 일치비교연산자 값이 같음을 넘어서 데이터 타입까지도 일치하는 것이 비교.
        != : 동등하지 않다.
        !== : 일치하지 않다.

        동등비교 연산자의 경우, 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입변환을 통해서 타입을 일치 시키고 값이 동등한지 비교한다. (즉 자바스크립트가 자동적으로 변환하는 과정이 있다.)

        동등비교연산자와 자바스크립트의 맹점 : 암묵적인 타입변환이 일어나기 떄문에 개발자는 값을 예상하기 어렵다. 따라서 동등비교연산자보다는 일치비교연산자를 사용하는 것이 좋다. 왜냐 ? 일치비교연산은 타입변환을 마음대로 하지않는데, 동등비교연산자는 마음대로 변환하기 때문에

    2. 대소비교 연산자(좌항 기준)
        <  : 크다
        >  : 작다
        >= : 크거나 같다
        <= : 작거나 같다

    3. 논리연산자
        || : OR
        && : AND
        !  : NOT

    4. 그룹연산자
        피연산자를 감싸서 해당 표현식을 가장 먼저 평가하도록 한다.

*/






