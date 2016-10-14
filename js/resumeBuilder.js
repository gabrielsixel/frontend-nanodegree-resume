/*
This is empty on purpose! Your code to build the resume will go here.
 */

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
   "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
   "skills": ["HTML", "CSS", "JS", "JQuery", "Node", "MongoDB"],
   "bioPic": "https://en.gravatar.com/userimage/45398808/25bf2b75abe0ae8053082db810a16899.jpg?size=200"
};

var work = {
   "jobs": [
      {
         "employer": "MMDA Digital",
         "title": "Project Manager",
         "location": "Porto Alege, RS, BR",
         "dates": "Start: 23/12/2015 - End : 01/07/2016",
         "description": "Lorem ipsum"
      },
      {
         "employer": "Accera",
         "title": "Business Analyst",
         "location": "São Leopoldo, RS, BR",
         "dates": "Start: 01/09/2015 - End: 20/12/2015",
         "description": "Lorem ipsum"
      }
   ]
};

var projects = {
   "projects": [
      {
         "title": "Lorem",
         "dates": {
            "start": "01/09/2015",
            "end": "20/12/2015"
         },
         "description": "Lorem ipsum",
         "images":["/images/test.jpg", "/images/lorem.jpg"]
      },
   ]
};

var education = {
   "schools": [
      {
         "name": "Senac University",
         "location": "São Paulo, SP, BR",
         "degree": "information System's",
         "majors": ["CS", "Business"],
         "dates": {
            "start": "2008",
            "end": "2015"
         },
         "url": "www.senac.sp.br",
      }
   ],
   'onlineCourses': [
      {
         "title": "Front-End",
         "school": "Udacity",
         "dates": {
            "start": "01/09/2015",
            "end": "Soon"
         },
         "url": "https://classroom.udacity.com/nanodegrees/nd001/parts/0011345406/modules/296281861575460/lessons/1930528550/concepts/19350585610923"
      }
   ]
};

var d = "%data%";

var formattedName = HTMLheaderName.replace(d, bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace(d, bio.role);
$("#header").append(formattedRole);

var formattedbioPic=  HTMLbioPic.replace(d, bio.bioPic);
$("#header").append(formattedbioPic);



if (bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);
   for(var skill in bio.skills) {
      $("#skills").append(HTMLskills.replace(d, bio.skills[skill]));
   }
}

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
