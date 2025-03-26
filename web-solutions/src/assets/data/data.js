export const createProject = (function(){
    let projects = [];
    let idCounter = 0;

    return {
        addProject: function (projectData) {

            const newProject = {
                id : idCounter++,
                project_name: projectData.project_name,
                description: projectData.description || ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque quisquam, dolores tempora fuga aliquam sint nisi unde quasi ut non excepturi accusamus ducimus voluptate! Deleniti facere nulla accusantium numquam.',
                img: projectData.img || '/mockups/mockupHotel.png',
                type: projectData.type || 'Landing Page',
                link: projectData.link || '',
                gitHub: projectData.gitHub || '',
            };

            projects.push(newProject)
            return newProject;
        },
        getProjects: function(){
            return projects;
        },
        getProjectById: function(id){
            return projects.find(project=> project.id === id);
        },
    }
})()

export const information = [
    {
        id:0,
        company_name: "Expert Solutions",
        services: ['Web development','Web Design' ]
    },
    {
        id:1,
        name:'Project Info',
        get projects(){
            return createProject.getProjects()
        }
    }
]

createProject.addProject({
    project_name: 'Salt&Light Blog',
    img: '/mockups/mockupBlog.png',
    type: ' Blog',
    link: 'https://salt-light-blog.vercel.app/',
    gitHub:'',
})

createProject.addProject({
    project_name: 'The Grand Hotel',
    img: '/mockups/mockupHotel.png',
    type: 'Landing Page',
    link: 'https://hotel-template-phi.vercel.app/',
    gitHub:'',
})

createProject.addProject({
    project_name: 'One Health',
    img: '/mockups/mockupOneHealth.png',
    type: 'Landing Page',
    link: 'https://one-health-three.vercel.app/',
    gitHub:'',
})
createProject.addProject({
    project_name: 'One Hope',
    img: '/mockups/mockupOneHope.png',
    type: 'Landing Page',
    link: 'https://one-hope-virid.vercel.app/',
    gitHub:'',
})
createProject.addProject({
    project_name: 'Salt&Light Ministries',
    img: '/mockups/mockupSalt&light.png',
    type: 'Chrsitian Directory',
    link: 'https://salt-light-9h3y.vercel.app/',
    gitHub:'',
})
createProject.addProject({
    project_name: 'Torch',
    img: '/mockups/mockupTorch.png',
    type: 'Landing Page',
    link: 'https://torch-one.vercel.app/',
    gitHub:'',
})