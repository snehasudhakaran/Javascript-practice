array =["sneha","sudhakaran","mugesh"]
for (let i of array){
    console.log(i)
}
object ={
    name:"sneha",
    age:21,
    Btech:"BME"
}
for (let i in object){
    console.log(i,":",object[i])
}

object ={
    name : null,
    age : null,
    btech :null
}
object.name="sneha"
object.name="mugesh"
object.details ={
    college :"Dr MGR"
}
object.details.graph ="yes"
// object.deta.graph="no"
console.log(object)
let name = "btech"
console.log(object[name])

//==========================================
//arrays of object
let array1 =[]
let object1 ={
    Name :null,
    id :null,
    register:null
}
object1 = new Object;
object1.Name="sneha"
object1.id=123
object1.register=20121938
array1.push(object1)
console.log(array1)

object1 = new Object;
object1.Name="monisha"
object1.id=13
object1.register=201
array1.push(object1)
console.log(array1)

object1 = new Object;
object1.Name="sandhya"
object1.id=45
object1.register=2345
array1.push(object1)
console.log(object1)

console.log("====================add value =============================")
let arr=[]
arr.push(3)
arr.push(4)
arr.push(3)
arr.push(3)
console.log(arr)

console.log("==================== deep copy =============================")
let arr1 = []
for (let i=0; i<arr.length; i++){
    arr1.push(arr[i])
}

let arr2 =[...arr]
arr.push(7)
console.log("arr2",arr2)
console.log("arr1",arr1)
console.log("arr",arr)

console.log("==================== shallow copy =============================")
let arr3=arr
arr.push(8)
console.log("arr3",arr3)
console.log("arr",arr)

console.log("==================== typeof and type conversion =============================")

console.log(typeof("sneha"))
let s=67
console.log(typeof(String(s)))

let ss=s.toString()
console.log(typeof(ss))

console.log("==================== this keyword =============================")

const pers={
    fName:"sneha",
    lName:"sudhakaran",
    age:21,
    fullName: function(){
        return this.fName+" "+this.lName;
    }
}
console.log(pers.fullName())