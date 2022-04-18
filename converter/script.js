function abc(){
    n1=parseInt(document.getElementById("n1").value);
    a=parseInt(n1 * 1.8)+32;
    var b="Farenheit";
    document.getElementById("r1").innerHTML = a;
    return false;
    
}