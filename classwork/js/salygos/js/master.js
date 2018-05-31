var skaicius = 10;

// if(skaicius > 10){
//   alert("skaicius yra daugiau uz 10");
// }
// else{
//   alert("skaicius yra mazesnis uz 10");
// }

// skaicius tarp 5 ir 10 (5 included 10 not included)




if(skaicius == 5 || skaicius == 10){
  console.log("skaicius yra " + skaicius);
  alert("skaicius yra " + skaicius, "PRANESIMAS");
}


if(skaicius >= 5 && skaicius < 10){
  var message = "skaicius " + skaicius + " yra tarp 5 ir 10";
  alert(message);
}

if(!skaicius){
  alert("Skaicius nera apibreztas");
}

if(skaicius > 10){
  alert("skaicius yra daugiau uz 10");
}
else if(skaicius == 10){
  alert("skaicius yra lygus 10");
}
else{
  alert("skaicius yra mazesnis uz 10");
}
