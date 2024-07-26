const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 변수 적기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// html의 form, submit을 사용하면 페이지가 새로고침되기 때문에
// click을 신경쓸 게 아니라 submit을 신경써야함.
// form이 submit되는 것 막기
// preventDefault 기본적인 event 자동실행 막기

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // 마지막 설정을 기억하는 건 흔한 작업! ex) youtube 볼륨 조정 후 새로고침해도 유지
    // local storage 사용
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// 코드 반복 사용을 막기 위해 함수 생성
function paintGreetings(username){
    // "hello " + username 과 같이 텍스트를 결합하는건 아래 방식으로 바꿀 수 있다.
    // 변수는 ${변수명}으로 표기, `(백틱)기호로 시작하기
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


// onLoginSubmit과 onLoginSubmit()의 차이.
// ()는 실행한다, addEventListner 안에 있는 함수는 브라우저가 실행하도록 두기

// localStorage에 유저 정보가 있으면 form이 아닌 h1 보여주기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}

