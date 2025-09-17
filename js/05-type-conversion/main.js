// 형 변환
// 명시정 형 변환 : 개발자가 한 것
// 암시적 형 변환 : JS 엔진(번역기)이 자동으로 한 것

// 문자열로의 명시적 변환
// String() 함수 : 문자열로 변환하는 도구
// 함수 : 프로그래밍 언어의 특정 기능을 수행하는 도구

// String(데이터) / String(변수)
console.log(String(123)); // 숫자형 -> 문자열

String(true);
String(undefined);
String(Boolean);

//문자열 "123"을 숫자형으로 변환해서 출력하는 코드 작성
console.log(Number("123") === 123); 