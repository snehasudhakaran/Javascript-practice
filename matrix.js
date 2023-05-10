// let mat=[
//     [8,5,3],
//     [2,6,1],
//     [7,9,4]
// ]

// let n=3
// function sort(mat,n){
//     for (let i=0; i<n; i++){
//         sneha = mat[i].sort(function(a,b) {return a-b;});
//         // console.log("sort by row",sneha)
//     }
// }
// // sort(mat,n)
// function transpose(mat,n){
//     for (let i=0; i<n; i++){
//         for (let j=i+1; j<n; j++){
//             let temp=mat[i][j];
//             mat[i][j]=mat[j][i];
//             mat[j][i]=temp;
//         }
//     }
// }
// function sortMatRowAndColWise(mat,n){
//     sort(mat,n);
//     transpose(mat,n);
//     sort(mat,n);
//     transpose(mat,n);
// }
// function printmat(mat,n){
//     for (let i=0; i<n; i++){
//         for (let j=0; j<n; j++){
//             console.log(mat[i][j]);
//         }
//     }
// }
// printmat(mat,n)
// sortMatRowAndColWise(mat,n)

//input 
//[1,2,3,4]
//[5,6,7,8]
//[9,2,3,4]

//output
//[15,10,13,16]
//column 1 : 1+5+9 =15 
//column 2 : 2+6+2 =10
//column 3 : 3+7+3 =13 
//column 4 : 4+8+4 =16 

function addition(a){
    let result=[]
    for (let col=0; col < a[0].length; col++){
        let sum=0;
        for (let row=0; row<a.length; row++){
            sum += a[row][col]
        }
        result.push(sum)
      }
    console.log(result)
}
addition([
       [1,2,3,4],
       [5,6,7,8],
       [9,2,3,4] 
    ])

// const sumcol =(a)=>{
//     let res=[]
//     for (let i=0; i < a[0].length; i++){
//         let sum=0;
//         for(let j=0; j < a.length; j++){
//             sum+= a[j][i]
//         }
//         res.push(sum)
//     }
//     console.log(res)
// }
// sumcol([
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,2,3,4] 
// ])
let sum=[
    [1,2,3,5],
    [6,5,7,3],
    [8,8,4,5]
];
function def(sum){
    let result=[];
    for (let i=0; i<sum[0].length; i++){
        let su=0;
        for (let j=0; j<sum.length; j++){
            su+=sum[j][i]
        }
        result.push(su)
    }
    console.log(result)
}
def(sum
)

let sun1=[]
let obj1={
    name:null,
    mark:null,
}

obj1 =new Object;
obj1.name="David";
obj1.mark=80
sun1.push(obj1)
obj1 =new Object;
obj1.name="Vinoth";
obj1.mark=77
sun1.push(obj1)
obj1 =new Object;
obj1.name="Divya";
obj1.mark=88
sun1.push(obj1)
obj1 =new Object;
obj1.name="Ishitha";
obj1.mark=95
sun1.push(obj1)
obj1 =new Object;
obj1.name="Thomas";
obj1.mark=68
sun1.push(obj1)
console.log(sun1)
let markvalues=[]
for (let i in sun1){
    let sum=0
    markvalues.push(sun1[i].mark)
}
let sm=0
console.log(markvalues.length)
for (let j of markvalues){
    sm=(sm+j)/markvalues.length
}
console.log(sm)
var side1=5;
var side2=6;
var side3=7;
var s= (side1+side2+side3)/2
var area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3))
console.log(area)

function isArray(sum){
    if (toString.call(sum)=="[object Array]"){
        return true;
    }
    else{
        return false;
    }
}
console.log(isArray("sneha"))
let ss =[1,2,3]
console.log(toString.call(ss))
console.log(ss.toString())
console.log(ss.join())
console.log(ss.join("+"))
let varr1=[-3,8,7,6,5,-4]
let min=varr1[0]
let rese=[]
for (let i=0; i<varr1.length; i++){
    if(min>varr1[i]){
        min=varr1[i]
    }
}
console.log(min)


function sort(varr1){
    for (let i=0; i<varr1.length; i++){
        sneha = varr1[i].sort(function(a,b) {return a-b;});
              console.log("sort by row",sneha)
    }
}
sort(varr1)




