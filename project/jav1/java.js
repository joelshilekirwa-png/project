function message(){ let num1 =number(document.getElementById("num1").value);
    let num2=number(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("un").innerHTML= result;
    document.getElementById('un').style.backgroundColor("red");

}