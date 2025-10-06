//Hight order function

function add(a, b, cb){
    let result = a + b;
    cb(result);
}
function display(result){
    console.log(result);
}

add(2, 3, display);