/* 
3/31 
*/ 
// problem 1 - #1480 Running Sum of 1d Array 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let output = []
    let sum = 0 
    for(let n of nums){
        sum += n
        output.push(sum)
    }
    return output
};

console.log(`${runningSum([1,2,3,4])}`)

// problem 2 - #1108 Defanging an IP Address
/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    return address.replace(/\./g, "[.]")
};

console.log(`${defangIPaddr("1.1.1.1")}`)

// problem 3 - #1470 Shuffle the Array
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let output = []
    for(let i =0;i<n;i++){
        output.push(nums[i])
        output.push(nums[i+n])
    }
    return output
};

console.log(`${shuffle([2,5,1,3,4,7],3)}`)

// problem 4 - #1672 Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let sums = []
    let current_sum = 0
    for(let i =0; i< accounts.length;i++){
        current_sum = 0
        for(let j=0; j<accounts[i].length;j++){
            current_sum += accounts[i][j]
        }
        sums.push(current_sum)
    }
    return Math.max(...sums)
};

console.log(`${maximumWealth([[2,8,7],[7,1,3],[1,9,5]])}`)

// problem 5 - #1432 Kids with the Greatest Number of Candies
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    let output = []
    for(let c of candies){
        if(c + extraCandies >= max){
            output.push(true)
        }
        else { output.push(false)}
    }
    return output
};

console.log(`${kidsWithCandies([2,3,5,1,3], 3)}`)
console.log(`${kidsWithCandies([4,2,1,1,2], 1)}`)

/*
EOD 3/31
*/

// problem 6 - #1512 Number of Good Pairs
/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    
};