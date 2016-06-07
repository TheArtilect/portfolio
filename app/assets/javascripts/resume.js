

function displayBio() {
  var bio = {
    "name": "Ian Agpawa",
    "contacts": {
      "email": "agpawaji@gmail.com",
      "githubUser": "https://github.com/Theartilect",
      'freeCodeCampUser': "https://www.freecodecamp.com/theartilect",
      "codeWarsUser": "http://www.codewars.com/users/TheArtilect"
    },
    "location": "New York",
    "welcomeMessage": "Hello world!, my name is Ian and I am new to web developing.  Ask me anything!",
    "skills": "Management, Psychology, Multitasking, Interpersonal skills, Leadership skills, Programming",
    "languages": "Python, Ruby, Javascript, HTML5, CSS, Bootstrap, Git, jQuery, Ruby on Rails, SPSS, QuickBooks",
    "interests": "audiophile (headphones), music, computer building and p.c. enthusiast(<a href='%data%' target='_blank'>Current Build</a>,<a href='%data%' target='_blank'>First Build</a>), writing, psychology, philosophy, reading, comedy, football, basketball, cooking"
  }
  

  $("#sk-p").html(bio.skills);
  $("#l-p").html(bio.languages);
  $("#i-p").html(bio.interests);
  

 

}

function displayExp() {

  var work = {
    "jobs": [{
      "title": "Director of Operations",
      "employer": "MHH Clinical Services",
      "dates": "2014 - Present",
      "location": "New York",
      "description": "Oversee and direct business operations"
    }, {
      "title": "Administrator",
      "employer": "MHH Clinical Services",
      "dates": "2012 - 2014",
      "location": "New York",
      "description": "Administration, staffing, management and supervision"
    }, {
      "title": "Administrative Assistant",
      "employer": "MHH Clinical Services",
      "dates": "2010 - 2012",
      "location": "New York",
      "description": "Administrative support"
    }, {
      "title": "Compliance Officer",
      "employer": "MHH Clinical Services",
      "dates": "2009 - 2010",
      "location": "New York",
      "description": "Quality assurance"
    }]
  }

  var experienceStart = '<div class="exp-entry"></div>';
  var expTitle = '<h4 class="about-h4 h4-title">%data%</h4>';
  var expEmployer = "<h5 class='about-h5'>%data%</h5>";
  var expInfo = '<p>%loc%, %date%</p>';
  var expDescription = '<p>%data%</p>';

  for (job in work.jobs) {
    $(".exp-entries").append(experienceStart);

    var title = expTitle.replace("%data%", work.jobs[job].title);
    $(".exp-entry:last").append(title);

    var employer = expEmployer.replace("%data%", work.jobs[job].employer)
    $(".exp-entry:last").append(employer);

    var location = expInfo.replace("%loc%", work.jobs[job].location);
    var date = location.replace("%date%", work.jobs[job].dates)
    $(".exp-entry:last").append(date);

    var description = expDescription.replace("%data%", work.jobs[job].description);
    $(".exp-entry:last").append(description);

  }

};

