const h1 = document.querySelector("div.hello:first-child h1");

//toggle을 사용하면 subj3의 내용을 아래처럼 간단하게 만들 수 있다. 
// 토큰이 존재하면 토큰을 추가, 있으면 제거하는 기능
function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
