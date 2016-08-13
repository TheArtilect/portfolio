
function navIt(){
  var shown = false;
  $("#close-btn").on("click", function(){
    if (shown){
      $(".h-li").css("display", 'none')
      shown = false;
    } else {
      $(".h-li").show();
      shown = true;
    }
  })
}

