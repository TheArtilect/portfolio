var projects = {
  "projects": [{
      "title": "Pomodoro Productivity Timer",
      "dates": "Jun. 2016",
      "description": "Pomodoro Productivity Timer.  First project utilizing setInterval()",
      "url": "http://codepen.io/TheArtilect/full/YWVdBa/"
    }, {
      "title": "Javascript Calculator",
      "dates": "Jun. 2016",
      "description": "Javascript Calculator for freeCodeCamp.",
      "url": "http://codepen.io/TheArtilect/full/jrVBzV/"
    }, {
      "title": "Twitch-It",
      "dates": "May 2016",
      "description": "Twitch app for freeCodeCamp.  Utilized Twitch API",
      "url": "http://codepen.io/TheArtilect/full/mPQrXv/"
    }, {
      "title": "Wiki-It",
      "dates": "Apr. 2016",
      "description": "Wikipedia app for freeCodeCamp.  Utilized Wikipedia API.",
      "url": "http://codepen.io/TheArtilect/full/LNewLy/"
    }, {
      "title": "Local Weather App",
      "dates": "Apr. 2016",
      "description": "Local weather app for freeCodeCamp.  My first API.  Utilized OpenWeather API and browser geolocation.",
      "url": "http://codepen.io/TheArtilect/full/zqPRYR/"
    }, {
      "title": "Finance Tracker",
      "dates": "Feb. - Mar. 2016",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course",
      "description": "Ruby on Rails social stocks tracker project built using scaffolding and bootstrap.  Functionality complete, styling in progress. Currently in production (Heroku).",
      "url": "https://thawing-plains-40720.herokuapp.com/users/sign_in"
    }, {
      "title": "Photo App",
      "dates": "Mar. 2016",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course.",
      "description": "Ruby on Rails photo app.  Functionality not finalized, styling in progress. Currently in production (Heroku).",
      "url": "https://dry-retreat-19962.herokuapp.com/"
    },

    {
      "title": "Random Quote Generator",
      "dates": "Mar. 2016",
      "description": "Random quote generator app for freeCodeCamp.  My first Javascript project.",
      "url": "http://codepen.io/TheArtilect/full/EKXXZm/"
    },

    {
      "title": "Personal Portfolio Webpage",
      "dates": "Mar. 2016",
      "description": "Personal portfolio webpage project for freeCodeCamp.",
      "url": "http://codepen.io/TheArtilect/full/EKPaop/"
    }, {
      "title": "Tribute Project",
      "dates": "Feb. 2016",
      "description": "Tribute Project about Hunter S. Thompson for freeCodeCamp.  My first HTML and CSS project.",
      "url": "http://codepen.io/TheArtilect/full/eJqqQZ/"
    },

    {
      "title": "AlphaBlog",
      "dates": "Jan. 2016",
      "description": "My first project, a Ruby on Rails blog  built from the ground up.  Functionality finalized, styling and content in progress. Currently in Production (Heroku).",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course",
      "url": "https://project-prometheus-alphablog.herokuapp.com/"
    },

  ]
}

var projectStart = '<div class="entry"></div>';
var projectLink = '<h3 class="pj-title"><a class="proj-links" target="_blank" href="%link%">%data%</a></h3>';
var projectInfo = '<p class="description">Description: %data%</p>';
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


function displayAll(){
  displayIt();
  displayRes();
}


$(document).ready( displayAll);
$(document).on('page:load', displayAll);


