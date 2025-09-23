
// 비동기 처리 함수
// setTimeout, setInterval, fetch

// setTimeout(콜백, 밀리초)
// 밀리초 뒤에 콜백함수를 실행하는 비동기처리 함수

console.log("setTimeout 전 코드");

setTimeout(() => {
  console.log("5000ms 후 실행");
}, 5000);

setTimeout(() => {
  console.log("1000ms 후 실행");
}, 1000);

setTimeout(() => {
  console.log("2000ms 후 실행");
}, 2000);

console.log("setTimeout 후 코드");





자바스크립트 - 기본적으로 동기적 처리 - 효율이 낮음 - 1:1 작업
비동기적 처리 - 를 하기 위해서 다른 웹에서 작업자를 빌려 다:다 작업

콜 스택 - 현재 실행될 코드가 쌓여가는 곳
콜백 큐 - 비동기 처리 후 실행될 코드가 있는곳
이벤트 루프 - 콜 스택을 계속 확인하며 비었을때 대기중인 콜백큐 함수를 콜 스택으로 옮겨줌















