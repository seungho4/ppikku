//예외처리

try {
  //rty 코드 블록
  //내가 실행할 코드

// 오류가 발생할만한 코드를 작성
  console.log(Number);
} catch ( error) {
// catch 코드 블록
// try 코드 블록이 오류가 발생할 때 실행할 코드
// error 매개변수
// 오류의 정보를 저장하고 있는 객체
  console.log(error.name); // 에러의 종류
  console.log(error.message); //에러의 메세지
} finally{
//finally 코드 블록
// try ~ catch와 상관없이
// 무조건 실행되는 코드
}



