/**
 * Step 1 → start with 0
(0 + 1) = 1
(1 + 2) = 3
(3 + 3) = 6
(6 + 4) = 10
    * Step 2 → final output is 10
 */

const nums = [1, 2, 3, 4];
const fn = function(acc, curr){
    return acc + curr;
}
const init = 0;
console.log(nums.reduce(fn, init));
