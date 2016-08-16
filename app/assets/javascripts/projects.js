var projects = {
  "projects": [{
      "title": "Simon Says",
      "dates": "Jul. 2016",
      "description": "A Simon Says game. First project utilizing audio elements and setTimeout(). (Rails/Heroku)",
      "url": "https://simon-says-ia.herokuapp.com"
    },
    
    {
      "title": "Tic Tac Toe",
      "dates": "Jul. 2016",
      "description": "A tic tac toe game. (github-pages)",
      "url": "https://theartilect.github.io/TickyTacky/"
    },
    
    {
      "title": "Pomodoro Productivity Timer",
      "dates": "Jun. 2016",
      "description": "A timer that can be used to for cooking pomodoro sauce or scheduling productivity.  First project utilizing setInterval(). (Rails/Heroku)",
      "url": "https://pomodoro-timer-ia.herokuapp.com/"
    },
    
    {
      "title": "Javascript Calculator",
      "dates": "Jun. 2016",
      "description": "A fully functional simple calculator. First project utilizing 'this' in js. (github-pages)",
      "url": "https://theartilect.github.io/calculator/"
    }, 
    
    {
      "title": "Twitch-It",
      "dates": "May 2016",
      "description": "For tracking some Twitch streamers.  Utilized Twitch API. (Rails/Heroku)",
      "url": "https://twitch-it.herokuapp.com/"
    }, 
    
    {
      "title": "Wiki-It",
      "dates": "Apr. 2016",
      "description": "For searching and viewing a listing of wikipedia articles.  Utilized Wikipedia API. (Rails/Heroku)",
      "url": "https://wiki-it-ia.herokuapp.com"
      /*
      "url": "https://theartilect.github.io/wiki/"
      */
    }, 
    {
      "title": "Moving Companion",
      "dates": "Apr. 2016",
      "description": "Simple location integrated look up (Google, NYT, Wikipedia). Styling not finished.",
      "url": "http://codepen.io/TheArtilect/full/pbwbbW/"
    }, 
    
    {
      "title": "Local Weather App",
      "dates": "Apr. 2016",
      "description": "For showing local weather.  My first API project.  Utilized OpenWeather API and browser geolocation. (Chrome incompatibility, will recreate with different API in the future).",
      "url": "http://codepen.io/TheArtilect/full/zqPRYR/"
    }, 
    
    {
      "title": "Finance Tracker",
      "dates": "Feb. - Mar. 2016",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course",
      "description": "Ruby on Rails social stocks tracker project built using scaffolding and bootstrap.  Functionality complete, styling in progress. (Rails/Heroku)",
      "url": "https://thawing-plains-40720.herokuapp.com/users/sign_in"
    }, 
    /*
    {
      "title": "Photo App",
      "dates": "Mar. 2016",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course.",
      "description": "Ruby on Rails photo app.  Functionality not finalized, styling in progress. Currently in production (Heroku).",
      "url": "https://dry-retreat-19962.herokuapp.com/"
    }, 
    */
    {
      "title": "Random Quote Generator",
      "dates": "Mar. 2016",
      "description": "A few of my favorite quotes.  My first Javascript project. (Rails/Heroku)",
      "url": "https://rand-quote-gen.herokuapp.com/"
    },
/*
    {
      "title": "Personal Portfolio",
      "dates": "Mar. 2016",
      "description": "A personal portfolio webpage. (Rails/Heroku)",
      "url": "https://ian-agpawa.herokuapp.com/"
    }, 
*/
    
    {
      "title": "Tribute Project",
      "dates": "Feb. 2016",
      "description": "Tribute Project about Hunter S. Thompson.  My first HTML and CSS project. (Rails/Heroku)",
      "url": "https://hunter-s-tribute.herokuapp.com/"
    },

    {
      "title": "AlphaBlog",
      "dates": "Jan. 2016",
      "description": "My first project, a Ruby on Rails blog  built from the ground up.  Functionality finalized, styling and content in progress.  (Rails/Heroku)",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course",
      "url": "https://project-prometheus-alphablog.herokuapp.com/"
    },

  ]
}

var projectStart = '<div class="entry"></div>';
var projectLink = '<h3 class="pj-title"><a class="proj-links" target="_blank" href="%link%">%data%</a></h3>';
var projectInfo = '<p class="description">Description: %data%</p>';
var projectProd = '<p class="description">%data%</p>';
var projectDate = '<p class="date">Date: %data%</p>'


function displayIt() {
  for (project in projects.projects) {
    $("#project-entries").append(projectStart);
    

    var link = projectLink.replace("%link%", projects.projects[project].url);
    var title = link.replace("%data%", projects.projects[project].title);
    $(".entry:last").append(title);


    var description = projectInfo.replace("%data%", projects.projects[project].description);
    $(".entry:last").append(description);
    

    var date = projectDate.replace("%data%", projects.projects[project].dates)
    $(".entry:last").append(date);

  }
}








function displayRes() {
  
  var projectStartRes = '<div class="entry-res"></div>';
  var projectLinkRes = '<h4 class="pj-title-res"><a class="proj-links-res" target="_blank" href="%link%">%data%</a></h4>';
  var projectInfoRes = '<p class="description-res res-p">Description: %data%</p>';
  var projectDateRes = '<p class="date-res">Date: %data%</p>'
    
  for (project in projects.projects) {
    $(".proj-res").append(projectStartRes);
    

    var link = projectLinkRes.replace("%link%", projects.projects[project].url);
    var title = link.replace("%data%", projects.projects[project].title);
    $(".entry-res:last").append(title);


    var description = projectInfoRes.replace("%data%", projects.projects[project].description);
    $(".entry-res:last").append(description);

    var date = projectDateRes.replace("%data%", projects.projects[project].dates)
    $(".entry-res:last").append(date);

  }
}



function displayAllProj(){
  navIt();
  displayIt();
  displayRes();
  titleIt();
  showCoords(event);
}




$(document).ready( displayAllProj);
$(document).on('page:load', displayAllProj);


