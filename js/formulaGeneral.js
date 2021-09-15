function formulaGeneral() {

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var x1,x2;

    if (isNaN(a)||isNaN(b)||isNaN(c)) {
        alert("Debes ingresar números");
    } else {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    x1 = parseFloat(x1);
    x2 = parseFloat(x2);

    x1 = (-b+(Math.sqrt((Math.pow(b,2))-4*a*c)))/(2*a);
    x2 = (-b-(Math.sqrt((Math.pow(b,2))-4*a*c)))/(2*a);
    alert("x1= " + x1);
    alert("x2= " + x2);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(x1);
    console.log(x2);
    console.log(typeof(x1));
    }
}

        


