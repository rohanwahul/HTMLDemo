function add() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    var sum = parseInt(num1) + parseInt(num2);

    //console.log(sum);

    document.getElementById("n3").value = sum;

}

function mul() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    var mul = parseInt(num1) * parseInt(num2);

   // console.log(mul);

    document.getElementById("n3").value = mul;

}


function div() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    var div = parseInt(num1) / parseInt(num2);
    
   // console.log(div);

    document.getElementById("n3").value = div;

}

