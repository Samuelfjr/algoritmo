/**
Beginner - Lost Without a Map

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
 */

const doubledValue = (x) => {
  const double = x.map((num) => num * 2);
  return double;
};
