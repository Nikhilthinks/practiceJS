// Reverse an array by k steps

// var arr = [1,2,3,4,5,6];
// var k = 3;

var arr = [];
var k = prompt("Enter number of steps here");
const l = prompt("Enter the length of array");

for (let i = 1; i < l; i++) {
  arr.push(prompt("Enter a number"));
}

var rotate = function (arr, k) {
  while (k > 0) {
    arr.unshift(arr.pop());
    k--;
  }
};

var x = rotate();

console.log(x);

var arr = [];
var k = +prompt("Enter number of steps here");
var xx = +prompt("Enter the length of array");

for (let i = 1; i < xx; i++) {
  arr.push(prompt("Enter a number"));
}

var rotate = function (arr, k) {
  while (k > 0) {
    arr.unshift(arr.pop());
    k--;
    console.log(arr);
  }
  console.log(arr);
};

// Pick a Random number from an array.

var array = [2, 3, 1, 4, 5, 6];

array.sort((a, b) => {
  var num = Math.random();
  if (num < 0.5) return -1;
  else return 1;
});

// Monotonic Array

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  if (A.length < 2) {
    return true;
  }

  let monotonicIncrease = true;
  let monotonicDecrease = true;

  for (let i = 0; i < A.length; i++) {
    if (A[i - 1] < A[i]) {
      monotonicDecrease = false;
    }
    if (A[i - 1] > A[i]) {
      monotonicIncrease = false;
    }
  }

  return monotonicDecrease || monotonicIncrease;
};
