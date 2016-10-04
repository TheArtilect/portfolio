var projects = {
  "projects": [
    {
      "title": "Image Search",
      "dates": "Oct. 2016",
      "description": "An image search microservice using the Google Custom Search API.  (Node/Heroku/MongoDB)",
      "url": "https://imgsearch-ia.herokuapp.com/",
      "thumbnail": "ImageSearch.png",
      "type": "back-end"
    },
    {
      "title": "Url Shortener",
      "dates": "Sep. 2016",
      "description": "A url shortener microservice.  Shortened url addresses redirect to the original url.  First project using MongoDB.  (Node/Heroku/MongoDB)",
      "url": "https://u-short.herokuapp.com/",
      "thumbnail": "UrlShortener.png",
      "type": "back-end"
    },

    {
      "title": "Request Header Parser",
      "dates": "Sep. 2016",
      "description": "A request header parser microservice that will return your browser IP address, language, and operating system. (Node/Heroku)",
      "url": "https://header-parser-ia.herokuapp.com/",
      "thumbnail": "headerParser.png",
      "type": "back-end"
    },

    {
      "title": "TimeStamp",
      "dates": "Sep. 2016",
      "description": "A timestamp microservice.  First Node api project. (Node/Heroku)",
      "url": "https://timestamp-microservice-ia.herokuapp.com/",
      "thumbnail": "timestamp.png",
      "type": "back-end"
    },

    {
      "title": "Simon Says",
      "dates": "Jul. 2016",
      "description": "A Simon Says game. First project utilizing audio elements and setTimeout(). (Rails/Heroku)",
      "url": "https://simon-says-ia.herokuapp.com",
      "thumbnail": "SimonSays.png",
      "type": "front-end"
    },

    {
      "title": "Tic Tac Toe",
      "dates": "Jul. 2016",
      "description": "A tic tac toe game. (github-pages)",
      "url": "https://theartilect.github.io/TickyTacky/",
      "thumbnail": "TicTacToe.png",
      "type": "front-end"
    },

    {
      "title": "Javascript Calculator",
      "dates": "Jun. 2016",
      "description": "A fully functional simple calculator. First project utilizing 'this' in js. (github-pages)",
      "url": "https://theartilect.github.io/calculator/",
      "thumbnail": "JavascriptCalculator.png",
      "type": "front-end"
    },

    {
      "title": "Random Quote Generator",
      "dates": "Mar. 2016",
      "description": "A few of my favorite quotes.  My first Javascript project. (Rails/Heroku)",
      "url": "https://rand-quote-gen.herokuapp.com/",
      "thumbnail": "RandomQuote.png",
      "type": "front-end"
    },


    {
      "title": "Pomodoro Productivity Timer",
      "dates": "Jun. 2016",
      "description": "A timer that can be used to for cooking pomodoro sauce or scheduling productivity.  First project utilizing setInterval(). (Rails/Heroku)",
      "url": "https://pomodoro-timer-ia.herokuapp.com/",
      "thumbnail": "PomodoroTimer.png",
      "type": "front-end"
    },



    {
      "title": "Twitch-It",
      "dates": "May 2016",
      "description": "For tracking some Twitch streamers.  Utilized Twitch API. (Rails/Heroku)",
      "url": "https://twitch-it.herokuapp.com/",
      "thumbnail": "TwitchIt.png",
      "type": "front-end"
    },

    {
      "title": "Wiki-It",
      "dates": "Apr. 2016",
      "description": "For searching and viewing a listing of wikipedia articles.  Utilized Wikipedia API. (Rails/Heroku)",
      "url": "https://wiki-it-ia.herokuapp.com",
      "thumbnail": "WikiIt.png",
      "type": "front-end"
      /*
      "url": "https://theartilect.github.io/wiki/"
      */
    },
    {
      "title": "Moving Companion",
      "dates": "Apr. 2016",
      "description": "Simple location integrated look up (Google, NYT, Wikipedia). Styling not finished.",
      "url": "http://codepen.io/TheArtilect/full/pbwbbW/",
      "thumbnail": "MovingCompanion.png",
      "type": "front-end"
    },

    {
      "title": "Finance Tracker",
      "dates": "Feb. - Mar. 2016",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course",
      "description": "Ruby on Rails social stocks tracker project built using scaffolding and bootstrap.  Functionality complete, styling in progress. (Rails/Heroku)",
      "url": "https://thawing-plains-40720.herokuapp.com/users/sign_in",
      "thumbnail": "FinanceTracker.png",
      "type": "front-end"
    },
    /*
    {
      "title": "Local Weather App",
      "dates": "Apr. 2016",
      "description": "For showing local weather.  My first API project.  Utilized OpenWeather API and browser geolocation. (Chrome incompatibility, will recreate with different API in the future).",
      "url": "http://codepen.io/TheArtilect/full/zqPRYR/"
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
      "url": "https://hunter-s-tribute.herokuapp.com/",
      "thumbnail": "Tribute.png",
      "type": "front-end"
    },

    {
      "title": "AlphaBlog",
      "dates": "Jan. 2016",
      "description": "My first project, a Ruby on Rails blog  built from the ground up.  Functionality finalized, styling and content in progress.  (Rails/Heroku)",
      "onlineSchool": "Udemy",
      "course": "The Complete Ruby on Rails Developer Course",
      "url": "https://project-prometheus-alphablog.herokuapp.com/",
      "thumbnail": "AlphaBlog.png",
      "type": "front-end"
    },

  ]
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



/* redux projects */
function createProjects(){
  var count = 1



  var newTRow = "<tr class='t-row'></tr>"
  var projTD = "<td class='proj-td col-md-4 col-xs-4 click'><a target='_blank' href='%link%' class='thumb-link'><div class='inside'><p class='p-title'>%title%</p><p class='p-des'>%description%</p></div></a></td>"


  function addTable(){
    for (project in projects.projects){
      if (count % 3 == 1){
        $("#mural").append(newTRow);
      } // By Ian Agpawa
      var pLink = projTD.replace("%link%", projects.projects[project].url)
      var Title = pLink.replace("%title%", projects.projects[project].title)
      var formattedProject = Title.replace("%description%", projects.projects[project].description)
      $(".t-row:last").append(formattedProject)
      var picUrl = "url('assets/" + projects.projects[project].thumbnail +"')"
      $('.proj-td:last').css("background-image", picUrl)

      count += 1
    }
  }

  addTable();



  var back;

  $(".click")
    .mouseover( function(){
      $(this).css('opacity', "0.8")
      back = $(this).css("background-image");
      console.log(back)
      $(this).css('background-image', 'none')
      $(this).find('.inside').css('display', 'block')

    })
    .mouseout(function(){
      $(this).css('opacity', '1.0')
      $(this).css('background-image', back)
      $(this).find('.inside').css('display', 'none')

    });

}




function displayAllProj(){
  navIt();
  displayRes();
  createProjects();
}



$(document).ready( displayAllProj);
$(document).on('page:load', displayAllProj);
