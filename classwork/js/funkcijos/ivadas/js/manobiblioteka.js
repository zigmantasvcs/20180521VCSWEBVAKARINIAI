function spausdintiMasyva(list){
  for (var i = 0; i < list.length; i++) {
    console.log(i+1+". "+list[i]);
  }
}

function spausdintiMasyvaAtvirksciai(list){
  for (var i = list.length; i <= 0; i++) {
    console.log(i+1+". "+list[i]);
  }
}

function isspausdinkSveikasPasauli(){
  console.log("Sveikas pasauli!");
}

function duokManObuoli(){
  return "Obuolys";
}

function sudetiDuSkaicius(x, y) {
  var suma = x + y;
  return suma;
}

function sudetiDuSkaiciusIrAtspausdinti(x, y) {
  var suma = x + y;
  //console.log(suma);
  //alert(suma);
  document.write(suma);
}
