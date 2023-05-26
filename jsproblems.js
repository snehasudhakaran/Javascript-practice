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
console.log("=========================given array of strings, reverse each word in the sentence===========================")
{
    const sneha ="sneha sudhakaran is a girl";
    var rever = sneha.split("").reverse().join("");
    console.log(rever)
}
console.log("=========================What is IIFS immediately invoked function expressions===========================")
{
    // function func(){
    //     console.log("sneha")
    // }
    // func()

    function func(){
        console.log("sneha")
    }
    func();


    (function fu(){
        console.log("Ssss")
    })();
}
function func(){
        console.log("sneha")
    }
    func();
console.log("=========================How to empty an array?===========================")
{
    let array=[1,23,4,5,6]
     
    // array=[] first method
    // array.length=0 second method
    // while(array.length>0){
    //     array.pop()
    // } third method

    // array.splice(0,array.length); fourth method

    console.log(array)
}
console.log("=========================Write a function to check if a given string is palindrome or not?===========================")
{
   let pa="Malayalam"
   vas =pa.toLowerCase()
   pa =pa.toLowerCase().split("").reverse().join("")
   console.log(pa)
   if (pa==vas){
    console.log("true")
   }
   else{
    console.log("false")
   }
}
console.log("=====================how can you combine two arrays into a thired array using spread operator==========================")
{
    let f =[1,2,3,4,5]
    let s =[2,4,5]
    let t = [...f,...s]
    console.log(t)
}
console.log("==========================how do you sort and reverse an array without changing the original array?")
{
    const array=[10,20,30,60,40,50,60]
    const copyy = array.slice().reverse()
    const copy = array.sort(function(a,b){return a-b}).reverse()
    console.log(copy)
    console.log(copyy)
}
console.log("=======================how can we replace an element at a specific index in an array?========================")
{
    const array = [10,20,30,40];
    const ele = 50;
    const index =2;
    const copy = [...array.slice(0,2),ele,...array.slice(index+1)];
    console.log(copy);
}
console.log("=======================how can we insert an element at a specific index in an array?========================")
{
    const array = [10,20,30,50,60,70];
    const ele= 40;
    const index=3;
    const copy = [...array.slice(0,index),ele,...array.slice(index)]
    console.log(copy)
}
console.log("=======================how can we delete an element at a specific index in an array?========================")
{
    const array = [10,20,30,50,60,70];
    const index=3;
    const copy = [...array.slice(0,index),...array.slice(index+1)]
    console.log(copy)
}
console.log("=======================how can we delete an element at a specific element in an array?========================")
{
    const array = [10,20,30,50,60,70];
    const ele= 50;
    const copy = array.filter((item)=>item!==ele)
    console.log(copy)
}

console.log("------------------------------if else---------------------------------")
x=3;
if (x>=16){
    console.log("eligible")
}
else if (x>=14){
    console.log("almost there! wait for one year")
}
else{
    console.log("no")
}


let varr="sneha"
console.log(`my name ${varr}`)

