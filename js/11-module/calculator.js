
// 가장 기본적인 형태의 하나 내보내기(Default Export) 방식
// 여러개의 함수(머서드)가 정의된 객체를 생성해서 내보내기


// 객체란 중괄호로 표현되는 속성의 모음

const calObject = {
  add: function (n1, n2) {
    return n1 + n2;
},
  // substract 함수
  substract: function (n1, n2) {
    return n1 - n2;
  },
multiply: function (n1, n2) {
    return n1 * n2;
  },  
multiplyArrow: (n1, n2) => {
    return n1 * n2;
  },
  
}

// 하나만 내보내기 (Default Export) 코드 작성

export default calObject;