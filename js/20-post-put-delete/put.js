// put.js

import axios from "axios";
async function putProduct() {
  // axios 설정 객체 config
  const config = {
    url: "https://dummyjson.com/products/1",
    method: "put",
    Headers: { "Content-Type": "application/json" },
    data: {
      title: "아이폰99"
    }
  }
  //응답 데이터 저장
  //
}



//함수호출
putProduct();