const obj1 = {
  name: "홍길동",
  age: 20,
  job: "개발자",
  location: "서울",
  country: "대한민국",
};

//객체 복사
const obj2 = obj1;
console.log(obj1);
console.log(obj2);




obj2["location"] = "대구";
console.log(obj2);
console.log(obj1);

//...스프레드 연산자를 활용한 복사
const obj3 = { ...obj1 }; // obj1의 속성을 펼쳐서 "새로운 객체"를 생성
console.log(obj3);


obj3["name"] = "고길동";
console.log(obj1);
console.log(obj3);


//



