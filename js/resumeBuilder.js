 var bio = {
   "name": "Gabriel Sixel",
   "role": "Front-End Developer",
   "contacts": {
     "mobile": "+55 51 93089335",
     "email": "gabriel.sixel@gmail.com",
     "github": "gabrielsixel",
     "twitter": "@sixel",
     "location": "Porto Alegre"
   },
  "welcomeMessage" : "Hi there! Welcome my portifolio! Olá, bem vindo!",
   "skills": ["HTML", "CSS", "JS", "JQuery", "Handlebars", "Gulp"],
   "bioPic": "https://en.gravatar.com/userimage/45398808/25bf2b75abe0ae8053082db810a16899.jpg?size=200",
 };

var education = {
    "schools": [{
       "name": "Senac University",
       "location": "São Paulo, SP, BR",
       "degree": "bachelor",
       "majors": ["Information Systems"],
       "dates": "2008 - 2015",
       "url": "www.senac.sp.br",
    },
    {
       "name": "Senac University",
       "location": "São Paulo, SP, BR",
       "degree": "bachelor",
       "majors": ["Information Systems"],
       "dates": "2008 - 2015",
       "url": "www.senac.sp.br",
    }],
  "onlineCourses": [
     {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates":"09/2015 - 10/2015",
      "url": "https://www.udacity.com/course/nd001"
    },
    {
     "title": "Front-End Web Developer Nanodegree",
     "school": "Udacity",
     "dates":"09/2015 - 10/2015",
     "url": "https://www.udacity.com/course/nd001"
   }]
};


var work = {
   "jobs": [
      {
        "employer": "RCA Digital",
        "title": "Front-End Developer",
        "dates": "Start: 07/11/2015 - in Progress",
        "location": "Porto Alege, RS, BR",
        "description": "Front-End development of portals and digital campaigns, using HTML, CSS and JavaScript."
      },
      {
         "employer": "MMDA Digital",
         "title": "Project Manager",
         "dates": "Start: 23/12/2015 - End : 01/07/2016",
         "location": "Porto Alege, RS, BR",
         "description": "Responsible for planning, controlling and monitoring the demands and activities of project development of portals and digital campaigns. Keep aligned the scope of projects to the strategic plan, track team effort to ensure the delivery according to the properties and quality standards with the customer."
      },
      {
         "employer": "Accera",
         "title": "Business Analyst",
         "location": "São Leopoldo, RS, BR",
         "dates": "Start: 01/09/2015 - End: 20/12/2015",
         "description": "Translation of business needs and features into prototypes for development. Responsible for internal customers and IT interface, identifying and capturing business requirements; Organize and plan tasks for the backlog (Product Roadmap)."
      },
      {
         "employer": "AutoSeg",
         "title": "Product Owner",
         "dates": "Start: 01/01/2013 - End : 01/03/2015",
         "location": "São Paulo, SP, BR",
         "description": "Responsible for planning, controlling and monitoring demands and product priorities and managing the development team, facilitating the interaction between the development team and the stakeholders. Requirements analysis, development and gathering, creating user stories and comunicating to the team."
      },
   ]
};

var projects = {
   "projects": [
      {
         "title": "Lorem",
         "dates": "23/12/2015 -01/07/2016",
         "description": "Lorem ipsum",
         "images":["/images/fry.jpg", "images/197x148.gif"]
      },
      {
         "title": "Lorem",
         "dates": "23/12/2015 -01/07/2016",
         "description": "Lorem ipsum",
         "images":["/images/fry.jpg", "images/197x148.gif"]
      },
      {
         "title": "Lorem",
         "dates": "23/12/2015 -01/07/2016",
         "description": "Lorem ipsum",
         "images":["/images/fry.jpg", "images/197x148.gif"]
      }]
};



bio.display = function() {

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $('#topContacts:last').append(formattedMobile);
  $('#footerContacts').append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $('#topContacts:last').append(formattedEmail);
  $('#footerContacts').append(formattedEmail);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $('#topContacts:last').append(formattedTwitter);
  $('#footerContacts').append(formattedTwitter);

  var formattedgit = HTMLgithub.replace("%data%", bio.contacts.github);
  $('#topContacts:last').append(formattedgit);
  $('#footerContacts').append(formattedgit);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $('#topContacts:last').append(formattedLocation);
  $('#footerContacts').append(formattedLocation);

  var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
  $('#header').append(formattedBiopic);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $('#header').append(formattedMessage);


  $('#header').append(HTMLskillsStart);
  for (var skill = 0; skill < bio.skills.length; skill++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      $('#skills').append(formattedSkills);
  }
}();

education.display = function() {
  $("#education").append(HTMLschoolStart);
  for(var school = 0; school < education.schools.length; school++) {
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedMajor);
    }
  $('.education-entry:last').append(HTMLonlineClasses);
  for (var course = 0; course < education.onlineCourses.length; course++) {

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedSchool);

    var formattedOnlineSchoolDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedOnlineSchoolDate);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);
  }
}();

work.display = function() {
 $("#workExperience").append(HTMLworkStart);
 for(var job in work.jobs) {
   var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
   formattedJob =  formattedJob + HTMLworkTitle.replace("%data%", work.jobs[job].title);
   $(".work-entry:last").append(formattedJob);

   var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
     $(".work-entry:last").append(formattedDate);

     var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
     $(".work-entry:last").append(formattedLocation);

     var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
     $(".work-entry:last").append(formattedDescription);
  }
}();

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  for(var item in projects.projects) {

   var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
   $(".project-entry:last").append(formattedTitle);

   var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
   $(".project-entry:last").append(formattedDate);

   var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
   $(".project-entry:last").append(formattedDescription);

    for (var image in projects.projects[item].images) {
     var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images);
     $(".project-entry:last").append(formattedImage);
    }
  }
}();


function inName(s){
   strings = s.trim().split(" ");
   strings[strings.length - 1] = strings[strings.length - 1].toUpperCase();
   strings[0] = strings[0].slice(0, 1).toUpperCase() + strings[0].slice(1).toLowerCase();
   return strings.join(" ");
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
