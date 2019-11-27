/*
Objects with bio, education, work and projects informations
 */

const bio = {
    "name": "Iwona Kolanowska",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "<a href='tel:+48605832505'>+48 605 832 505</a>",
        "email": "<a href='mailto:i.hajczewska@gmail.com'>i.hajczewska@gmail.com</a>",
        "github": "<a href='https://github.com/hajczek' target='_blank'>github.com/hajczek</a>",
        "location": "Poland, Milanówek, Piasta 11"
    },
    "welcomeMessage": "Self-employed in the company 'Serwis stron'. Design and code websites.<br>Current career goal, work as a Front-End Developer in a professional Front-End team.",
    "skills": ["HTML", "CSS", "SASS", "JavaScript", "jQuery", "TypeScript", "React", "Git", "NPM", "Photoshop"],
    "biopic": "images/IK.png"
};

const education = {
    "schools": [
        {
            "name": "Akademia Leona Koźmińskiego",
            "location": "Jagiellońska 57/59, 03-301 Warsaw, Poland",
            "degree": "postgraduate studies",
            "majors": ["Frontend development with React"],
            "dates": "2019 - now (in progress)",
            "url": "https://www.kozminski.edu.pl/pl/"
        },
        {
            "name": "University of Warsaw",
            "location": "Mokotowska 16/20, 00-561 Warsaw, Poland",
            "degree": "master",
            "majors": ["Early School Pedagogy"],
            "dates": "2000 - 2003",
            "url": "http://en.uw.edu.pl/"
        },
        {
            "name": "University of Warsaw",
            "location": "Mokotowska 16/20, 00-561 Warsaw, Poland",
            "degree": "licentiate",
            "majors": ["Early School Pedagogy"],
            "dates": "1997 - 2000",
            "url": "http://en.uw.edu.pl/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "02/2018 - 08/2018",
            "url": "https://graduation.udacity.com/confirm/AVYLSTTF"
        },
        {
            "title": "Google Developer Challenge Scholarship",
            "school": "Udacity",
            "dates": "11/2017 - 02/2018",
            "url": "https://eu.udacity.com/"
        },
        {
            "title": "EITCA Computer Graphics Programme",
            "school": "EITCI - Certificate Id: EITCA/EG/JQF16004487",
            "dates": "08/2016",
            "url": "https://www.eitci.org/validate"
        },
    ]
};

const work = {
    "jobs": [
        {
            "employer": "Serwis stron",
            "title": "self-employed",
            "location": "Piasta 11, 05-822 Milanówek, Poland",
            "dates": "01/2009 - now",
            "description": "Remote implementation of website - designing and coding. Implementation of open-sorce CMS systems. Updating and modernizing websites."
        },
        {
            "employer": "Splio",
            "title": "Campaign Executive",
            "location": "Warsaw, Masovian District, Poland",
            "dates": "02/2019 - 05/2019",
            "description": "Coding HTML and CSS email templates."
        },
        {
            "employer": "nonstop studio",
            "title": "Website designer",
            "location": "Nocznickiego 33, 01-918 Warsaw, Poland",
            "dates": "11/2007 - 08/2008",
            "description": "Cut and encoded PSD graphic templates into HTML and CSS. Actualized websites content for clients of the company."
        },
        {
            "employer": "ATCOM SA",
            "title": "Product consultant",
            "location": "Grochowska 316/320, 03-839 Warsaw, Poland",
            "dates": "07/2004 - 05/2007",
            "description": "Advice on the company's products and services."
        }
    ]
};

const projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": "03/2018",
            "description": "My portfolio online.",
            "technologies": "HTML5, CSS3, Grid",
            "url": "https://hajczek.github.io/portfolio/",
            "images": []
        },
        {
            "title": "e-Cook-Book",
            "dates": "01/2018 - 02/2018",
            "description": "Open-Source project. Conception and coordination. Realisation with a group of Google Developer Challenge Scholarship students.",
            "technologies": "HTML5, CSS3, JavaScript, Bootstrap, PHP, SQLLite3",
            "url": "http://e-cookbook.online/",
            "images": []
        },
        {
            "title": "Warsaw cultural map",
            "dates": "05/2018 - 06/2018",
            "description": "Warsaw cultural map with theatres, cinemas, galeries and museums.",
            "technologies": "HTML5, CSS3, JavaScript + React, Google Maps API, Wikipedia API",
            "url": "https://hajczek.github.io/Neighborhood---Warsaw-Cultural-Map/",
            "images": []
        },
        {
            "title": "Easter Egg",
            "dates": "04/2018 - 05/2018",
            "description": "Classic Arcade Game",
            "technologies": "HTML5, CSS3, JavaScript",
            "url": "https://hajczek.github.io/arcade-game/",
            "images": []
        },
        {
            "title": "Match photos",
            "dates": "03/2018",
            "description": "Memory Game",
            "technologies": "HTML5, CSS3, JavaScript",
            "url": "https://hajczek.github.io/memory-game/",
            "images": []
        },
        {
            "title": "Pixel Art Maker",
            "dates": "12/2017 - 01/2018",
            "description": "Application for artists allows drawing with pixels.",
            "technologies": "HTML5, CSS3, JavaScript, jQuery",
            "url": "https://hajczek.github.io/pixel-art-maker-project/",
            "images": []
        },
        {
            "title": "Company website",
            "dates": "01/2017",
            "description": "Website made for 'Serwis stron' - my one-person company.",
            "technologies": "HTML5, CSS3, jQuery",
            "url": "http://www.serwisstron.pl",
            "images": []
        }
    ]
}


