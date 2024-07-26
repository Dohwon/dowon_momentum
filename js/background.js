const images = [
"andrzej-suwara-j4glkaOX-ds-unsplash.jpg",
"annie-spratt-vI-uFNolpLA-unsplash.jpg",
"arindam-saha-PwzISwC2kLs-unsplash.jpg",
"bogdan-pasca-ePW8U7EoF54-unsplash.jpg",
"braden-jarvis-prSogOoFmkw-unsplash.jpg",
"cassie-boca-gFyy2Po7T-k-unsplash.jpg",
"diana-parkhouse-5RY9GtjPXZM-unsplash.jpg",
"dominik-fischer-f9uAn6snTs8-unsplash.jpg",
"francesco-ungaro-p3NOK6MhvKQ-unsplash.jpg",
"francesco-ungaro-ZDriZvoHeKk-unsplash.jpg",
"hannah-montez-05KFkDsxDjk-unsplash.jpg",
"hannah-montez-2VslRz5G8fo-unsplash.jpg",
"ishan-seefromthesky-BMJWpck6eQA-unsplash.jpg",
"jade-stephens-T-FSAK4Bv9c-unsplash.jpg",
"jan-folwarczny-ZXBPMnNVtlE-unsplash.jpg",
"joel-vodell-TApAkERW5pQ-unsplash.jpg",
"laia-nunez-AThSwV0LsCQ-unsplash.jpg",
"lucas-k-wQLAGv4_OYs-unsplash.jpg",
"mg-cthu--1h_NN3nqzI-unsplash.jpg",
"michael-d-rnKqWvO80Y4-unsplash.jpg",
"pang-yuhao-8z0UI6IDCHY-unsplash.jpg",
"peter-vanosdall-uZVtAixV8c8-unsplash.jpg",
"roberto-h-qToVxSYXPYU-unsplash.jpg",
"tianshu-liu-aqZ3UAjs_M4-unsplash.jpg",
"tristan-pineda-v2f2l0MVHdk-unsplash.jpg",
"vincentiu-solomon-Z4wF0h47fy8-unsplash.jpg",
"wolfgang-hasselmann-WQdcQltFuI8-unsplash.jpg"
];

// random하게 array의 값을 불러오기, quote와 동일
// 근데 정수로
const chosenImage = images[Math.floor(Math.random() * images.length)];

// js에서 html 추가하기
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// html의 body에 추가하기
document.body.appendChild(bgImage);