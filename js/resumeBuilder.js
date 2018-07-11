/*
Objects with informations
 */

const bio = {
        "name": "Iwona Kolanowska",
        "role": "Front-End Web Development",
        "constacts": {
            "mobile": "+48 605 832 505",
            "email": "i.hajczewska@gmail.com",
            "github": "https://github.com/hajczek",
            "location": "Warsaw, Poland"
        },
        "welcomeMessage": "Welcome to my Resume :)",
        "skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "React", "Git", "Grid", "Photoshop"],
        "biopic": "images/197x148.gif",
        "display": function(){
                console.log()
            }    
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
                "school": "EUROPEAN INFORMATION TECHNOLOGIES CERTIFICATION INSTITUTE",
                "dates": "08/2016",
                "url": "https://www.eitci.org/validate",
                "certificateId": "EITCA/EG/JQF16004487"
            },
        ],
        "display": function(){

        }  
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
        ],
        "display": function(){

        }  
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
        ],
        "display": function(){

        }  
    }

let formattedName = HTMLheaderName.replace("%data%", bio.name);
$('#main').prepend(formattedName);

let formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$('#main').prepend(formattedRole);

let formattedMobile = HTMLmobile.replace("%data%", bio.constacts.mobile);
$('#topContacts').prepend(formattedMobile);





    


