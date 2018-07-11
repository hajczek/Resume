/*
Objects with informations
 */

const bio = {
        "name": "Iwona Kolanowska",
        "role": "Front-End Web Development",
        "contacts": {
            "mobile": "+48 605 832 505",
            "email": "i.hajczewska@gmail.com",
            "github": "https://github.com/hajczek",
            "location": "Warsaw, Poland"
        },
        "welcomeMessage": "I'm a self-employed in Serwis stron  company. I designing and coding  websites for small and medium companies.",
        "skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "React", "Git", "Grid", "Photoshop"],
        "biopic": "images/197x148.gif"   
    };

const education = {
        "schools": [
            {
                "name": "University of Warsaw",
                "location": "Warsaw, Poland",
                "degree": "master",
                "majors": ["Early School Pedagogy"],
                "dates": "2000 - 2003",
                "url": "http://en.uw.edu.pl/"
            },
            {
                "name": "University of Warsaw",
                "location": "Warsaw, Poland",
                "degree": "licentiate",
                "majors": ["Early School Pedagogy"],
                "dates": "1997 - 2000",
                "url": "http://en.uw.edu.pl/"
            },
            {
                "name": "Technikum Terenów Zieleni",
                "location": "Radzymin, Poland",
                "degree": "technician",
                "majors": ["Landscape architecture"],
                "dates": "1994 - 1997",
                "url": "http://zstz-radzymin.pl/"
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
                "school": "EUROPEAN INFORMATION TECHNOLOGIES CERTIFICATION INSTITUTE - Certificate Id: EITCA/EG/JQF16004487",
                "dates": "08/2016",
                "url": "https://www.eitci.org/validate"
            },
        ]  
    };

const work = {
        "jobs": [
            {
                "employer": "self-employed",
                "title": "Serwis stron",
                "location": "Milanówek, Poland",
                "dates": "01/2009 - now",
                "description": "Remote implementation of websites for small and medium companies, based on the Quick.CMS system. Designing and coding websites."
            },
            {
                "employer": "nonstop studio",
                "title": "Younger website designer",
                "location": "Warsaw, Poland",
                "dates": "11/2007 - 08/2008",
                "description": "Coding web layouts (HTML, CSS, JS)self-employed"
            },
            {
                "employer": "ATCOM SA",
                "title": "Independent consultant at the Customer Service Office",
                "location": "Warsaw, Poland",
                "dates": "07/2004 - 05/2007",
                "description": "Customer service"
            }
        ]  
    };

const projects = {
        "projects": [
            {
                "title": "Portfolio",
                "dates": "03/2018",
                "description": "My portfolio online.",
                "url": "https://hajczek.github.io/portfolio/",
                "images": []
            },
            {
                "title": "e-Cook-Book",
                "dates": "01/2018 - 02/2018",
                "description": "I was an originator of this project. This project was made by group of students FEND Scholarship.",
                "url": "http://e-cookbook.online/",
                "images": []
            },
            {
                "title": "Neighborhood - Warsaw Cultural Map",
                "dates": "05/2018 - 06/2018",
                "description": "Project made during Google Front-End Web Developer Nanodegree Scholarship.",
                "url": "https://hajczek.github.io/Neighborhood---Warsaw-Cultural-Map/",
                "images": []
            },
            {
                "title": "Classic Arcade Game",
                "dates": "04/2018 - 05/2018",
                "description": "Game made during Google Front-End Web Developer Nanodegree Scholarship",
                "url": "https://hajczek.github.io/arcade-game/",
                "images": []
            },
            {
                "title": "Memory Game",
                "dates": "03/2018",
                "description": "Game made during Google Front-End Web Developer Nanodegree Scholarship.",
                "url": "https://hajczek.github.io/memory-game/",
                "images": []
            },
            {
                "title": "Pixel Art Maker",
                "dates": "12/2017 - 01/2018",
                "description": "Project made during Google Challenge Scholarship: Front-End Web Dev.",
                "url": "https://hajczek.github.io/pixel-art-maker-project/",
                "images": []
            },
            {
                "title": "Website of my one-person company",
                "dates": "01/2017",
                "description": "Website made for Serwis stron, my one-person company.",
                "url": "http://www.serwisstron.pl",
                "images": []
            }
        ] 
    }

/*  */

bio.display = function(){
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
    if(skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for(i in skills) {
            $("#skills").append(HTMLskills.replace("%data%", skills[i]));
        }
    }
}

bio.display();


work.display = function() {
    
    let jobs = work.jobs;
	if(jobs.length > 0) {
		for(i in jobs) {
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


projects.display = function() {
    
    let allProjects = projects.projects;
	if(allProjects.length > 0) {
		for(i in allProjects) {
			$("#projects").append(HTMLprojectStart);
                        
			let formattedProjectTitle = HTMLprojectTitle.replace("%data%", allProjects[i].title).replace("#", allProjects[i].url);
            let formattedProjectDates = HTMLprojectDates.replace("%data%", allProjects[i].dates);          
			let formattedProjectDescription = HTMLprojectDescription.replace("%data%", allProjects[i].description);
            
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            
            for(pic in allProjects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%",  allProjects[i].images[pic]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}

projects.display();


education.display = function() {
    
    let schools = education.schools;
	if(schools.length > 0) {
		for(i in schools) {
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
    
    let courses = education.onlineCourses
    if(courses.length > 0) {
        $(".education-entry:last").append(HTMLonlineCourses);
		for(i in courses) {            
            
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


$("#mapDiv").append(googleMap);





    