coffee = 5;
bagets = 3;
soup=9;
cost = coffee +(2*bagets)+soup
tax=cost*10/100
console.log(cost+tax)
console.log("------------------------------how can we clone an object?---------------------------------")
{
    const obj ={
        id:3,
        name:"sneha",
        age:21,
        degree:"btech"
    }
    const obj1 ={...obj}
    obj["name"]="vikram"
    console.log(obj)
    console.log(obj1)

    const obj2 =Object.assign({},obj)
    obj["name"]="sneha"
    console.log(obj)
    console.log(obj2)
}
console.log("------------------------------how to add an element at the beginning of array?---------------------------------")
{
    const array =[1,2,3,4,5,6,7,8]
    const array1 =[9,...array]
    console.log(array1)
    array1.splice(0,0,10)
    console.log(array1)
    array1.unshift(11)
    console.log(array1)
}
console.log("------------------------------how to remove an element at the end of array?---------------------------------")
{
    const array =[1,2,3,4,5,6,7,8]
    const array1 =array.slice(0,-1)
    console.log(array1)
    array1.pop()
    console.log(array1)
}
console.log("------------------------------how to split a sentence into array?---------------------------------")
{
    const array ="1 2 3 4 5 6 7 8"
    const array1 = array.split(" ")
    console.log(array1)
}
console.log("------------------------------how can you replace an existing element in an object?---------------------------------")
{
    const obj = {
        id:10,
        name:"sneha",
    }
    const obj1 ={...obj,name:"vikram"}
    console.log(obj)
    console.log(obj1)
}
console.log("--------------------------------quard operator--------------------------------------")
{
    const guard = NaN && "hello"
    console.log(guard)

    const guard1 = "hello" && 6;
    console.log(guard1)
}
console.log("------------------------Default operator-----------------------")
{
    const default1 = "hello" || NaN;
    console.log(default1)
    const dfault = undefined || NaN;
    console.log(dfault)
}
console.log("----------------------for each----------------------------")
{
    let array=[1,2,3,4,5]
   
    array.forEach(myfunction)
    function myfunction(array){
    console.log(array*2)
    }
}
console.log("----------------------random sort----------------------------")
{
    let array = [1,2,3,4,5,6,7,8];
    console.log(Math.max.apply(null,array))
    console.log(Math.min.apply(null,array))
    let array1 = array.sort(function(){return 0.5 - Math.random()})
    console.log(array1)
}

console.log("-----------------------------sort a object--------------------------")
{
    const obj =[
        {name:"sneha",
        age:21},
        {name:"vikram",age:10}

    ]
    const sortt = obj.sort(function(a,b){return a.age - b.age})
    console.log(sortt)
}
console.log("----------------------------array keys and entries------------------------")
{
    const array = ["sneha","mugesh","doss","jegan"]
    const keys = array.keys()
    const entries = array.entries()
    for (let k of keys){
        console.log(k)
    }
    for (let e of entries){
        console.log(e)
    }
}
console.log("----------------if else practice----------------------------------------")
{
    hour = 10
    name="sneha"
    if (hour>=6 && hour<12){
        console.log(`good morning ${name}`)
    }
    else if (hour >=12 && hour<17){
        console.log(`good afternoon ${name}`)
    }
    else{
        console.log(`good night ${name}`)
    }

    age=65
    isHoliday =false
    if((age<=6 || age>=65)&& isHoliday){
        console.log("discount")
    }
    else{
        console.log("no discount")
    }
}

console.log("------------------random-------------------")
{
    const random = Math.random();
    let result="";
    guess="heads"
    if (random<1/5){
        result ="heads";
    }
    else{
        result="tails";
    }

    // if (result===guess){
    //     console.log("you won")
    // }
    // else{
    //     console.log("you lost")
    // }
    const ter =(result===guess) ? "won" : "lost";
    console.log(ter)
}
console.log("------------------------------How can add an element to an object? ------------------")
{
    const obj={
        name:"sneha",
        age:20,
        id:1
    }
    obj["clg"]="Dr.M.G.R"
    const array ={...obj,degree:"btech"}
    console.log(array)
}

console.log("--------------------------remove first element array--------------------")
{
    const array=[1,2,3,4,5];
    array.shift(0)
    const array1=array.slice(1);
    console.log(array1)
}
console.log("--------------------------how can you combine two objects?--------------------")
{
    const one={
        name:"sneha"
    }
    const two={
        name:"vikram",
        age:21
    }
    const three={...one,...two}
    console.log(three)
}
console.log("----------------------write a method which takes x numbers of parameters-----------------------")
function get(...b){
    console.log(...b)
}
get(34,67,90,56)

console.log("----------------------convert a given number into exact decimal points to right side---------------------")
{
    n=234.567891
    console.log(n.toFixed(1))
}

console.log("-------------------------how can you return a character from a string at a specific index?--------------------------")
{
    const str="welcome to my class"
    const letter =str.charAt(0).toUpperCase()
    console.log(letter+str.slice(1))
}
console.log("------------------explain weak set with example = wekset object allows collection unique key , but it doesn't allow keys of primitive values-------------------")

