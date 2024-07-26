const h1 = document.querySelector("div.hello:first-child h1");


//classlist를 사용해서 클래스명을 바꾸지 않고 event를 수행하는 방법
function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}



h1.addEventListener("click", handleTitleClick);