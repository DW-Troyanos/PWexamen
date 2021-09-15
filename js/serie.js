function fibonacci() {

    var n1,n2,nFinal;
    var num = document.getElementById("n").value;

    if (isNaN(num)) {
        alert("Debes ingresar un número");
    } else {
        num = parseFloat(num);
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        nFinal = parseFloat(nFinal);
        for (var i = 2; i < num; ++i)
        {
            nFinal = n1 + n2;
            alert(nFinal);
            n1 = n2;
            n2 = nFinal;
        }
    }
}