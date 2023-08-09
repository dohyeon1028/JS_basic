/* 

나이와 성별의 조건에 따라 호칭을 정하는 조건문

*/

let callYB = "남동생";
let callYS = "여동생";
let callF  = "친구";
let callOB = "형";
let callOS = "누나";

let myAge = prompt("당신의 나이는?", "1~100");
let myGender = prompt("당신의 성별은?", "male or female");

let yourAge = prompt("그 사람의 나이는?", "1~100");
let yourGender = prompt("그 사람의 성별은?", "male or female");

function whatShouldICallYou(yourAge, yourGender){
    if (myAge === yourAge ){
        return callF;
    }else if ( myAge > yourAge ){
        if ( myGender === yourGender ){
            return callYB;
        } else {
            return callYS;
        }
    }else if ( myAge < yourAge ){
        if ( myGender === yourGender ){
            return callOB;
        } else {
            return callYS;
        }
        
    }
}








// let myAge = prompt("당신의 나이는?", "1~100");
// let myGender = prompt("당신의 성별은?", "male or female");

// let yourAge = prompt("그 사람의 나이는?", "1~100");
// let yourGender = prompt("그 사람의 성별은?", "male or female");


// if( myAge > yourAge ){                                                  //내가 나이가 많을 경우
//     if( yourGender === "male" ) alert("그 사람은 남자 동생입니다.");    //상대가 남자일 경우
//     else alert("그 사람은 여자 동생입니다.");                           //상대가 여자일 경우
// }

// else if (myAge < yourAge ){                                             //내가 나이가 적을 경우
//     if( myGender === "male" ){                                          //내가 남자일 경우
//         if(yourGender === "male" ) alert("그 사람은 형입니다.");        //상대가 남자일 경우
//         else alert("그 사람은 누나입니다.");                            //상대가 여자일 경우
//     }
//     else if( myGender === "female" ) {                                  // 내가 여자일 경우
//         if(yourGender === "male" ) alert("그 사람은 오빠입니다.");      //상대가 남자일 경우
//         if(yourGender === "female" ) alert("그 사람은 언니입니다.");    //상대가 여자일 경우
//     }
// }

// else{                                                                   //나이가 같을 경우
//     if( myGender === yourGender ) alert("그 사람은 동성 친구입니다.");  // 성별이 같을 경우
//     else alert("그 사람은 이성 친구입니다.");                           //성별이 다를 경우
// }
