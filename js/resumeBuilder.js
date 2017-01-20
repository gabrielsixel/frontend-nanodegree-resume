
var bio = {
   "name": "Gabriel Sixel",
   "role": "Front-End Developer",
   "welcomeMessage" : "Hi there! Welcome my portifolio! Olá, bem vindo!",
   "contacts": {
     "mobile": "+55 51 93089335",
     "email": "gabriel.sixel@gmail.com",
     "github": "gabrielsixel",
     "twitter": "@sixel",
     "location": "Porto Alegre"
  },
   "skills": ["HTML", "CSS", "JS", "JQuery"],
   "bioPic": "https://en.gravatar.com/userimage/45398808/25bf2b75abe0ae8053082db810a16899.jpg?size=200"
 };

var work = {
   "jobs": [
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
         "dates": "Start: 23/12/2015 - End : 01/07/2016",
         "description": "Lorem ipsum",
         "images":["/images/fry.jpg", "images/197x148.gif"]
      },
   ]
};

var education = {
   "schools": [{
         "name": "Senac University",
         "location": "São Paulo, SP, BR",
         "degree": "bachelor",
         "majors": "Information Systems",
         "dates": "2008 - 2015",
         "url": "www.senac.sp.br",
      }],
   "onlineCourses": [
      {
         "title": "Front-End Web Developer Nanodegree",
         "school": "Udacity",
         "dates":"09/2015 - 10/2015",
         "url": "https://www.udacity.com/course/nd001"
      }]
};


bio.display = function() {
  var d = "%data%";
  var formattedName = HTMLheaderName.replace(d, bio.name);
  var formattedRole = HTMLheaderRole.replace(d, bio.role);
  var formattedbioPic=  HTMLbioPic.replace(d, bio.bioPic);
  var formattedMessage = HTMLwelcomeMsg.replace(d, bio.welcomeMessage);

  $("#header").prepend(formattedRole).prepend(formattedName).append(formattedbioPic,formattedMessage);
  $("#header").append(HTMLskillsStart);

  for(var skill in bio.skills) {
      if (bio.skills.hasOwnProperty(skill)) {
      $("#skills").append(HTMLskills.replace(d, bio.skills[skill]));
    }
  }

  for(var contact in bio.contacts) {
    if (bio.skills.hasOwnProperty(contacts))  {
      var formattedMobile = HTMLmobile.replace(d, bio.contacts[contact].mobile);
      var formattedEmail = HTMLemail.replace(d, bio.contacts[contact].email);
      var formattedGithub = HTMLgithub.replace(d, bio.contacts[contact].github);
      var formattedTwitter = HTMLtwitter.replace(d, bio.contacts[contact].twitter);
      var formattedLocation = HTMLlocation.replace(d, bio.contacts[contact].location);

      $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
      $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    }
  }
};

education.display = function() {
  var d = "%data%";
  if(education.schools.hasOwnProperty(name)) {
    $("#education").append(HTMLschoolStart);
      for(var school in education.schools) {
        var formattedName = HTMLschoolName.replace(d, education.schools[school].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace(d, education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace(d, education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace(d, education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace(d, education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }
  }
  if(education.onlineCourses.hasOwnProperty(name)) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLonlineClasses);
      for(var course in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace(d, education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace(d, education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedSchool);

        var formattedonlineDates = HTMLonlineDates.replace(d, education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedURL = HTMLonlineURL.replace(d, education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedURL);
    }
  }
};

work.display = function() {
  var d = "%data%";
    if (work.jobs.length > 0) {
       $("#workExperience").append(HTMLworkStart);
       for(var job in work.jobs) {
          var formattedJob = HTMLworkEmployer.replace(d, work.jobs[job].employer);
          formattedJob =
            formattedJob + HTMLworkTitle.replace(d, work.jobs[job].title);
         $(".work-entry:last").append(formattedJob);

         var formattedDate = HTMLworkDates.replace(d, work.jobs[job].dates);
         $(".work-entry:last").append(formattedDate);

         var formattedLocation = HTMLworkLocation.replace(d, work.jobs[job].location);
         $(".work-entry:last").append(formattedLocation);

         var formattedDescription = HTMLworkDescription.replace(d, work.jobs[job].description);
         $(".work-entry:last").append(formattedDescription);
      }
   }
};

projects.display = function() {
   var d = "%data%";
   if (projects.projects.length > 0) {
      $("#projects").append(HTMLprojectStart);
      for(var item in projects.projects) {

         var formattedTitle = HTMLprojectTitle.replace(d, projects.projects[item].title);
         $(".project-entry:last").append(formattedTitle);

         var formattedDate = HTMLprojectDates.replace(d, projects.projects[item].dates);
         $(".project-entry:last").append(formattedDate);

         var formattedDescription = HTMLprojectDescription.replace(d, projects.projects[item].description);
         $(".project-entry:last").append(formattedDescription);

         if (projects.projects[project].images.length > 0) {
            for(var image in projects.projects[item].images) {
               var formattedImage = HTMLprojectImage.replace(d, projects.projects[item].images);
               $(".project-entry:last").append(formattedImage);
            }
         }
      }
   }
};


function inName(s){
   strings = s.trim().split(" ");
   strings[strings.length - 1] = strings[strings.length - 1].toUpperCase();
   strings[0] = strings[0].slice(0, 1).toUpperCase() + strings[0].slice(1).toLowerCase();
   return strings.join(" ");
}

work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
