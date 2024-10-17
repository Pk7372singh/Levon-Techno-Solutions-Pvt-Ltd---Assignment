function twoSum(nums, target) {
    let numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; 

        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
    }

    return []; 
}

let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log("Indices of the numbers that add up to the target:", result);
