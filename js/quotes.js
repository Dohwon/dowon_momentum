const quotes = [
{
    quote: "훌륭한 일을 하기 위한 유일한 방법은 당신이 하는 일을 사랑하는 것입니다.",
    author: "스티브 잡스"
},
{
    quote: "천리길도 한 걸음부터.",
    author: "노자"
},
{
    quote: "우리를 죽이지 않는 것은 우리를 더 강하게 만든다.",
    author: "프리드리히 니체"
},
{
    quote: "인생은 당신이 다른 계획을 세우느라 바쁠 때 일어나는 일입니다.",
    author: "존 레논"
},
{
    quote: "힘든 일이 닥치면, 강한 사람들은 나아간다.",
    author: "조 케네디"
},
{
    quote: "당신이 세상에서 보고 싶은 변화가 되어야 합니다.",
    author: "마하트마 간디"
},
{
    quote: "인생은 한 번뿐이지만, 제대로 하면 한 번으로 충분하다.",
    author: "메이 웨스트"
},
{
    quote: "어려운 시기는 절대 오래가지 않지만, 강한 사람들은 오래간다.",
    author: "로버트 H. 슐러"
},
{
    quote: "바쁘게 살든지, 바쁘게 죽든지.",
    author: "스티븐 킹"
},
{
    quote: "당신이 할 수 있다고 생각하든, 할 수 없다고 생각하든, 당신이 옳습니다.",
    author: "헨리 포드"
},
{
    quote: "미래를 예측하는 가장 좋은 방법은 그것을 발명하는 것입니다.",
    author: "앨런 케이"
},
{
    quote: "나는 실패한 것이 아닙니다. 단지 1만 가지 작동하지 않는 방법을 찾은 것입니다.",
    author: "토머스 에디슨"
},
{
    quote: "당신을 높이고 싶다면, 다른 사람을 높여라.",
    author: "부커 T. 워싱턴"
},
{
    quote: "천천히 가는 것이 중요한 것이 아니라, 멈추지 않는 것이 중요합니다.",
    author: "공자"
},
{
    quote: "우리의 삶은 중요한 것들에 대해 침묵하는 날 시작됩니다.",
    author: "마틴 루터 킹 주니어"
},
{
    quote: "할 수 있는 일을, 가진 것으로, 있는 곳에서 하라.",
    author: "시어도어 루즈벨트"
},
{
    quote: "성공은 끝이 아니며, 실패는 치명적이지 않습니다: 중요한 것은 계속해 나가는 용기입니다.",
    author: "윈스턴 처칠"
},
{
    quote: "할 수 있다고 믿으면, 이미 절반은 이룬 것입니다.",
    author: "시어도어 루즈벨트"
},
{
    quote: "당신이 하는 일이 차이를 만든다고 생각하세요. 그렇습니다.",
    author: "윌리엄 제임스"
},
{
    quote: "목표를 달성하여 얻는 것은 중요하지 않다. 목표를 달성함으로써 당신이 어떤 사람이 되는가가 중요하다.",
    author: "지그 지글러"
}
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

// random하게 array의 값을 불러오기
// 근데 정수로

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
