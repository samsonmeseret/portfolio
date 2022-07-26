import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";
import storeproduct from "../assets/svg/projects/Screenshot-6.png";
import github from "../assets/svg/projects/Screenshot-8.png";
import api from "../assets/svg/projects/926f6aaba773.png";
import healeye from "../assets/svg/projects/harpreet-singh-ZI2Lv7jxmEM-unsplash.jpg";
import auth from "../assets/svg/projects/regularguy-eth-eNxYF6cexYU-unsplash.jpg";
import three from "../assets/svg/projects/three.svg";
import four from "../assets/svg/projects/four.svg";
import five from "../assets/svg/projects/five.svg";
import six from "../assets/svg/projects/six.svg";
import seven from "../assets/svg/projects/seven.svg";
import eight from "../assets/svg/projects/eight.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Product Store",
    projectDesc: "This project aims to build a product of company",
    tags: ["React", "CSS"],
    code: "https://github.com/samsonmeseret/React-Projects/tree/master/samistore",
    demo: "https://samistore1.netlify.app/",
    image: storeproduct,
  },
  {
    id: 2,
    projectName: "Github Users",
    projectDesc:
      "This project is all about utilizing external API, github API.",
    tags: ["React", "React-Loader", "CSS"],
    code: "https://github.com/samsonmeseret/React-Projects/tree/master/Github-Users",
    demo: "https://sami-github-api.netlify.app",
    image: github,
  },
  {
    id: 5,
    projectName: "HealEye, Patient Management System",
    projectDesc:
      "complete MERN App, consisting of patient management, booking, expense Stats and More.",
    tags: ["React", "NodeJs", "Express", "MongoDB", "Material-UI"],
    code: "https://github.com/samsonmeseret/Project-X",
    demo: "https://github.com/samsonmeseret/Project-X",
    image: healeye,
  },
  {
    id: 3,
    projectName: "AlgoSpace, Modern E-Learning Platform",
    projectDesc:
      "Complete E-Learning System, with Resource, multiple User Accounts Roles, Authentication and Authorization ",
    tags: ["NodeJs", "Express", "MongoDB", "Pug", "JWT", "Node-Mailer"],
    code: "https://github.com/samsonmeseret/algoSpace",
    demo: "https://github.com/samsonmeseret/algoSpace",
    image: three,
  },
  {
    id: 4,
    projectName: "E-Learning, API",
    projectDesc:
      "This project is a Complete E-Learning API, to be consumed by frontEnd library's like ReactJs, Angular or Other",
    tags: ["NodeJs", "Express", "MongoDB", "JWT", "Node-Mailer"],
    code: "https://github.com/samsonmeseret/E-Learning-API",
    demo: "https://github.com/samsonmeseret/E-Learning-API",
    image: api,
  },
  {
    id: 6,
    projectName: "Store, API",
    projectDesc: "products store API",
    tags: ["NodeJS", "MongoDB", "Express"],
    code: "https://github.com/samsonmeseret/Node-Projects/tree/master/Store%20API",
    demo: "https://github.com/samsonmeseret/Node-Projects/tree/master/Store%20API",
    image: api,
  },
  {
    id: 7,
    projectName: "Authentication System",
    projectDesc: "Session based authentication system",
    tags: ["NodeJS", "Express", "PassportJS", "EJS", "Bootstrap"],
    code: "https://github.com/samsonmeseret/Node-Projects/tree/master/Authentication",
    demo: "https://github.com/samsonmeseret/Node-Projects/tree/master/Authentication",
    image: auth,
  },
  // {
  //   id: 8,
  //   projectName: "Car Pooling System",
  //   projectDesc:
  //     "The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution",
  //   tags: ["Flutter", "React"],
  //   code: "",
  //   demo: "",
  //   image: eight,
  // },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
