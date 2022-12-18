/*
  1: Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
ex: 
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
function isHappyNumber(num) {
  if (num < 0 || isNaN(num) === true) {
    return console.log("Input is invalid");
  } else {
    let numList = [num];
    while (true) {
      let letterArr = num.toString().split("");
      num = letterArr.reduce((total, value) => {
        return (total += Math.pow(value, 2));
      }, 0);
      if (num === 1) {
        console.log("Input is a happy number");
        break;
      } else if (numList.includes(num)) {
        console.log("Input is not a happy number");
        break;
      } else {
        numList.push(num);
      }
    }
  }
}

isHappyNumber(9);

/*
2: You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

ex1: 
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

ex2: Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

ex3: Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

ex2: Input: digits = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]
Output: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
*/
function Increment(num) {
  if (num < 0 || isNaN(num) === true) {
    return console.log("Input is invalid");
  } else {
    let letterArr = num.toString().split("");
    letterArr.sort((a, b) => {
      return b - a;
    });
    let lastDigit = letterArr[letterArr.length - 1];
    letterArr[letterArr.length - 1] = (Number(lastDigit) + 1).toString();
    let newNum = letterArr.join("");
    return console.log(newNum);
  }
}

Increment(0);

/*
3: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

ex1: Input: nums = [2,2,1]
Output: 1

ex2: Input: nums = [4,1,2,1,2]
Output: 4

ex3: Input: nums = [1]
Output: 1
*/
