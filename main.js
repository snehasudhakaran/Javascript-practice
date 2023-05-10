let x=2;
console.log(x)
x="sneha"
console.log(x)
let array=[2,3,4,5,6]
console.log(array)
let object={
    name:"sneha",
    age :"21",
    degree:"Btech"
}
console.log(array)
console.log(object)
console.log(typeof(x))

//===========================================
//type casting
console.log("result :"+(2+2))

//=====================================
//declaration
const xy=1;
// xy=1
var xj=4
{
    console.log(xj)
    var xj=9
    console.log(xj)
}
console.log(xj)

console.log(x)

let v=8;
v=9;
console.log(v)

//====================

console.log(null==undefined)
console.log(null===undefined)
console.log(null!=undefined)
console.log(null!==undefined)
console.log(2=="2")
console.log(2==="2")
x=3
y=8
z=5
console.log(x>y&&y>z)
console.log(x>y||y>z)
console.log(!x)

//=============================
//Decision making statement
//syntax if(){} else if (){} else{}
x=3
y=8
z=15
if (x>y && x>z){
    console.log("x is greater than y and z")
}
else if(y>x&&y>z){
    console.log("Y is greater than x and z")
}
else{
    console.log("z is greater than x and y")
}

//================
//switch
// syntax   switch(){
//     case "":
//         break;
//     default:
//         break;    
// }

x="sudhakaran"

switch(x){
    case "sneha":
        console.log("hello sneha, how can I help you ?")
        break;
    case "sudhakaran":
        console.log("hello sudhakaran, how can I help you ?")
        break;
    default:
        console.log(x," user doesn't exist")    
}

//============================================================
// conditional operator or ternary operator

a=4;
value = (a%2!=0) ? "Odd":"Even";
console.log(value)

//nested
value =(a%2==0) ? ((a%4==0) ? "4":"2") :"not 2";
console.log(value)

a=3
add =(a%5==0)? ((a%10==0)?"divisible by 5 and 10":"divisible by 5") :"not divisible by 5 and 10";
console.log(add)

//===========================================================
//for loop

for(let i=0;i<5;i++){
    console.log(i)
}
let j=0;
while(j<5){
    console.log(j)
    j++;
}
console.log("=========================================")
let c=0;
do{
    c++;
    console.log(c)
}while(c<5);

console.log("=========================================")

//array
array1=["sneha","sudhakaran"]
console.log("result :"+array1)
console.log("result :",array1)

obj={
    name:"sneha",
    age:34
}
console.log("result :"+obj)
console.log("result :",obj)

