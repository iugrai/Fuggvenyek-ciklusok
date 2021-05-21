const nums = [ 'a', '4', 2, 2, 1, 1];
console.log(sum(nums));

function sum(nums) {
	var total = 0;
	for (var i = 0; i < nums.length; i++) {
  	var num = parseInt(nums[i], 10);
    if (isNaN(num)) {
    	console.log(num + " not a number");
    } else {
    	total += num;
    }

  }
  return total;
}