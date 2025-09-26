import React from "react";

//export default : 모듈 내보내기
//function : 함수
//return : 요소(Element)를 반환해야됨

//파일 당 하나 존재하는 함수는 컴포넌트를 뜻하는데
//컴포넌트 함수는 HTML 요소(Element)를 반환
export default function Rule() {
  // return (<div>1</div><div>2</div><div>3</div>)

  //div태그 3개를 감싸는 1개의 Fragment 태그 <> </> 반환

  return (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <p className="font-bold text-5xl text-red-700">p 태그 {1 + 0} </p>
    </>
  );
}
