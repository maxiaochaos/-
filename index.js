//递归
 const fib = (n) => {
  return n < 2 ? n : (fib(n-2) + fib(n-1));
 };
console.log(fib(3));

//数组
const ArrayFib = function() {
  let array = [1, 1];
  return function (n) {
    if (n >= array.length) {
      for (let i = array.length; i < n ; i++ ) {
        array[i] = array[i - 2] + array[i - 1];
      }
    }
    return array[n - 1];
  }
}();
console.log(ArrayFib(3), '---fibArray---》');

// 加法
const plus = function(n) {
 if (n<2) {
  return 1;
 }
 let a = 1; let b =1;
 for(let i = 2; i < n-1; i += 1) {
  b = a + b;
  a = b - a;
 }
 return a + b;
};

console.log(plus(4));