function displayEd() {
  var education = {
    "schools": [{
      "name": "Columbia University - Teachers College",
      "location": "New York",
      "degree": "Master of Arts",
      "majors": ["Clinical Psychology"],
      "url": "http://www.tc.columbia.edu/",
      "dates": "2011 - 2014",
      "projects": 'Integrative Project: "Mindfulness and Posttraumatic Growth" (Faculty Advisor: Dr. Lisa Miller)'

    }, {
      "name": "CUNY Hunter College",
      "location": "New York",
      "degree": "Bachelor of Arts",
      "majors": ["Psychology", "Philosophy"],
      "url": "http://www.hunter.cuny.edu/main/",
      "dates": "2006 - 2009",
      "projects": "Honors Thesis: 'Error-Detection in Proofreading'. (Faculty Advisor: Dr. Martin Chodorow)",
      "awards": ["Magna Cum Laude", "Departmental Honors", "College Honors", "Dean's List"],
      "activities": ["Thomas Hunter Honors Programs", "Psi Chi", "Golden Key Honors Society"]
    }, {
      "name": "Stuyvesant High School",
      "location": "New York",
      "degree": "High School Diploma",
      "url": "http://stuy.enschool.org/",
      "dates": "2000 - 2004",
      "awards": ["Co-Captain of J.V. Football(2001)", "Co-Rookie of the Year(2000)", "Scholar-Athlete Award(2004)"],
      "activities": ["Junior and Varsity Football(2000-2004)", "Food Club"]
    }],
    "onlineCourses": [{
      "name": "Front End Development Certification",
      "school": "freeCodeCamp",
      "dates": "In Progress",
      "url": "https://www.freecodecamp.com/map-aside#collapseFront-End-Development-Certification"
    }, {
      "name": "Javascript Basics",
      "school": "Udacity",
      "dates": "April 2016",
      "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, {
      "name": "Intro to Ajax",
      "school": "Udacity",
      "dates": "April 2016",
      "url": "https://www.udacity.com/course/viewer#!/c-ud110/l-3174548544/m-3159128570"
    }, {
      "name": "The Complete Ruby on Rails Developer Course",
      "school": "Udemy",
      "dates": "April 2016",
      "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, {
      "name": "HTML & CSS",
      "school": "Codecademy",
      "dates": "January 2016",
      "url": "https://www.codecademy.com/learn/web"
    }, {
      "name": "Intro to SQL: Querying and Managing Data",
      "school": "Khan Academy",
      "dates": "December 2015",
      "url": "https://www.khanacademy.org/computing/computer-programming/sql"
    }, {
      "name": "Ruby",
      "school": "Codecademy",
      "dates": "November 2015",
      "url": "https://www.codecademy.com/learn/ruby"
    }, {
      "name": "Ruby Primer",
      "school": "Ruby Monk",
      "dates": "November 2015",
      "url": "https://rubymonk.com/"
    }, {
      "name": "Ruby Ascent",
      "school": "Ruby Monk",
      "dates": "November 2015",
      "url": "https://rubymonk.com/"
    }, {
      "name": "Introduction to Computer Science and Programming",
      "school": "MIT Open Courseware",
      "dates": "Incomplete",
      "url": "http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00sc-introduction-to-computer-science-and-programming-spring-2011/"
    }, {
      "name": "Google's Python Class",
      "school": "Google",
      "dates": "July 2015",
      "url": "https://developers.google.com/edu/python/"
    }, {
      "name": "Intro to Computer Science",
      "school": "Udacity",
      "dates": "June 2015",
      "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
    }]
  }

  var educationStart = '<div class="ed-entry"></div>';
  var edSchool = '<h4 class="about-h4 h4-school"><a href="%href%" target="_blank">%data%</a></h4>';
  var edDegree = "<h5 class='about-h5'>%data%</h5>";
  var edMajor = '<p>%data%</p>';
  var edDate = '<p>%loc%, %date%</p>';
  var edProject = '<p>%data%</p>';
  var edAwardsStart = '<ul class="ed-awards">Awards</ul>'
  var edAwards = '<li class="ed-awards-li">%data%</li>';
  var edActivitiesStart = '<ul class="ed-act">Activities</ul>'
  var edAct = '<li class="ed-act-li">%data%</li>';

  for (school in education.schools) {
    $(".ed-entries").append(educationStart);

    var link = edSchool.replace("%href%", education.schools[school].url);
    var sName = link.replace("%data%", education.schools[school].name);
    $(".ed-entry:last").append(sName);

    var loc = edDate.replace("%loc%", education.schools[school].location);
    var date = loc.replace("%date%", education.schools[school].dates);
    $(".ed-entry:last").append(date);

    var degree = edDegree.replace("%data%", education.schools[school].degree);
    $(".ed-entry:last").append(degree);

    if (education.schools[school].majors) {
      var major = edMajor.replace("%data%", education.schools[school].majors)
      $(".ed-entry:last").append(major);
    }

    if (education.schools[school].projects) {
      var project = edProject.replace("%data%", education.schools[school].projects);
      $(".ed-entry:last").append(project);
    }

    if (education.schools[school].awards) {
      $(".ed-entry:last").append(edAwardsStart);
      for (award in education.schools[school].awards) {
        var aw = edAwards.replace("%data%", education.schools[school].awards[award]);
        $(".ed-awards:last").append(aw);
      }
    }

    if (education.schools[school].activities) {
      $(".ed-entry:last").append(edActivitiesStart);

      for (act in education.schools[school].activities) {
        var ac = edAct.replace("%data%", education.schools[school].activities[act]);
        $(".ed-act:last").append(ac);
      }
    }
  }

  var onlineStart = "<div class='on-entry'></div>";
  var courseName = '<h4 class="on-h4"><a href="%href%" target="_blank">%data%</a></h4>';
  var onInfo = "<p>%site%, %dates%</p>";

  for (course in education.onlineCourses) {
    $(".ed-online").append(onlineStart);

    var link = courseName.replace("%href%", education.onlineCourses[course].url);
    var courseN = link.replace("%data%", education.onlineCourses[course].name);
    $(".on-entry:last").append(courseN);

    var site = onInfo.replace("%site%", education.onlineCourses[course].school);
    var dates = site.replace("%dates%", education.onlineCourses[course].dates);
    $(".on-entry:last").append(dates);

  }

}

function displayAll() {
  displayBio();
  displayEd();
  displayExp();
}


$(document).ready( displayAll);
$(document).on('page:load', displayAll);
