x=10
y=10
z=10

if (x>y && x>z && y==z){
    result="x is greater than z and y , (y==z)"
    console.log(result)
}
else if(y>x && y>z && x==z){
    result="y is greater than x and z , (x==z)"
    console.log(result)
}
else if(z>x && z>y && x==y){
    result="z is greater than x and y , (x==y)"
    console.log(result)
}
else if(x>y && x>z){
    result="x is greater than y and z"
    console.log(result)
}
else if(y>x && y>z){
    result="y is greater than x and z"
    console.log(result)
}
else if(z>x && z>x){
    result="z is greater than y and x"
    console.log(result)
}
else{
    result="x is equal to y , z"
    console.log(result)
}

