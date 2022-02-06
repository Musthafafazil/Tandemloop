function sumValues(){
 
    let a,b,res;
    a = Number(document.getElementById("num1").value);
    b =Number(document.getElementById("num2").value);
    res = a+b;
    document.getElementById("Result").value=res;
}
function minusValues(){
 
    let a,b,res;
    a = Number(document.getElementById("num1").value);
    b =Number(document.getElementById("num2").value);
    res = a-b;
    document.getElementById("Result").value=res;
}
function mulValues(){
 
    let a,b,res;
    a = Number(document.getElementById("num1").value);
    b =Number(document.getElementById("num2").value);
    res = a*b;
    document.getElementById("Result").value=res;
}
function divValues(){
 
    let a,b,res;
    a = Number(document.getElementById("num1").value);
    b =Number(document.getElementById("num2").value);
    res = a/b;
    document.getElementById("Result").value=res;
}