{
    const obj={
        name:"sneha",
        age:9
    }
    const obj1 = new WeakSet([obj])
        console.log(obj1)
}
console.log("------------------write a add method using js curry concept?------------------")
{
    function number(x){
        let sum=x;
        function result(y){
            sum+=y;
            return result;
        }

            result.valueOf=function(){
                return sum;
            }
            return result;

        }
        console.log(number(3)(4)(5).valueOf());

}
console.log("-------------------------curry function----------------------")
{
    function mul(a){
         let mul=a;
         function res(b){
              mul*=b;
              return res;
         }
         res.valueOf=function(){
              return mul;
         }
         return res;
    }
    console.log(mul(2)(2)(2).valueOf())
}
console.log("--------------------------how to replace a given string in a given array----------------------")
{
    let arry=["sneha","sudhakaran"]
    let arr = arry.map((val)=>val.replace('sudhakaran',"vikram"))
    console.log(arr)
}
console.log("-------------------------------how to create an array out of a sentence--------------------------")
{
    const str="sneha is a girl who loves herself"
    const str1=str.split(" ")
    console.log(str1)
}

console.log("-----------------------scope concept-----------------")
{
    function fruit(){
        console.log(name)
        // console.log(age)
        var name="sneha"
        // let age=21
    }
    fruit()
}

// {
//     for (let i=0; i<3; i++){
//        setTimeout(()=>console.log(i),1)
//     }
// }
// {
//     for (var i=0; i<3; i++){
//        setTimeout(()=>console.log(i),1)
//     }
// }

{
    // console.warn(+true);
            //  console.warn(+true);
            // console.warn(typeof(+true));

            console.log(+true)
            console.log(typeof(+true));

            console.log(!"anil")
            console.log(+"anil")
            console.log(typeof(!"anil"))
            console.log(typeof(+"anil"))
}

{
    let data="size";
    let obj ={
        size:"small"
    }
    console.log(obj[data]);
    console.log(obj["size"]);
    console.log(obj.size);
    console.log(obj.data)
}

{
    var x;
    var x=10;
    console.log(x);
}

{
//     var x;
//     // let x=10;
//     console.log(x)
}

{
    let a=3;
    let b = new number(3)
    console.log(a==b)
    console.log(a===b)
}
{
    let name;
    nmee={}
    console.log(name)
}
{
    // let w1;
    function fruit(){
        console.log("woof",name)
    }
    fruit.name="vikram"
    // fruit.weird="weird"
    fruit()
}
{
    let number=0
    console.log(number++);
    console.log(++number);
    console.log(number)
}
{
    function arr(...args){
        console.log(typeof(args))
    }
    arr()
}
{
    function get(){
        "user strict"
        age=21;
        console.log(age);
    }
    get()
}
{
    console.log(eval('10*10+5'))
}

{
    const d= new Date()
    console.log(d)
    console.log(d.toDateString())
    console.log(d.getMonth())
    console.log(d.getFullYear())
    console.log(d.getDay()+1)
}

{
    const user=[
        {id:1,name:"sneha",age:21},
        {id:2,name:"vikram",age:22}
    ]

    const names=user.map((val)=>val.name)
    console.log(names)
}

console.log("-----------------------duplicate----------------")

{
    const array=[1,34,2,4,2,8,9,9]
    const array1=array.filter((val,i,arr)=>arr.indexOf(val)==i)
    console.log(array1)
}
console.log("---------------------reverse---------------")
{
  str1="sneha sudhakaran"

  reverse=""
  for (let i of str1){
    reverse=i+reverse
  }
  console.log(reverse)
}

console.log("------------------------------------prime numbers----------------")
{
    let num=7
    let prime=""
    for (let i=2; i<num; i++){
        if (num%i==0){
           prime="not prime"
          break
        }
        else{
            prime="it's a prime"
        }
    }
    console.log(prime)
}

console.log("---------------------------palindrome-----------------------------")
{
    const str="malayalamq"

    const str1=str.split("").reverse().join("");
    if (str===str1){
        console.log("yes it's palidrome ")
    }
    else{
        console.log("not palidrome")
    }
}

