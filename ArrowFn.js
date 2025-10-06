function add(x, y) {
    return x + y;
}

console.info(add(2, 3));

const substract = (x, y) => x - y;
console.info(substract(2, 5));

const obj = (...nums) => {
    console.log(nums)
}
obj(1, 2, 3, 4,5);