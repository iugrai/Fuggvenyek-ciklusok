const nums = ['a', 4, 2, 2, 1, 1];
console.log(sum(nums));

function sum(nums) {
	var total = 0;
	for (var i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) {
    	console.log(nums[i] + " not a number");
    } else {
    	total += nums[i];
    }
  }
  return total;
}