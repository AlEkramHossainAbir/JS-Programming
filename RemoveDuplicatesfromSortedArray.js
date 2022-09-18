nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {
    if(nums.length <= 1) {
        return nums.length;
    }
    console.log(nums)
    var k = 1;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i-1]){
            console.log(nums)
            nums[k++] = nums[i];
            console.log(nums)
        }
    }
    return k;
};

console.log(removeDuplicates(nums))