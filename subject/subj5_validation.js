const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 유저 값 유효성 확인하기
function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === ""){
        alert("Please write your name");
        } else if (username.length > 15){
            alert("Your name is too long.");
        }
    }
 
// link는 mouseevent, 유저의 마우스 좌표를 알려줌
function handleLinkClick(event) {
    event.preventDefault();
}

loginButton.addEventListener("click", onLoginBtnClick)