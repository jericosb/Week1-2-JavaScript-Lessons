// alert("Hello")

function triggerAlert(){
//    alert("Hello") 
    // let myname = document.getElementById("result").innerHTML = "Hello"
    // let fname = document.getElementById("fname").value
   
    // let result = document.getElementById("result").innerHTML = `<h1>${fname}</h1>`

    // .innerHTML
    // .textContent

    // .value

    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let result = Number(num1) + Number(num2)
    document.getElementById("result").innerHTML = result
}