console.log("---------------------substring-----------------------------")
{
    const str="sneha sudhakaran"
    console.log(str.includes("sneha6"))
}

console.log("-------------------------multiplication---------------")
{
a=[[1,2],[1,2]]
b=[[4,5],[8,9]]
c=[[0,0],[0,0]]

for (let i=0; i<a.length; i++){
    for (let j=0; j<b[0].length; j++){
        for (let k=0; k<b.length; k++){
             c[i][j]+=a[i][k]*b[k][j]
        }
    }
}

console.log(c)
}

console.log("-------------------------object------------------------------")
{
    const not={
        name:"sneha",
    }
    not["college-name"]="mgr"
    console.log(not["college-name"])
}
console.log("---------------------JSON---------")
{
    function ssvs(){

    }
    console.log(typeof ssvs)

    const obj ={
        name:"sneha",
        married:null
    }
    console.log(JSON.stringify(obj))
    n=JSON.stringify(obj)
    console.log(JSON.parse(n))
}

console.log("-----------------------------------practice----------------------------------------")
{
    function greet(name="there"){
        console.log("hi hello",name)
    }
    greet("sneha")
    greet()

    function fren(n){
        fr=(n*9/5)+32
        return fr
    }
    console.log(fren(25))


    function c(n){
        c=(n-32)*5/9
        return c
    }

    console.log(c(86))
console.log("---------------------")
    function temperature(value,unit){
        if (unit=="f"){
            c= (value-32)*5/9
        }
        else{
            c=(value*9/5)+32
        }
        return c
    }
    console.log(temperature(25,"c"))
    console.log(temperature(86,"f"))
}

console.log("-------------------find a element----------------")

{
    const array=[1,3,5,6,6,3,1]
    const array1 = array.filter((val,i,array)=>array.indexOf(val)!=i);
    console.log(array1)
    const array2 = array.filter((val,i,array)=>array.indexOf(val)==i);
    console.log(array2)

    for (i of array2){
        for (j of array1){
            if(i===j){
                console.log(i , array2.indexOf(i))
            }
           
        }
    }
    array2.splice(0,1)
    array2.splice(0,1)
    array2.splice(1,1)
   console.log(array2)
    

    // const array=[1,34,2,4,2,8,9,9]
    // const array1=array.filter((val,i,arr)=>arr.indexOf(val)==i)
    // console.log(array1)
}
console.log("----------------------------fabonacci series------------------------------")

{
   function fib(n){
    let a=0
    let b=1

    if (n==a){
        console.log(a)
    }
    else if (n==b){
        console.log(a)
        console.log(b)
    }
    else{
        console.log(a)
        console.log(b)
        for (i=2; i<n; i++){
            c=a+b
            a=b
            b=c
            console.log(c)
        }
    }
   }

   fib(7)
}

console.log("--------------------------factorial----------------------")
{
    function fac(n){
        if (n==0){
            return 1
            
        }
        else{
            return n*fac(n-1)
        }
    }
    console.log(fac(5))
    console.log(fac(1))
}

console.log("------------------------------empty array------------------")
{
    let a=[1,2,3,4,5]
    a=[]
    console.log(a)

    let aa=[1,2,3,4,5];
    while(aa.length){
        aa.pop()
    }
    console.log(aa)

    let aaa=[1,2,3,4,5];
    aaa.splice(0,aaa.length)
    console.log(aaa)
}
{
    const a=Array.of(10,20)
    console.log(a)

    const aa= new Array(10)
    console.log(aa)
}

console.log("------------------to compare-----------------------")
{
    var arr1=[2,9,6,8,4,7]
    var arr2=[4,8,6,9,2,8]

    const comparArr= (arr1.length == arr2.length) && arr1.every((val)=>{
        if (arr2.indexOf(val)>-1){
            return (val=[arr2.indexOf(val)])
        }
    })
    console.log(comparArr)
}

console.log("-----------------------how to find intersection----------------")
{
    let arr1=[2,9,6,8,4,4,4];
    let arr2 =[4,8,6,9,12];
    const inter=arr1.filter((ele)=> arr2.includes(ele));
    const unqiue = inter.filter((val,i,arr)=>arr.indexOf(val)==i)
    console.log(unqiue)
}

