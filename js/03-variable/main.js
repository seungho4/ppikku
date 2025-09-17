// 변숭 데이터를 할당(assign 0, save X,)

// 변수명 = 할당할 데이터
// "Hello World" 데이터를 저장한 공간의 이름이 message
// 변수 massage에 "Hello World"를 할당
message = "Hello World";

// = : 할당 연산자
console.log(message);
console.log(message);
console.log(message);

// 자주봤던 실수
// 데이터 = 변수명
// "hello world" = message

// 변수 message2 선언
// 선언과 할당은 분리 가능
let message2;

// 선언의 방식 2개(원래는 3개)
// let
// 데이터의 재할당 가능
// 변수 message3에 "hello variable을 할당"
let message3 = "Hello variable";

// 변수 message3에 "hello variable을 재할당"
message3 = "Hello variable";
// let은 안 붙이나요? -> letdmf qnxdlaus tjsdjs
// let 키워드는 재선언은 불가능

// let 변수 message4를 선언
let message4;
//재선언은 불가능
// let messge4;

//const
// 데이터의 재할당이 불가능(중요) -> 상수 라고 개발에서는 표현
// const 변수 message5를 선언하고, "Hello Const" 할당

const message5 = "Hello Const";
//message5 = " Hello World";

// let Vs. const
// let : 변하는 데이터를 저장하는 변수 선언 방식
// const : 변하면 안되는 뎅터를 저장하는 변수 선언 방식

// 대소문자 구분하기 떄문에 두 변수는 다른 변수
let message6;
let MESSAGE6;

// 카멜 케이스 적용 전
let hellomessage;
// 카멜 케이스 적용 후
let helloMessage;

// 의미 없는 병수명
let a = 1;
// 의미 있는 변수명
let number1 = 1;

// 템플릿 리터럴
// 문자열 사이에 변수를 삽입해서 문자열을 생성하는 방법
// 1. 문자열을 백틱으로 표현
// 2. 변수 삽입 위치에 기호 ${변수} 를 사용

let name = "최승호";
let greet = `안녕하세요 ${name} 입니다.`;
console.log(greet);


// var
// 재선언도 가능하고, 재할당도 가능
var message7;
var message7;

