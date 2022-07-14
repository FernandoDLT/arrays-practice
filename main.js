// array nums, target num, indice not numbers
// array nums & target -> no funny business
// [1,2,3,4,5],9 -> [3,4]
// [5,6,9],11 -> [0,1]
// [22,7,100,5],12 -> [1,3]


function findTarget(nums,target) {
// outter loop grabbing a num
for(let i = 0; i < nums.length; i++) {
// inner loop testing that num with all the other nums
    for(let k = 0; k < nums.length; k++) {
// if two nums added = target -. nums indices
    if(nums[1] + nums[k] === target && i !== k) {
        return[i,k]
    }
  }
}
}
console.log(findTarget([1,2,3,4,5]))
console.log(findTarget([5,6,9],11), "[0,1]")
console.log(findTarget([22,7,100,5],12), "[1,3]")