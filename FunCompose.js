function add(x, y) {
    return x + y;
}
function square(val){
    return val * val;
}

function compose(fn1, fn2){
    return function(a, b){
        return fn2(fn1(a,b));
    }
}


const addThenSquare = compose(add, square);

console.log(addThenSquare(5, 5));