console.log("-------------------find the element-----------------------")
{
    let arr1=[3,5,4,2,4,5,3];
    const unqiue = arr1.filter((val,i, arr)=>arr.indexOf(val)!=i);
    const value = arr1.filter((val,i , arr)=>{
        if (unqiue.indexOf(val)===-1){
            return val
        }
        
    })
    console.log(value)
}

console.log("-----------------------how to find union of two arrays set in javascript--------------------------------")
{
    var arr1=[1,2,3,5,4,6,3];
    var arr2=[3,4,5,16,9,2,4];

    var union =[...arr1, ...arr2]
    console.log([...new Set (union)])
}

console.log("-----------------------convert c to f and f to c-----------------")
{

function temperatue(value,unit){
    if (unit=="f"){
        c=(value - 32)*5/9
        u ="c"
        return `${c} c`
    }else{
        c= (value*9/5)+32
        u="f"
        return `${c} f`
    }
    
}

console.log(temperature(25,"c"))
console.log(temperature(86,"f"))


// 
}

console.log("------------------------convert kilometer into miles----------------------------")
{    
    kilometer=200
    factor=0.621371
    miles=kilometer*factor
    console.log(miles)
}
console.log("-----------------------practice--------------------------------")
{
    console.log("hello".length)
    console.log((3).toString())
    // console.log(null.toString())
    // console.log(undefined.toString())
}
console.log("------------------------object-------------------")

{
obj ={
    name:"sneha",
    age:21
}
obj1 ={
    name:"sneha",
    age:21
}

obj2 =obj1
console.log(obj===obj1) //it doesn't compare values in object
console.log(obj2===obj1) // it checks the reference
}

console.log("------------------------destructing---------------")

{
    const odj ={
        message:"hi"
    }

    const {message}=odj
    console.log(message)

    const obj = {
        message,
        method(){
            console.log("hiiiiii")
        }
    }
    console.log(obj.message)
    obj.method()
}

const fruits = new Map([
    ["sunday",0],
    ["monday",1]
])
console.log(fruits)
fruits.set("tuesday",2)
console.log(fruits)
console.log(fruits.get("monday"))

for (let x of fruits.entries()){
    console.log(x)
}

const sett=new Set([10,45,78])
console.log(sett)
for (let x of sett.values()){
    console.log(x)
}

{
    array2=[67,87,34,89]
    console.log(array2 instanceof String)
}
{
    const football={
        baskball:2095,
    }
    console.log(football)
    football.baskball = 2095+500
    console.log(football)
    football["delivery-time"]=3
    console.log(football)
}
{
    product1={
        name:"phone",
        price:25000
    }
    product2={
        name:"tv",
        price:25000
    }
    function compare(product1,product2){
          if (product1.price>product1.price){
             console.log("product2 is less expensive")
          }
          else if (product1.price<product2.price){
            console.log("product1 is less expensive")
          }
          else{
            console.log("product2 price is equal to product1")
          }

    }
    compare(product1,product2)
}
{
    const str="GOOD Morning"
    console.log(str.toLowerCase())

    text="test"
    for (let i=0; i<10; i++){
        text+="test"
    }
    console.log(text)
}

console.log("--------------------practice----------------------")
{
    const array=[2,4,52,3,1,2,1,3,2,3,5,6]
    array.length=4
    console.log(array)

    const array1=[2,4,52,3,1,2,1,3,2,3,5,6]
    const sum=array1.reduce((x,y)=>x+y)
    console.log(sum)

    const duplicate =array1.filter((val, i, arr)=>arr.indexOf(val)==i);
    console.log(duplicate)

    console.log([...new Set(array1)])

    let x=10
    x=(x++,x)
    console.log(x)
    
    
}
{
    let x=20
    let y=30
    temp=x
    x=y
    y=temp
    console.log(x,y)

}

{
    // let a=10
    // let b=40
    // [a,b]=[b,a]
    // console.log(a,b)
}