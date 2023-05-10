console.log("==============================How to find duplicate elements in given array?===============================")
const duplicate=[1,2,3,4,5,6,2,7,3,8,4]
const duplicates= duplicate.filter((value,index)=>duplicate.indexOf(value)!==index)
console.log("duplicate values",duplicates)

const dupli=[1,2,3,4,5,6,2,7,3,8,4]
const duplit= duplicate.filter((value,index)=>duplicate.indexOf(value)===index)
console.log("array without duplicate values",duplit)

console.log("===============================swapping==============================")
let a=5;
let b=10;
[b,a]=[a,b]
console.log(a,b)

console.log("===========================Count words in a string====================")
const st="sneha sudhakaran"
const s = st.split(" ")
console.log(s)

function sneha(s){
     return s.length
}
console.log(sneha(s))

console.log("=========================== manually Counting words in a string====================")

function count(s){
    count=1
    for (let i=0; i<s.length; i++){
        if (s[i]==" "){
            count++;
        }
    }
    return count + " manual check"
}
console.log(count("sneha sudhakaran mugesh"))

console.log("=========================== missing value ====================")
const array=[1,2,3,4,5,7,8];
console.log(array.indexOf(10))
const missigvalue=[];
const miss=(arr)=>{
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    for (let i=min;i<max;i++){
        if (arr.indexOf(i)<0){
            missigvalue.push(i)
        }
    }
    return missigvalue
};
console.log(miss(array))

console.log("=====================how to find max and min value in a gven array in js========================")
const array1=[23,45,1,2,3,56,23,56,9,45]
function func(array1){
    sum=array1.sort(function(a,b){return a-b})
    console.log("Maximum value of given array",sum[sum.length-1])
    console.log( sum)
    console.log("minimum value of given array",sum[0])
}
func(array1)

console.log("=====================how to find max and min value in a gven array in js using reduce========================")
const reduce=array1.reduce((a,b)=>{
    return a<b ? a:b; //minimum value of array
    // a>b?a:b; maximum value of array
})
console.log(reduce)

console.log("=====================how to find even or odd number in a given array========================")
const Numbers=[]
for (let i=0; i<=100; i++){
    Numbers.push(i)
}
console.log(Numbers)

const even=Numbers.filter((a)=>{ return a%2===0})
console.log("Even numbers",even)
const odd=Numbers.filter((a)=>{ return a%2!==0})
console.log("Odd numbers",odd)

console.log("============================================how to find the sum of the elements in given array====================================")

const sum1=Numbers.reduce((a,b)=>{return a+b})
console.log("sum of all values in array",sum1)

console.log("============================================How to find factorial of a given number in javascript====================================")
num=-1
mul=1
if (num<0){
    console.log(`factorial not possible with this number ${num}`)
}
else{
for(let i=1;i<=num;i++){
    mul=mul*i   
}
console.log(`factorial of ${num}! is ${mul}`)
}
console.log("============================================How to find prime number====================================")
let num10=8

for (let i=2; i<num10; i++){
    if (num10%i==0){
        var result="not a prime"
    }
    else{
        var result="prime"
    }
    
}
// if (num10==1){
//     console.log("1 is neither prime nor composite")
// }
// else if (num10<1){
//     console.log("not possible with this number")
// }
// else{
//     for (let i=2; i<num10; i++){
//         if (num10%i==0){
//             var value="not a prime"
//         }
//         else{
//             var value="prime"
//         }
//     }
//     console.log(value)
// }
console.log("============================================How to find prime number====================================")
prime=4
function isPrime(prime){
    if (prime<0){
        return `not a prime`
    }
    for (let i=2; i<prime; i++){
        if (prime%i==0){
            return `${prime} is not a prime number`
        }
    }
    return`${prime} is a prime number`
}
console.log(isPrime(prime))
console.log("============================================Write a program to check two numbers and return true if one of the number is 100 or if the sum of two is 100====================================")
const hunt = (a,b)=> a===100 || b===100 || (a+b)===100;
console.log(hunt(100,0))
console.log(hunt(0,100))
console.log(hunt(80,20))
console.log(hunt(50,50))
console.log(hunt(10,0))
console.log(hunt(0,0))
console.log("============================================exract extension of filename====================================")
filename="sneha.py"
const file = (filename)=> console.log(filename.slice(filename.lastIndexOf(".")));
file(filename)

console.log("===========================================current date====================================")
const date = (date = new Date()) => {
    const days = date.getDay();
    const months = date.getMonth();
    const year = date.getFullYear();
   return `${days} / ${months} / ${year}`
}
console.log(date())
dat = new Date ()
console.log(dat)

console.log("============================================create string with new!====================================")

const add = (str)=> str.indexOf("New!")===0 ? str : `New! ${str}`;
console.log(add("New! offers"))


