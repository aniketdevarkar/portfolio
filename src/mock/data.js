import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aniket Devarkar', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'MERN stack developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aniket DevarKar',
  subtitle: 'full stack developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hello, I am Aniket Devarkar. I have completed my bachelors in Electronics and Telecommunication in year 2020. I started programming in my third year with C as my first programming language followed by C++. Eventually, I started to enjoy coding and solved many problems on hackerrank.com.',
  paragraphTwo:
    "I have learned front end technologies like React js , Bootstrap , HTML , CSS and Dom manipulation. For back-end I have learned nodejs with express as framework and MongoDb and MySql in database. Addition to this all, I have solved 500+ problems on Guvi's platform Codekata.",
  paragraphThree: "Link to Hacker Rank , Guvi's coekata and Resume.",
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'amazonClone.png',
    title: 'Amazon Clone',
    info:
      'This project is amazon clone which consists of two roles user and admin. Only admin can add new products to the website.',
    info2:
      'user has to be logged in to add product to the basket and to access checkout page.To login email verification is required also features like forgot password and reset password are added.',
    url: 'https://amazonclone-aniket.netlify.app/',
    repo: 'https://github.com/aniketdevarkar/amazonClone-frontend.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid-tracker.png',
    title: 'Covid19 Tracker',
    info:
      'It is covid19 tracker app which gets data from disease.sh api and display the data in the form of graphs , table , cards and maps.',
    info2:
      'Dropdown menu to select country to get corona virus cases. Map includes circle which are bigger where the number of cases are more and vice versa.',
    url: 'https://covid19-tracker-1a476.web.app/',
    repo: 'https://github.com/aniketdevarkar/covid19-Tracker.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'NetflixClone.png',
    title: 'Netflix Clone',
    info:
      'It is netflix clone which gets data from tmdb.org api and displayed according to the different categories.',
    info2:
      'Categories include Netflix Orignals ,Trending now,Action films and many more. After clicking it searches to find any releated videos and if found shows youtube video',
    url: 'https://netflix-clone-f90e9.web.app/',
    repo: 'https://github.com/aniketdevarkar/Netflix-Clone-using-reactjs-frontend-.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aniketdevarkar98@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/AniketDevarkar',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aniket-devarkar-1b75a914a',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aniketdevarkar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
