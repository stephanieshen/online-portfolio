export interface DataItem {
    title: string;
    classes: string;
    icon?: string;
    subtitle?: string;
    description?: string;
    url?: string;
    bgImage?: string;
    bgPositionClass?: string;
}

export const SOCIALS: DataItem[] = [
    { 
        title: 'linkedin',
        icon: 'linkedin.svg',
        classes: 'bg-neon-pink',
        url: 'https://www.linkedin.com/in/stephanieshensabado/'
    },
    { 
        title: 'github',
        icon: 'github.svg',
        classes: 'bg-dusty-lavander',
        url: 'https://github.com/stephanieshen'
    },
    { 
        title: 'behance',
        icon: 'behance.svg',
        classes: 'bg-dusty-pink',
        url: 'https://www.behance.net/stephansabado'
    },
    { 
        title: 'email',
        icon: 'email.svg',
        classes: 'bg-amber-glow',
        url: ''
    }
];

export const WHAT_I_DO: DataItem[] = [
    {
        title: 'Responsive UI Development',
        description: 'I take your designs and bring them to life by transforming mockups into fully responsive websites.',
        icon: 'web-mob-devices.svg',
        classes: 'bg-dusty-pink'
    },
    {
        title: 'API Integration',
        description: 'I integrate front-end apps with back-end services via APIs to create smooth, dynamic applications.',
        icon: 'api-integ.svg',
        classes: 'bg-amber-glow'
    },
    {
        title: 'Front-end Development',
        description: 'I build dynamic, user-friendly interfaces with React and Angular for smooth web experiences.',
        icon: 'web-code.svg',
        classes: 'bg-dusty-lavander'
    }
];

export const TOOLS: DataItem[] = [
    { title: 'Angular', icon: 'angular.svg', classes: '' },
    { title: 'ReactJS', icon: 'reactjs.svg', classes: '' },
    { title: 'Javascript', icon: 'javascript.svg', classes: '' },
    { title: 'HTML', icon: 'html.svg', classes: '' },
    { title: 'CSS', icon: 'css.svg', classes: '' },
    { title: 'SCSS', icon: 'scss.svg', classes: '' },
    { title: 'RxJS', icon: 'rxjs.svg', classes: '' },
    { title: 'Jasmine', icon: 'jasmine.svg', classes: '' },
    { title: 'Git', icon: 'git.svg', classes: '' },
    { title: 'Figma', icon: 'figma.svg', classes: '' }
];

export const PROJECTS: DataItem[] = [
    {
        title: 'title-labada.svg',
        subtitle: 'UI/UX Concept',
        description: 'This UI/UX concept is for a user-friendly laundry app that allows users to easily find nearby laundry shops, book services, and arrange pickup and delivery of their laundry.',
        url: 'https://www.behance.net/gallery/154166643/LABADA-UIUX-Concept',
        bgImage: 'project-labada.png',
        classes: 'bg-amber-glow'
    },
    {
        title: 'title-evergreen.svg',
        subtitle: 'UI/UX Concept',
        description: 'A user-friendly UI/UX concept for an online plant shopping app, featuring a clean layout, and interactive plant care guides.',
        url: 'https://www.behance.net/gallery/162786899/Plant-store-app',
        bgImage: 'project-evergreen.png',
        classes: 'bg-dusty-pink text-white'
    },
    {
        title: 'title-dev-portfolio.svg',
        subtitle: 'UI Design & Next.js',
        description: 'A modern, responsive developer portfolio built with Next.js. A minimalist design to showcase projects and skills.',
        url: 'https://nextjs-practice-rose-rho.vercel.app/',
        bgImage: 'project-dev-portfolio.png',
        classes: 'bg-dusty-lavander text-white'
    },
    {
        title: 'title-expense-tracker.svg',
        subtitle: 'Next.js',
        description: 'A user-friendly UI/UX concept for an online plant shopping app, featuring a clean layout, and interactive plant care guides.',
        url: 'https://expense-tracker-app-iota.vercel.app/',
        bgImage: 'project-expense-tracker.png',
        classes: 'bg-amber-glow'
    },
    {
        title: 'title-todo.svg',
        subtitle: 'Angular',
        description: 'A To-Do list app using Angular. It allows users to  add, edit, and track progress with interactive checkboxes.',
        url: 'https://todo-three-roan.vercel.app/todo',
        bgImage: 'project-todo.png',
        classes: 'bg-dusty-pink text-white',
    },
    {
        title: 'title-my-portfolio.svg',
        subtitle: 'Angular',
        description: 'A personal portfolio built with Angular, showcasing my skills, projects, and experience.',
        url: '',
        bgImage: 'project-my-portfolio.png',
        bgPositionClass: 'bg-center',
        classes: 'bg-dusty-lavander text-white'
    },
    {
        title: 'title-household-profiling.svg',
        subtitle: 'Mapbox & Angular (WIP)',
        description: 'A work-in-progress household profiling app that allows users to add member data and plot household markers on an interactive map.',
        url: 'https://github.com/stephanieshen/hh-profiling',
        bgImage: 'project-hh.png',
        classes: 'bg-amber-glow'
    }
];
