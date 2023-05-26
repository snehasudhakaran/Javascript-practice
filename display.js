


function checkme(){
    let check = document.getElementById("check");
    let p =document.getElementById("para")
    if (check.checked==true){
         p.style.display="block";
    }
    else{
        p.style.display="none";
    }
}

let ch = document.querySelector("#checku")

ch.addEventListener("click", function (){
    let text= document.querySelector("#text")
    if (ch.checked==true){
    text.style.display="none";
    }else{
        text.style.display="block";
    }
})

const input = document.querySelector("#email")
const valid= document.querySelector("#valid")
const invalid= document.querySelector("#invalid")
input.addEventListener("keyup",function(){
    let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (input.value==""){
        input.style.border="1px solid red"
        invalid.style.display="block";
        invalid.style.color="red"
    }
    else if (input.value.match(pattern)){
        input.style.border="1px solid green";
        invalid.style.display="block";
        invalid.style.color="green"
    }
    else{input.style.border="1px solid red";
    invalid.style.display="block";
    invalid.style.color="red"}
})