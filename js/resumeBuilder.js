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
            name: 'University of Warsaw - Pedagogic faculty',
            location: 'Warsaw, Poland',
            degree: 'master',
            majors: ['Early School Pedagogy'],
            dates: '2000 - 2003',
            url: 'http://en.uw.edu.pl/'
        },
        universityFirst = {
            name: 'University of Warsaw - Pedagogic faculty',
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
            title: '',
            school: '',
            dates: '',
            url: ''
        },
        courseSecond = {
            title: '',
            school: '',
            dates: '',
            url: ''
        },
        courseFirst = {
            title: '',
            school: '',
            dates: '',
            url: ''
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