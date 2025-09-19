//숫자 2개를 매개변수로 받아서 더한 숫자를 반환하는 함수

// 함수 선언은 function 키워드로 시작

// 매개변수가 3개인 함수
function add(number1, number2, number3) {
  //함수를 호출하면 실행될 코드 블럭
  // 숫자 3개를 매개변수로 받아서 더한 숫자를 반환하는 함수
  //함수가 생성하는 데이터 => 반환값
  number1 + number2 + number3;
}

// 함수의 호출(call)
//함수에 전달(입력)하는 데이터(값, 변수)를 인자(argument)

//매개변수 : 외부에서 들어온 데이터를 저장한 변수
// 인자 : 외부에서 전달한 데이터(값, 변수)
function add(number1, number2, number3) {
  return number1 + number2 + number3;
}
const result1 = add(1, 2, 3);

const n1 = 1;
const n2 = 2;
const n3 = 3;
const result2 = add(n1, n2, n3);

console.log(`result1 = ${result1}`);
console.log(`result2 = ${result2}`);

function determine(number) {
  if (number < 0) {
    console.log("음수");
  } else if (number === 0) {
    console.log("0");
  } else {
    console.log("양수");
  }
}

// 함수 선언식
// 매개변수가 짝수면 true 반환
// 매개변수가 홀수면 false 반환

// 1. 변수 선언
let number;
// 2. 기능 코드 작성
if (number % 2 == 0) {
  // 짝수
} else {
  // 홀수
}

// 3. 함수를 선언한다
// 4. 변수 -> 매개변수
// 5. 기능 코드 -> 함수 코드블럭
// 6. 반환값을 작성
function evenOdd(number) {
  if (number % 2 == 0) {
    // 짝수
    return true;
  } else {
    // 홀수
    return false;
  }
}

//화살표 함수 표현 코드
const evenOdd = (number) => {
  if (number % 2 == 0) {
    // 짝수
    return true;
  } else {
    // 홀수
    return false;
  }
};
