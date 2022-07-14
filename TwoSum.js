var twoSum = function (nums, target) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if(i==j)continue
            if(nums[i]+nums[j]===target)
            {
              return [i,j]
            }

        }
    }
};

let nums = [3,2,4]
let target = 6


console.log(twoSum(nums, target))