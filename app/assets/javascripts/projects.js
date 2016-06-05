

var projects = {
  "projects": [
    {
      "title": "Twitch-It",
      "dates": "Apr. 2016",
      "description": "Twitch app for freeCodeCamp.  Utilized Twitch API",
      "url": "http://codepen.io/TheArtilect/full/mPQrXv/"
    },
    {
      "title": "Wiki-It",
      "dates": "Apr. 2016",
      "description": "Wikipedia app for freeCodeCamp.  Utilized Wikipedia API.",
      "url": "http://codepen.io/TheArtilect/full/LNewLy/"
    },
    {
      "title": "Local Weather App",
      "dates": "Mar. 2016",
      "description": "Local weather app for freeCodeCamp.  My first API project, utilized OpenWeather API and browser geolocation.",
      "url": "http://codepen.io/TheArtilect/full/zqPRYR/"
    },
    {
      "title": "Random Quote Generator",
      "dates": "Mar. 2016",
      "description": "Random quote generator app for freeCodeCamp.  My first Javascript project.",
      "url": "http://codepen.io/TheArtilect/full/EKXXZm/"
    },
    {
      "title": "Personal Portfolio Webpage",
      "dates": "Feb. - Mar. 2016",
      "description": "Personal portfolio webpage project for freeCodeCamp.",
      "url": "http://codepen.io/TheArtilect/full/EKPaop/"
    },
    {
      "title": "Tribute Project",
      "dates": "Feb. 2016",
      "description": "Tribute Project about Hunter S. Thompson for freeCodeCamp.  My first HTML and CSS project.",
      "url": "http://codepen.io/TheArtilect/full/eJqqQZ/"
    },
    {
      "title": "Photo App",
      "dates": "Mar. 2016",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course.",
      "description": "Ruby on Rails photo app.  Functionality not finalized, styling in progress. Currently in production (Heroku).",
      "url": "https://dry-retreat-19962.herokuapp.com/"
    },
    {
      "title": "Finance Tracker",
      "dates": "Feb. - Mar. 2016",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course",
      "description": "Ruby on Rails social stocks tracker project built using scaffolding and bootstrap.  Functionality complete, styling in progress. Currently in production (Heroku).",
      "url": "https://thawing-plains-40720.herokuapp.com/users/sign_in"
    },
    {
      "title": "AlphaBlog",
      "dates": "Jan. 2016",
      "description": "My first project, a Ruby on Rails blog  built from the ground up.  Functionality finalized, styling and content in progress. Currently in Production (Heroku).",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course",
      "url": "https://project-prometheus-alphablog.herokuapp.com/"
    }
  ]
}


var projectStart = '<div class="entry"></div>';
var projectTitle = '<h3 class="title">%data%</h3>';
var projectInfo = '<p class="description">Description: %data%</p>';
var projectDate = '<p class="date">Date Completed: %data%</p>'
var projectLink = '<a class="links" target="_blank" href="%data%">Click here for link</a>';


function displayIt(){
  for (project in projects.projects){
    $("#project-entries").append(projectStart);
    
    var title = projectTitle.replace("%data%", projects.projects[project].title);
    $(".entry:last").append(title);
    
    var description = projectInfo.replace("%data%", projects.projects[project].description);
    $(".entry:last").append(description);
    
    var date = projectDate.replace("%data%", projects.projects[project].dates)
    $(".entry:last").append(date);
    
    var link = projectLink.replace("%data%", projects.projects[project].url);
    $(".entry:last").append(link);
    
    
  }
}

window.onload = displayIt;
