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

// console.log(`${runningSum([1,2,3,4])}`)

// problem 2 - #1108 Defanging an IP Address
/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    return address.replace(/\./g, "[.]")
};

// console.log(`${defangIPaddr("1.1.1.1")}`)

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

// console.log(`${shuffle([2,5,1,3,4,7],3)}`)

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

// console.log(`${maximumWealth([[2,8,7],[7,1,3],[1,9,5]])}`)

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

// console.log(`${kidsWithCandies([2,3,5,1,3], 3)}`)
// console.log(`${kidsWithCandies([4,2,1,1,2], 1)}`)

/*
EOD 3/31
*/

/*
4/1
*/

// problem 6 - #1512 Number of Good Pairs ~ 20 mins
/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let total = 0
    for(let i = 0; i <nums.length; i++){
        let current = nums[i]
        for(let j= i+1; j<nums.length;j++){
            if (current ==nums[j]){
                total++
            }
        }
    }
    return total
};

// console.log(`${numIdenticalPairs([1,2,3,1,1,3])}`)

// problem 7 - #771 Jewels and Stones
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let total = 0
    for(let s of stones){
        if(jewels.indexOf(s) != -1){ total++}
    }
    return total
};

// console.log(numJewelsInStones("aA","aAAbbbb"))
// console.log(numJewelsInStones("z","ZZ"))

// problem 8 - #1365 How Many Numbers Are Smaller Than the Current Number
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let output = []
    for(let i =0; i <nums.length; i++){
        let current_value = nums[i]
        let current_tally = 0
        for(let j = 0;j<nums.length;j++){
            if(current_value > nums[j]){ current_tally++ }
        }
        output.push(current_tally)
    }
    return output
};

// console.log(smallerNumbersThanCurrent([8,1,2,2,3]))

// problem 9 - #1342 Number of Steps to Reduce a Number to Zero
/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps  = function(num) {
    // V1
    // let current = num
    // let tally = 0
    // while(current !=0){
    //     tally++
    //     current % 2 ? current-- : current /= 2
    // }
    // return tally

    // V2
    // SKIPPING THE UNNECESSARY current INSTANTIATION SAVED ME 
    // 8MS ON RUNTIME & 0.5 MB IN MEMORY
    // NOT A BIG DIFFERENCE BUT INCREASED MY 
    // RUNTIME PERCENTILE FROM TOP 66.3 TO TOP 95.45%
    // MEMORY PERCENTILE FROM 93.97 TO 99.33
    let tally = 0
    while(num !=0){
        tally++
        num % 2 ? num-- : num /= 2
    }
    return tally
};

// console.log(numberOfSteps(14))

/*
EOD 4/1
*/
/*
4/3
*/

// problem 10 - #1528 Shuffle String - looked at solution in Discussions
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    //  let output = ''
    //  for(let i =0; i<s.length; i++){
    //     output += s[indices.indexOf(i)]
    //  }
    //  return output

     // even better solution
     let output = []
     for(let i=0;i<s.length; i++){
         output[indices[i]]= s[i]
     }
     return output.join('')
};


// console.log(restoreString('codeleet', [4,5,6,7,0,1,2,3]))

// problem 11 - #1281 Subtract the Product and Sum of Digits of an Integer - looked at solution in Discussions
/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    // let str = n.toString()
    // let sum = 0
    // let product = 1
    // for(let i of str){
    //     sum += parseInt(i)
    //     product *= parseInt(i)
    // }
    // return product - sum

    // different solution - makes use of reduce
    const digits = Array.from(String(n), Number)
    const sum = digits.reduce((a,b) => a+b)
    const product = digits.reduce((a,b) => a*b)
    return product-sum

};

// console.log(subtractProductAndSum(234))

// problem 12 - #1313 Decompress Run-length Encoded List
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    
};

console.log(decompressRLElist())

/*
EOD 4/3
*/