// 각 원소에 + 1을 한 결과를 출력

const numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach((element) => {
  //배열이 원소에 반복적으로 수행할 로직 코드
  console.log(element + 1);
});

// 각 원소 중 나눴을때 나머지가 0인 원소만 출력
numbers4.forEach((element) => {
  //배열의 원소에 반복적으로 수행할 로직 코드
  if (element % 2 === 0) {
    console.log(element);
  }
});

const newArray2 = numbers4.map((element) => {
  return element + 1;
});
console.log(newArray2);

// map() 을 활용해서 원소 * 2를 한 데이터를 모은 새로운 배열 생성

const newArray3 = numbers5.map((element) => {
  return element * 2;
});
console.log(newArray3);

// reduce()
// 배열의 누적을 반환
const numbers10 = [1, 2, 3, 4, 5];

const result = numbers10.reduce((accValue, currElement) => {
  // accValue : 이전 반복동안 반환된 값을 누적한 데이터
  // cerrElement : 현재 원소
  // 반환값들이 누적된다.
  return accValue + 1;
});
console.log(result);
