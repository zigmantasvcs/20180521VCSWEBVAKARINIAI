function displayModal(elementas) {
  var imgNaujas = $("<img>");
  imgNaujas.attr("src", elementas.attr("src"));
  imgNaujas.addClass("bla");

  $(".modal .box1 .content").append(imgNaujas);
  $(".modal").css({"opacity":"0"});
  $(".modal").css({"display":"flex"});
  $(".modal").animate({"opacity": 1}, 500, function(){

  })
}

function hideModal() {
  $(".modal .box1 .content").empty();
  $(".modal").css({"display":"none"});
}
