function convert() {
    var a =document.getElementById('a').value;
   var result =(a-32)/1.8;
    document.getElementById("celcius").innerHTML =("Celcius: "+result);

}