let nums = [10, 3, 7, 20, 13, 2];
let mapped=nums.map(nums=>nums*nums);
function isPrime(nums){
    if(nums<2) return false;
    for(let i=2;i*i<=nums;i++){
        if(nums%i===0) return false;
    }
    return true;
}
let filtered=nums.filter(isPrime);
let reduced=nums.reduce((a,b)=>a+b,0);
let sorted=nums.sort((a,b)=>b-a);
console.log(mapped);
console.log(filtered);
console.log(reduced);
console.log(sorted);