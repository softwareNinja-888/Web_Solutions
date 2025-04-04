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



export const createPricing = (function(){
    let prices = [];
    let idCounter = 0;

    return {
        addPrice: function (price) {

            const newPrice = {
                id : idCounter++,
                type: price.type,
                price: price.price,
                description: price.description || "Perfect for using in a personal website or a client project.",
                buttonText: "Choose Meduim Business",
                children: price.children,
            };

            prices.push(newPrice)
            return newPrice;
        },
        getPricing: function(){
            return prices;
        },
        getPricingById: function(id){
            return prices.find(price=> price.id === id);
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
    },
    {
        id:0,
        name:'Pricing Info',
        get pricing(){
            return createPricing.getPricing()
        }
    }
]

// ADDING PROJECTS
createProject.addProject({
    project_name: 'Salt&Light Blog',
    img: '/mockups/mockupBlog.avif',
    type: ' Blog',
    link: 'https://salt-light-blog.vercel.app/',
    gitHub:'',
})
createProject.addProject({
    project_name: 'The Grand Hotel',
    img: '/mockups/mockupHotel.avif',
    type: 'Landing Page',
    link: 'https://hotel-template-phi.vercel.app/',
    gitHub:'',
})
createProject.addProject({
    project_name: 'One Health',
    img: '/mockups/mockupOneHealth.avif',
    type: 'Landing Page',
    link: 'https://one-health-three.vercel.app/',
    gitHub:'',
})
createProject.addProject({
    project_name: 'One Hope',
    img: '/mockups/mockupOneHope.avif',
    type: 'Landing Page',
    link: 'https://one-hope-virid.vercel.app/',
    gitHub:'',
})
createProject.addProject({
    project_name: 'Salt&Light Ministries',
    img: '/mockups/mockupSalt&light.avif',
    type: 'Chrsitian Directory',
    link: 'https://salt-light-9h3y.vercel.app/',
    gitHub:'',
})
createProject.addProject({
    project_name: 'Torch',
    img: '/mockups/mockupTorch.avif',
    type: 'Landing Page',
    link: 'https://torch-one.vercel.app/',
    gitHub:'',
})

// ADING PRICING

createPricing.addPrice({
    type: 'Basic Package',
    price: 800,
    buttonText: "Choose Basic Package",
    children: [
        "1 User",
        "All UI components",
        "Lifetime access",
        "Free updates",
        "Use on 1 (one) project",
        "3 Months support",
      ]
})
createPricing.addPrice({
    type: 'Standard Package',
    price: 2800,
    buttonText: "Choose Standard Package",
    children: [
        "1 User",
        "All UI components",
        "Lifetime access",
        "Free updates",
        "Use on 1 (one) project",
        "3 Months support",
      ]
})
createPricing.addPrice({
    type: 'Premium Package',
    price: 5000,
    buttonText: "Choose Premuim Package",
    children: [
        "1 User",
        "All UI components",
        "Lifetime access",
        "Free updates",
        "Use on 1 (one) project",
        "3 Months support",
      ]
})
