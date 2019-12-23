/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  var first = nums[0];
  var second = nums[0];

  for (let num of nums) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num != first) second = num;
  }

  return second;
}
