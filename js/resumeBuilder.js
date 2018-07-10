/*
Object with 'bio' informations
 */

const bio = {
    name: 'Iwona Kolanowska',
    role: 'Front-End Web Development',
    constacts: {
        mobile: '+48 605 832 505',
        email: 'i.hajczewska@gmail.com',
        github: 'https://github.com/hajczek',
        location: 'Warsaw, Poland'
    },
    welcomeMessage: 'Welcome to my Resume :)',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React', 'Git', 'Grid', 'Photoshop'],
    biopic: 'images/197x148.gif',
    display: function(){
        
    }    
}

/*
Object with informations about education
 */

const education = {
    schools: [
        universitySecond = {
            name: 'University of Warsaw',
            location: 'Warsaw, Poland',
            degree: 'master',
            majors: ['Early School Pedagogy'],
            dates: '2000 - 2003',
            url: 'http://en.uw.edu.pl/'
        },
        universityFirst = {
            name: 'University of Warsaw',
            location: 'Warsaw, Poland',
            degree: 'licentiate',
            majors: ['Early School Pedagogy'],
            dates: '1997 - 2000',
            url: 'http://en.uw.edu.pl/'
        },
        highSchool= {
            name: 'Technikum Terenów Zieleni',
            location: 'Radzymin, Poland',
            degree: 'technician',
            majors: ['Landscape architecture'],
            dates: '1994 - 1997',
            url: 'http://zstz-radzymin.pl/'
        }
    ],
    onlineCourses: [
        courseThird = {
            title: 'Front-End Web Developer Nanodegree',
            school: 'Udacity',
            dates: '02/2018 - 08/2018',
            url: 'https://graduation.udacity.com/confirm/AVYLSTTF'
        },
        courseSecond = {
            title: 'Google Developer Challenge Scholarship',
            school: 'Udacity',
            dates: '11/2017 - 02/2018',
            url: 'https://eu.udacity.com/'
        },
        courseFirst = {
            title: 'EITCA Computer Graphics Programme',
            school: 'EUROPEAN INFORMATION TECHNOLOGIES CERTIFICATION INSTITUTE',
            dates: '08/2016',
            url: 'https://www.eitci.org/validate',
            certificateId: 'EITCA/EG/JQF16004487'
        },
    ],
    display: function(){
        
    }  
}

/*
Object with informations about works experiences
 */

const work = {
    jobs: [
        jobThird = {
            employer: '',
            title: '',
            location: '',
            dates: '',
            description: ''
        },
         jobSecond = {
            employer: '',
            title: '',
            location: '',
            dates: '',
            description: ''
        },
         jobFirst = {
            employer: '',
            title: '',
            location: '',
            dates: '',
            description: ''
        }
    ],
    display: function(){
        
    }  
}


/*
Object with informations about projects
 */

const projects = {
    allProjects: [
        projectThird = {
            title: '',
            dates: '',
            description: '',
            images: []
        },
         projectSecond = {
            title: '',
            dates: '',
            description: '',
            images: []
        },
         projectFirst = {
            title: '',
            dates: '',
            description: '',
            images: []
        }
    ],
    display: function(){
        
    }  
}