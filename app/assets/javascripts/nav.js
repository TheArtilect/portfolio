var page = "resume";

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
  

  function colorNav(){
    if (page == "home"){
      $(".n-link").css("color", "white")
    } else if (page == "resume"){
      $(".n-link").css("color", "black")
    }
  }
  
  $("#page-link").on("click", function(){
    page = "home";

  })
  
  $("#resume-link").on("click", function(){
    page = 'resume';

  })
  
  colorNav();
}



