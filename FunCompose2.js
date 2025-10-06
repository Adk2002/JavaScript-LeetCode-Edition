function multiply(x , y ){
    // return x * y;  //now this  will return undefined
    return [x * y, y];
}

function division(args){
    return args[0] / args[1];
}

function compose(...fns){
    return  function(...values){
        return fns.reduceRight((a, b)  => b(a), values);
    }
}

const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));
const task = c2f(multiply, division);
console.log(task(2, 3));