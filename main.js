
// 타이핑 되듯이 출력하는 자바 스크립트 
let target= document.querySelector("#dynamic");
// 1.target 변수 만들고 dynamic이라는 문서객체를 선택 해주기 
// 2.함수 만들기 

//5. 배열 변수 만들어 글자움직임 만들기 
function randomString(){
let stringArr=[ "Learn To HTML","Learn To Css","Learn To Javascript",
    "Learn To Phython"," Learn To Code"];
//6.랜덤하게 선택 할 수 있도록 변수 만들기 
let selecString=stringArr[Math.floor(Math.random()*stringArr.length)];
// 문자열을 배열로 분리 시켜라 
let seletStringArr =selecString.split("");
// ("")기준으로 분리해서 배열로 바꾸면 한글자씩 배열화가 된다.
return seletStringArr;
}
//타이핑 리셋 
function resetTyping(){
    target.textContent=" ";
    // 새로운 문장으로 타이핑 시작 
    dynamic(randomString());
}
//3.추가, 삭제를 반복 
function dynamic (randomArr){
// 한글자씩 택스트 출력 함수 
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        //시프트 매서드 : 앞부터 밖으로 빼내기 
        // 재귀함수의 원리를 이용 
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 3000);
        }
}
dynamic(randomString());
//커서 깜박임 효과 함수
function blink (){
    target.classList.toggle("active");

}
setInterval(blink, 500);
//4.반복함수로 0.5초 마다 실행 

// 1. 타겟 변수설정
2
