const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

/* 
// To Do를 저장하기 위한 array 생성
// 근데 이러면 새로고침할 때마다 덮어쓰게 됨 
const toDos = [];
*/

// 그래서 let을 써서 변수 바꿔주기~ 
let toDos = [];

// brouwer의 기능, 어떤 js 코드든 모두 string으로 바꿔주기 JSON.stringify
// JSON.stringfy는 다시 js로 바꿀 수도 있음 JSON.parse
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    // button이 클릭되었다는 건 알지만 어떤 버튼인지 모름
    // 그래서 인자로 event를 줌. that event
    const li = event.target.parentElement;
    li.remove();
    // 원하지 않는 걸 제외하고 array를 다시 만들 수 있는 filter 사용 
    // 걸러낼 값은 id를 활용
    // li의 id는 string이고 toDo의 id는 number라 비교가 안됨, 맞춰주기
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    // 삭제 버튼을 만들거라, li 뿐만아니라 그 안에 span도 넣고 싶음
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    // 버튼 만들기
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // input 창을 비우기 전에 저장하고 비우기
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    // localStorage에서 삭제도 하자
    // 어떤걸 삭제해야할지 모르니까 id를 만들어주기, 날짜로
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    // 그리기 전에 저장
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    // localStorage에는 array를 저장할 수 없음 (string만) 그래서 함수 만들기
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// local storage를 지우면 null일 때도 있음 
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // 이전 내역 함께 복원, 변수 업데이트 
    toDos = parsedToDos;
    // arrow function, 코드를 짧게 쓰자
    parsedToDos.forEach(paintToDo);
}