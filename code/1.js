/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const mapObj = {};
    const resArr = [];
    for (i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const value = target - currentValue;
        const valueIndex = mapObj[value];

        // 索引可能是 0
        if (valueIndex || valueIndex === 0) {
            resArr.push(i);
            resArr.push(valueIndex);
            return resArr;
        } else {
            mapObj[currentValue] = i; // 当前值和它的索引
        }
    }
    return resArr;
};

// case1
const case1 = { nums: [2, 7, 11, 15], target: 9 };
console.log(twoSum(case1.nums, case1.target));
