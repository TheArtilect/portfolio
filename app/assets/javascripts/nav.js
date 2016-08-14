var page = "home";

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
  
  function dropDowns(){
    if (page == "home"){
     $(".resume-drop").css("display", "none");
     $(".home-drop").show();
    } else if (page == 'resume'){
      $(".home-drop").css("display", "none");
      $(".resume-drop").show();
    }
    
  }
  
  
  $("#page-link").on("click", function(){
    page = "home";
  })
  
  $("#resume-link").on("click", function(){
    page = 'resume';
  })
  
  colorNav();
  dropDowns();
}



