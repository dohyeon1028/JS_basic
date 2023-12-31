/*

값 = 식(표현식)이 "평가"되어 생선된 결과를 말한다. => 평가가 가능해야 값이 된다.
따라서 모든 값은 "데이터 타입"을 가지며, 메모리에 2진수로 저장된다. 메모리에 저장된 값은 데이터 타입에 따라 다르게 해석될 수 있다.
예) 0100 0001 = 65(숫자 타입), A(문자 타입)

===평가 : 식을 해석해서 값을 생성하거나 참조하는 것을 말한다.

===리터럴 : 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해서 값을 생성하는 표기법 전체를 말한다.
예) 정수리터럴: 1000, 문자리터럴: "HELLO"

===표현식 : 값으로 평가될 수 있는 문, 즉 표현식이 평가가 되면 결과로 새로운 값이나 기존 값을 참조하여야 하며, 위의 리터럴도 값으로 평가가 되기 때문에 표현식이 될 수 있다. 표현식에는 리터럴, 식별자, 연산자, 함수 등 값으로 평가될 수 있는 모든 것들이 표현식이다.
'1 + 2 = 3'에서 '1 + 2'는 표현식이며 평가가 되어 3이라는 값을 가질 수 있다. 따라서 1+2 와 3은 같은 것(동치)이다. 이 말은 표현식은 값처럼 사용할 수 있다는 뜻이며, 문법적으로 값의 위치에 표현식이 올 수 있다는 것이다.
예) let scole = 50 + 50; or let x = 1 + 2; 와 같이 값이 올 수 있는 자리에 표현식을 쓸 수 있다. 

===문(statement) : 프로그램을 구성하는 기본 단위이자 최소 실행 단위. 명령문이라고도 부르며, 즉 컴퓨터에게 개발자가 내리는 명령이라 할 수 있다. 문이 모여 프로그램이 되고, 문을 작성하고 순서에 맞게 나열하는 행위를 프로그래밍이라고 한다. 또한 문은 토큰으로 구성되는데, 토큰은 문법적인 의미로 문(statement)을 문법적으로 나누었을 때, 더 이상 나눌 수 없는 최소의 단위를 말한다.
예) var sum = 1 + 1; 에서의 토큰은 7개 이다.

데이터 타입
    1. 원시형 자료(primitive type)
        특징 : 특정 값이 메모리에 바로 저장된다. 값만 저장되는 것으로 "변경이 불가능한 값"이다. 변수에 할당 시 실제값이 저장되고, 복사하게 되면 변수에 담은 원시 값은 실제의 값이 복사되어 전달된다.

        종류
            1) 문자열(string) : 문자열의 표현은 '반드시' '', "", ``(백틱/억음부)로 감싸서 표현한다. 다른 타입들과 달리 문자열을 따옴표 등으로 감싸는 이유는 키워드, 예약어, 식별자 등 다른 값들과 구분하기 위해 사용한다. 다만, 억음부는 ES6 이후에 사용이 가능하다. 변수 선언 할 때, 따옴표 등으로 감싸면 문자열로 인식하고, 감싸지 않으면 문자열이 아닌 식별자로 인식한다.(에러는 발생하지 않음) 
        ====템플릿 리터럴 : ES6부터 생긴 새로운 문자열 표기법. 사용 방법은 '', "" 대신 ``을 사용하는 방법. 즉 이 말은 따옴표 등을 표현하기에 ====어려운 대상을 표현한다는 의미이다.
    ============1. 멀티라인 문자열 : 일반적인 문자열 내에서는 사용할 수 없는 줄바꿈 또는 허용되지 않는 표현을 사용할 수 있도록 '\'로 시작하는 ========이스케이프 시퀀스를 사용한다.
            ex)\n : 개행, 줄바꿈
            ""안에 특수기호를 사용할 땐 특수기호 바로 앞에 '\'를 넣어 사용
            console.log("unicode: \@@@@ ");로 유니코드 문자를 사용할 수 있다.
            console.log("path: C:\\folder\\file.txt");

            ====2. 표현식의 삽입 :
            //ES5
            let sung = "Kim";
            let name = "Dohyeon"
            console.log('My name is '+ sung + " " + name + ".");

            //ES6
            console.log(`My name is ${sung} ${name}.`)
            //표현식 삽입시 ``(백틱)을 사용한 템플릿 리터럴을 사용하여 감싸고, 표현식을 ${}으로 감싸 변수로 인식하도록 한다. 이때 표현식의 평가값이 문자열이 아니더라도 문자열 타입으로 강제 형변환이 일어난다.

            2) 숫자(NUMBER) : 자바스크립트는 다른 언어와 달리 숫자 타입이 하나이다. ES에 따르면 숫자 타입의 배정밀도 64비트 "부동 소수점" 형식을 따라 모든 수를 실수로만 표현가능하다. 이 말은 즉, 정수 등 다른 수의 개념을 표현하기 위한 데이터 타입이 없다는 뜻이다.
            정수, 실수, 2진수, 8진수, 16진수 등을 모두 10진수로 해석한다.
                ====부동소수점 형식? => 정수를 나타내는 방법인 고정 소수점 데이터 형식의 반대로 컴퓨터 내부에서 "실수"를 표현하는 데이터 형식이다. 따라서 부동소수점 형식으로 계산하는 자바스크립트는 정밀한 숫자의 결과를 얻을 수 없으므로 해당 영역에서는 사용할 수 없다.

            3) 불린형(boolean) : true(1, 참)와 false(0, 거짓)만 존재.

            4) undefined : 변수를 선언하고 값을 할당하지 않을 때 암묵적으로 부여되는 값. (메모리에 값이 없어 비어있는 "에러 상황")

            5) null : 값이 비어있는 것. (메모리에 값을 명시적(일부러) 비어놓아 에러 상황은 아님. 보통 값을 넣을 수 없는 상황이라 일부러 비워두는 경우에 사용.)

            6) symbol타입 : ES6에 추가된 7번째 타입이다. 변경이 불가능한 원시 타입의 다른 값과 "중복되지 않는 유일무이한 값". symbol을 제외한 나머지 원시형의 자료값은 리터럴을 이용해서 생성한다. symbol이라는 함수를 통해 생성해야 한다.
            예) 주민등록번호 뒷자리


    2. 참조형 자료(reference type)
        특징 : 값의 참조값, 주소값만 메모리에 저장되고 실제값은 다른 곳에 있다. 즉, 변수의 메모리 공간에 원시형 자료처럼 값이 들어있는 것이 아니라 참조하고 있는 주소의 값이 들어있다. 변경이 가능한 값이다. 따라서 변수에 할당 시 메모리 주소값만 저장되고, 복사하게 되면 변수에 담은 참조형 자료는 실제가 아닌 주소가 복사되어 전달된다.

        종류
        1) 배열 : 같은 성격의 일련의 데이터들을 그룹 형태로 저장한 것. 인덱스(순번)로 검색한다.
        ==let colors = ["red", "yellow", "brown", "blue"];
        console.log(colors[2]); //bronw 출력
        console.log(colors[4]); // 4 이후로는 undefined 출력

        2) 객체 : 다른 성격의 일련의 데이터들을 그룹 형태로 저장한 것으로 property로 검색한다. property란 객채 내에 있는 데이터(또는 함수)를 이름(key) - 값의 쌍으로 표현하는 것을 프로퍼티라고 한다.
        ==let student1 = {
            name : "김도현", // name : string 이 한 쌍을 property라고 한다.
            age : 17, 
            address : "Gumi", 
            isMale : true 
        };
        console.log(student1);
        console.log(student1.address);
        console.log(window)

    3. 형 변환(타입 변환)
        데이터 타입을 다른 데이터 타입으로 변환하는 과정을 말한다. 자바스크립트는 데이터 타입이 런타임이 결정되기 때문에 잦은 타입 간의 형변환이 일어난다.

        1) 암시적(암묵적) 형변환 : 자바스크립트 엔진이 런타임 중 자동으로 데이터 타입을 변환하여 연산해버리는 것을 의미. 즉, 개발자와 상관없이 처리하는 것으로 개발자의 의도와 다른 결과를 나타내기도 한다.
        ==let num1 = "2";
        let num2 = 3;
        let num3 = 5;

        let result1 = num1 + num2;
        let result2 = num2 + num3;

        console.log(result1);
        console.log(result2);

        console.log(typeof result1);
        console.log(typeof result2);


        let result3 = num1 + num2 + num3;
        let result4 = num3 + num2 + num1;

        console.log(result3);
        console.log(result4);

        console.log(typeof result3);
        console.log(typeof result4);

        2) 명시적 형변환 : 개발자가 직접 데이터 타입을 변환하는 과정을 의미한다.
        ==let numStr = "123";
        console.log(typeof numStr);
        let numNum = Number(numStr);

        console.log(numNum);
        console.log(typeof numNum);

        let boolStr = "true";
        console.log(typeof boolStr);
        let bool = Boolean(boolStr);

        console.log(bool);
        console.log(typeof bool)

*/
