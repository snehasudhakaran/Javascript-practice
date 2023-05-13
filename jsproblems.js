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

console.log("============================================array functions problems- filter ====================================")

let users =["sneha","trivikraman","moni","praveen","mugesh"]
let value = users.filter((users)=> users.includes("e"));
console.log(value)

let value1 = users.filter((users)=> users.length<6);
console.log(value1)

console.log("============================================array functions problems- find ====================================")
let val = ["sneha","trivikraman","moni","praveen","mugesh"]
let find = val.find((val)=>val.includes("n"))
console.log(find)
console.log("============================================array functions problems- map ====================================")
let valu = [1,2,3,4,5,6,7,7]
let map = valu.map((valu)=>valu%2==0);
console.log(map)
let map1 = valu.map((valu)=>valu*2);
console.log(map1)

// let object = [
//     {name:"fruit" , color:"red"},
//     {name:"orange", color:"orange"}
// ]
// dfruits=[]
// dfruit={}
// let add1 = dfruit.map((objet)=> {objet.calories = 1.2;
//            dfruit = new Object;
//            dfruits ={...dfruit}
//            dfruits.push(dfruit)
// }
// );
// console.log(object)

console.log("============================================array functions problems- every ====================================")
let yes = [4,2,2,4,2,4,6]
let apply = yes.every((yes)=>yes%2==0)
console.log(apply)

console.log("============================================array functions problems- some ====================================")

{
    let yes = [3,5,5,6,1]
    let apply = yes.some((yes)=>yes%2==0)
    console.log(apply)
}
console.log("============================================console types====================================")
console.log("===============console.log===========")
console.log("sneha")
console.log("===============console.error===========")
console.error("mistake")
console.time("sneha")
for(let i=0; i<10; i++){
    console.count()
}
console.timeEnd("sneha")

console.log("===============hoe to find max value in a numbered array===========")
{
    let array=[1,4,2,67,23,23,56,78,1,2,4]
    let max = array.reduce((a,b)=>{return a>b? a: b})
    console.log(max)
}

console.log("===============hoe to find min value in a numbered array===========")
{
    let array=[1,4,2,67,23,23,56,78,1,2,4]
    let min = array.reduce((a,b)=>{return a<b? a: b})
    console.log(min)
}
console.log("===============hoe to find average number in a numbered array===========")
{
    let array=[1,2,3,4,5]
    let length = array.length
    let sum = array.reduce((a,b)=>{return a+b})
    let average = sum/length
    console.log(average)
}
console.log("===============hoe to covert first character to uppercase  in a string array===========")
{
    let string=["sneha","moni","vikram"]
    let up =[]
    for (let i of string){
        let days = i.charAt(0).toUpperCase()+i.substring(1);
        up.push(days)
    }
    console.log(up)
}
console.log("===============how to covert string to uppercase  in a string array===========")
{
    let string=["sneha","moni","vikram"]
    let up =[]
    for (let i of string){
        let days = i.toUpperCase()
        up.push(days)
    }
    console.log(up)
}

console.log("===============how to make sentence out of a given array===========")
{
    let string=["sneha","is","a","girl"]
    let join = string.join(' ')
    console.log(join)
}

console.log("=======================practice===========")
{
    a=5/0
    console.log(a)
    console.log(Math.sqrt(-1))
    console.log(typeof(a))
    amount = 1000
    console.log("your bill amount is",amount)
}
console.log("==================bitwise operator=====================")
a=100
console.log(a>50 ^a%10==0)
console.log(a>50 |a%10==0)
console.log(a>50 &a%10==0)
console.log(~a)
b=-101
console.log(~b)
a=2
console.log(a<<1)
console.log(a>>>2)

console.log("========================how to check if an array contains any element of another array?=========================")
{
    const a =[1,2,3,4,5]
    const b =[8,6,7]
    let c = a.some((ele)=>b.includes(ele))
    console.log(c)
}
console.log("========================given two strings, how can you check if the strings are anagram=========================")
{
    const a = "mary"
    const b ="army"
      
    let c= a.split("").sort().join("")
    let d= b.split("").sort().join("")
    if (c===d){
        console.log("given strings are anagram")
    }
    else{
        console.log("it's not a anagram")
    }
}
console.log("========================how can you extract a few fields from the given json object and form a new array?=========================")
{
    const input ={
        student : [
            {name:"sneha",id:4, email:"sneha@gmail.com"},
            {name:"vikram",id:5,email:"vikram@gmail.com"}
        ]
    }
    // const extract = input.student.map((item)=>{return item.name})
    const extract = input.student.map((item)=>item.name)
    console.log(extract)
    const ex = input.student.map((item)=>{
        let sub ={
            name:item.name,
            id : item.id,
            email:item.email
        }
        return sub
    })
    console.log(ex)
}
console.log("========================fiter a given object based on certain conditions and retuen the corresponding object=========================")
{
    const input={
      students:[
        {name:"sneha",id:3,email:"sneha@gmail.com"},
        {name:"vikram",id:4, email:"vikram@gmail.com"}
      ]
    }
    const filter = input.students.filter((item)=>{return item.name.length<6 ? item :""})
    console.log(filter)
}
console.log("=========================how to check if the variable passed is an array or not=====================================")
{
    function arraycheck(array){
        if (Array.isArray(array)){
            console.log("yes it is array")
        }
        else{
            console.log("nope")
        }
    }
    arraycheck([1,1,2,3,4])
    arraycheck(3)
}


