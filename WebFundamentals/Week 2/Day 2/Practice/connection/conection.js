var namee = document.querySelector(".name")
console.log(namee.innerText);
function change() {
    namee.innerText="Brahim Ahmed"
}
var user1=document.querySelector("#n1")
var check1=document.querySelector("#c1")
var x1=document.querySelector("#del")
var x=document.querySelector("#del1")

var img1=document.querySelector("#im1")

var user=document.querySelector("#n")
var check=document.querySelector("#c")
var img=document.querySelector("#im")
var req=document.querySelector(".r")
var con=document.querySelector(".y")


console.log(img1);
var counter1=2
var counter2=470
// console.log(user1,check1);
function delet(elm) {
    counter1--
    elm.remove()
    user1.remove()
    check1.remove()
    img1.src="https://cdn-icons-png.flaticon.com/512/3221/3221803.png"
    req.innerText=counter1+" connection request"
   
}
function delet2(elm) {
    counter1--

    elm.remove()
    user.remove()
    check.remove()
    img.src="https://cdn-icons-png.flaticon.com/512/3221/3221803.png"
    req.innerText=counter1+" connection request"

   
}
function acc1(element) {
    counter1--
    counter2++
    user1.remove()
    del1.remove()
    img1.remove()
    element.src="https://cdn-icons-png.flaticon.com/512/2550/2550322.png"   
    req.innerText=counter1+" connection request"
    con.innerText=counter2+ " your connections"
    
}
function acc(element) {
    counter1--
    counter2++

    user.remove()
    x1.remove()
    img.remove()
    element.src="https://cdn-icons-png.flaticon.com/512/2550/2550322.png"   
    req.innerText=counter1+" connection request"
    con.innerText=counter2+ " your connections"


    
}