/* Function displays information from bio object */

bio.display = function () {
    let formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $('#header').prepend(formattedRole);

    let formattedName = HTMLheaderName.replace("%data%", bio.name);
    $('#header').prepend(formattedName);


    let formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $('#topContacts').prepend(formattedLocation);
    $('#footerContacts').prepend(formattedLocation);

    let formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $('#topContacts').prepend(formattedGithub);
    $('#footerContacts').prepend(formattedGithub);

    let formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $('#topContacts').prepend(formattedEmail);
    $('#footerContacts').prepend(formattedEmail);

    let formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $('#topContacts').prepend(formattedMobile);
    $('#footerContacts').prepend(formattedMobile);


    let formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    let formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $('#header').append(formattedWelcomeMsg);


    let skills = bio.skills;
    if (skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i in skills) {
            $("#skills").append(HTMLskills.replace("%data%", skills[i]));
        }
    }
}

bio.display();


/* Function displays information from work object */

work.display = function () {

    let jobs = work.jobs;
    if (jobs.length > 0) {
        for (i in jobs) {
            $("#workExperience").append(HTMLworkStart);

            let formattedWorkEmployer = HTMLworkEmployer.replace("%data%", jobs[i].employer);
            let formattedWorkTitle = HTMLworkTitle.replace("%data%", jobs[i].title);
            let formattedWorkLocation = HTMLworkLocation.replace("%data%", jobs[i].location);
            let formattedWorkDates = HTMLworkDates.replace("%data%", jobs[i].dates);
            let formattedWorkDescription = HTMLworkDescription.replace("%data%", jobs[i].description);

            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
}

work.display();


/* Function displays information from projects object */

projects.display = function () {

    let allProjects = projects.projects;
    if (allProjects.length > 0) {
        for (i in allProjects) {
            $("#projects").append(HTMLprojectStart);

            let formattedProjectTitle = HTMLprojectTitle.replace("%data%", allProjects[i].title).replace("#", allProjects[i].url);
            let formattedProjectDates = HTMLprojectDates.replace("%data%", allProjects[i].dates);
            let formattedProjectDescription = HTMLprojectDescription.replace("%data%", allProjects[i].description);
            let formattedProjectTechnologies = HTMLprojectTechnologies.replace("%data%", allProjects[i].technologies);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectTechnologies);

            for (pic in allProjects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", allProjects[i].images[pic]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}

projects.display();


/* Function displays information from education object */

education.display = function () {

    let schools = education.schools;
    if (schools.length > 0) {

        for (i in schools) {
            $("#education").append(HTMLschoolStart);

            let formattedSchoolName = HTMLschoolName.replace("%data%", schools[i].name).replace("#", schools[i].url);
            let formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schools[i].degree);
            let formattedSchoolDates = HTMLschoolDates.replace("%data%", schools[i].dates);
            let formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schools[i].location);
            let formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }

    let courses = education.onlineCourses;
    if (courses.length > 0) {
        $(".education-entry:last").append(HTMLonlineCourses);

        for (i in courses) {
            let formattedOnlineTitle = HTMLonlineTitle.replace("%data%", courses[i].title).replace("#", courses[i].url);
            let formattedOnlineSchool = HTMLonlineSchool.replace("%data%", courses[i].school);
            let formattedOnlineDates = HTMLonlineDates.replace("%data%", courses[i].dates);
            let formattedOnlineURL = HTMLonlineURL.replace("%data%", courses[i].url);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);

        }
    }

}

education.display();


/* Displays googleMap */

$("#mapDiv").append(googleMap);








