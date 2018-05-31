var skaicius = 100;

if(skaicius > 10 || skaicius < 1){
  alert("Netinkamas skaicius");
}
else{
    switch (skaicius) {
      case 10:
        alert("Puikiai");
        break;
      case 9:
        alert("Labai gerai");
        break;
      case 8:
        alert("Gerai");
        break;
      case 7:
        alert("Patenkinamai");
        break;
      default:
        alert("Reikėtų pakartoti!");
    }
}

// vienas budas
// if(skaicius >= 1 && skaicius <=10){
//   switch (skaicius) {
//     case 10:
//       alert("Puikiai");
//       break;
//     case 9:
//       alert("Labai gerai");
//       break;
//     case 8:
//       alert("Gerai");
//       break;
//     case 7:
//       alert("Patenkinamai");
//       break;
//     default:
//       alert("Reikėtų pakartoti!");
//   }
// }
// else{
//   alert("Netinkamas skaicius");
// }
