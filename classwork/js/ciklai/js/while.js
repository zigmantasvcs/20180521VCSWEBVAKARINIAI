// var skaicius = 1;
// while (skaicius <= 100) {
//   if(skaicius != 50){
//     console.log(skaicius + " Begalinis");
//   }
//   skaicius = skaicius + 1;
// }

// spausdinti lyginius skaicius
var skaicius = 1;
while (skaicius <= 100) {
  var liekana = skaicius%2;
  if(liekana == 0){
    console.log(skaicius + " lyginis");
  }
  else{
    console.log(skaicius + " nelyginis");
  }
  skaicius = skaicius + 1;
}
