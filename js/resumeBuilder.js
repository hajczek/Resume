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
        "location": "Poland, Milanówek"
    },
    "welcomeMessage": "Self-employed in the company 'Serwis stron'. Design and code websites.<br>Career goal: remote work as a Front-End Web Developer in a professional frontend team, with the possibility of further development.",
    "skills": ["HTML", "CSS", "SASS", "JavaScript", "jQuery", "TypeScript", "React", "Git", "NPM", "Photoshop", "English B1"],
    "biopic": "images/IK.png"
};

const education = {
    "schools": [
        {
            "name": "Akademia Leona Koźmińskiego",
            "location": "Poland, Masovian District, 03-301 Warsaw, Jagiellońska 57/59 street",
            "degree": "postgraduate studies",
            "majors": ["Frontend development with React"],
            "dates": "2019 - now (in progress)",
            "url": "https://www.kozminski.edu.pl/pl/"
        },
        {
            "name": "University of Warsaw",
            "location": "Poland, Masovian District, 00-561 Warsaw, Mokotowska 16/20 street",
            "degree": "master",
            "majors": ["Early School Pedagogy"],
            "dates": "2000 - 2003",
            "url": "http://en.uw.edu.pl/"
        },
        {
            "name": "University of Warsaw",
            "location": "Poland, Masovian District, 00-561 Warsaw, Mokotowska 16/20 street",
            "degree": "licentiate",
            "majors": ["Early School Pedagogy"],
            "dates": "1997 - 2000",
            "url": "http://en.uw.edu.pl/"
        }
    ]
};

const selfEducation = {
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
            "school": "EITCI<br><span class='cert'>Certificate Id: EITCA/EG/JQF16004487</span>",
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
            "location": "Poland, Masovian District, 05-822 Milanówek, Piasta 11 street",
            "dates": "01/2009 - now",
            "description": "Remote implementation of websites - designing and coding. Implementation of open-source CMS systems. Updating and modernizing websites."
        },
        {
            "employer": "Splio",
            "title": "Campaign Executive",
            "location": "Poland, Masovian District, 02-605 Warsaw, Ursynowska 72 street",
            "dates": "02/2019 - 05/2019",
            "description": "Coding HTML and CSS email templates."
        },
        {
            "employer": "nonstop studio",
            "title": "Website designer",
            "location": "Poland, Masovian District, 01-918 Warsaw, Nocznickiego 33 street",
            "dates": "11/2007 - 08/2008",
            "description": "Cutting and encoding PSD graphic templates into HTML and CSS. Actualizing websites content."
        },
        {
            "employer": "ATCOM SA",
            "title": "Product consultant",
            "location": "Poland, Masovian District, 03-839 Warsaw, Grochowska 316/320 street",
            "dates": "07/2004 - 05/2007",
            "description": "Advice on the company's products and services."
        }
    ]
};

const projects = {
    "projects": [
        {
            "title": "Naighborhood",
            "dates": "05/2018 - 06/2018",
            "description": "Warsaw cultural map with marked theatres, cinemas, art galleries, and museums.",
            "technologies": "HTML5, CSS3, JavaScript + React, Google Maps API, Wikipedia API",
            "url": "https://hajczek.github.io/Neighborhood---Warsaw-Cultural-Map/",
            "images": []
        },
        {
            "title": "Random Quote Machine",
            "dates": "10/2019 - 11/2019",
            "description": "The app displays random quotes from famous people.",
            "technologies": "HTML5, CSS3, JavaScript + React, Random Famous Quotes API",
            "url": "https://hajczek.github.io/random-quote-machine/",
            "images": []
        },
        {
            "title": "Markdown Previewer",
            "dates": "10/2019",
            "description": "Editable text field with possibility for uses Markdown tags to formate text.",
            "technologies": "HTML5, CSS3, JavaScript + React, a markdown parser and compiler",
            "url": "https://hajczek.github.io/markdown-previewer/",
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
            "title": "Easter Egg",
            "dates": "04/2018 - 05/2018",
            "description": "Classic Arcade Game.",
            "technologies": "HTML5, CSS3, JavaScript",
            "url": "https://hajczek.github.io/arcade-game/",
            "images": []
        },
        {
            "title": "Match photos",
            "dates": "03/2018",
            "description": "Memory Game.",
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
        }
    ]
}


/* Function displays information from bio object */

bio.display = function () {
    let formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $('header').prepend(formattedRole);

    let formattedName = HTMLheaderName.replace("%data%", bio.name);
    $('header').prepend(formattedName);


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
    $("header").append(formattedPic);

    let formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $('header').append(formattedWelcomeMsg);


    let skills = bio.skills;
    if (skills.length > 0) {
        $("header").append(HTMLskillsStart);

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
}
education.display();

courses.display = function () {

    let courses = selfEducation.onlineCourses;
    if (courses.length > 0) {

        for (i in courses) {
            $("#courses").append(HTMLonlineCoursesStart);

            let formattedOnlineTitle = HTMLonlineTitle.replace("%data%", courses[i].title);
            let formattedOnlineSchool = HTMLonlineSchool.replace("%data%", courses[i].school);
            let formattedOnlineDates = HTMLonlineDates.replace("%data%", courses[i].dates);
            let formattedOnlineURL = HTMLonlineURL.replace("%data%", courses[i].url);

            $(".courses-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".courses-entry:last").append(formattedOnlineDates);
            $(".courses-entry:last").append(formattedOnlineURL);

        }
    }
}
courses.display();


/* Displays googleMap */

$("#mapDiv").append(googleMap);