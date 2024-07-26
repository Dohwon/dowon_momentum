const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    time: function(a,b){
        console.log(a*b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    power: function(a,b){
        console.log(a**b);
    }
};

console.log(calculator.add(4,2));
console.log(calculator.minus(4,2));
console.log(calculator.time(4,2));
console.log(calculator.divide(4,2));
console.log(calculator.power(4,2));
