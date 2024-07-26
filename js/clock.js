const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    // 초가 한자릿수면 두자리수로 채우기 1 -> 01
    const hours = String(date.getHours()).padStart(2,"0");
    const minuts = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minuts}:${seconds}`
}

getClock()
setInterval(getClock, 1000);

/*
// 간격을 두고 실행함, ms단위
setInterval(sayHello, 5000);

// ms 뒤에 실행함
setTimeout(sayHello, 5000);
*/
