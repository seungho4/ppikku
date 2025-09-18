// 반복문이 없는 코드
// 변수 number를 선언하고, 0을 할당
// // 변수 number를 3번 출력 === 변수 number가 3미만일때 까지
//  1씩 증가하면서

let number = 0; // 초기화문

console.log(number); // 반복 실행할 코드
number = number + 1; // 증감문

console.log(number);
number = number + 1;

console.log(number);
number = number + 1;

// for 초기화문, 조건식, 증감문
for (let number2 = 0; number2 < 3; number2 = number2 + 1) {
  console.log(number2); // 반복 실행할 코드
}

// 숫자를 0부터 5까지 출력

for (let i = 0; i < 6; i++) {
  console.log(i);
}
