import { assets } from "../assets/assets";

const courseData = [
  {
    id: 1,
    title: "React JS",
    description: {
      Title: "Learn React from scratch",
      features: {
        dec: "Understand the fundamentals of React.js and build dynamic web applications.",
        points: [
          "Component-based architecture",
          "Virtual DOM",
          "State management",
          "Event handling",
          "Lifecycle methods",
        ],
      },
    },
    image : "https://i.pinimg.com/1200x/ab/f0/6d/abf06de6dca3227d37b02339e1abe12a.jpg",
    author: "John Doe",
    rating: 4.8,
    stars: 5,
    reviews: 340,
    price: 79.99,
    discount: 30,
    discount_days: 4,
    courseStructure: [
      {
        sectionTitle: "1. Getting Started with React",
        lectures: [
          {
            lectureTitle: "Introduction to React",
            duration_minutes: 8,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          },
          {
            lectureTitle: "React Installation Guide",
            duration_minutes: 12,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
          },
          {
            lectureTitle: "JSX and Rendering",
            duration_minutes: 15,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=9D1x7-2FmTA",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    description: {
      Title: "From Basics to Advanced",
      features: {
        dec: "Master JavaScript fundamentals and advanced ES6+ concepts for web development.",
        points: [
          "Syntax and Operators",
          "DOM Manipulation",
          "ES6 Modules",
          "Async/Await",
          "Promises",
        ],
      },
    },
    image : "https://i.pinimg.com/1200x/ab/f0/6d/abf06de6dca3227d37b02339e1abe12a.jpg",
    author: "Sarah Lee",
    rating: 4.7,
    stars: 5,
    reviews: 220,
    price: 59.99,
    discount: 25,
    discount_days: 3,
    courseStructure: [
      {
        sectionTitle: "1. Introduction to JavaScript",
        lectures: [
          {
            lectureTitle: "JS Fundamentals",
            duration_minutes: 10,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
          },
          {
            lectureTitle: "Understanding Variables and Scope",
            duration_minutes: 14,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            lectureTitle: "Functions and Arrays",
            duration_minutes: 20,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=Mus_vwhTCq0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "HTML & CSS Crash Course",
    description: {
      Title: "Build Modern Websites",
      features: {
        dec: "Learn how to structure web pages and style them beautifully with HTML5 and CSS3.",
        points: [
          "Semantic HTML",
          "Flexbox and Grid",
          "Responsive Design",
          "CSS Animations",
          "Practical Projects",
        ],
      },
    },
    image : "https://i.pinimg.com/1200x/ab/f0/6d/abf06de6dca3227d37b02339e1abe12a.jpg",
    author: "Alex Johnson",
    rating: 4.9,
    stars: 5,
    reviews: 410,
    price: 39.99,
    discount: 40,
    discount_days: 6,
    courseStructure: [
      {
        sectionTitle: "1. Building Your First Web Page",
        lectures: [
          {
            lectureTitle: "Introduction to HTML",
            duration_minutes: 9,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
          },
          {
            lectureTitle: "CSS Fundamentals",
            duration_minutes: 11,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
          },
          {
            lectureTitle: "Flexbox & Grid Layouts",
            duration_minutes: 18,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Python for Beginners",
    description: {
      Title: "Learn Python Programming Easily",
      features: {
        dec: "A beginner-friendly course to understand Python fundamentals with real projects.",
        points: [
          "Variables & Data Types",
          "Loops & Conditions",
          "Functions",
          "Modules",
          "Basic Projects",
        ],
      },
    },
    image : "https://i.pinimg.com/1200x/ab/f0/6d/abf06de6dca3227d37b02339e1abe12a.jpg",
    author: "Michael Clark",
    rating: 4.6,
    stars: 5,
    reviews: 280,
    price: 69.99,
    discount: 35,
    discount_days: 5,
    courseStructure: [
      {
        sectionTitle: "1. Python Basics",
        lectures: [
          {
            lectureTitle: "Installing Python and Setup",
            duration_minutes: 7,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=YYXdXT2l-Gg",
          },
          {
            lectureTitle: "Writing Your First Program",
            duration_minutes: 10,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=rfscVS0vtbw",
          },
          {
            lectureTitle: "Data Types and Operators",
            duration_minutes: 17,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=HGOBQPFzWKo",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Node.js Backend Development",
    description: {
      Title: "Build Scalable Server Applications",
      features: {
        dec: "Learn Node.js and Express.js to develop powerful server-side applications.",
        points: [
          "Node.js Basics",
          "Express Framework",
          "APIs and Routing",
          "MongoDB Integration",
          "Authentication",
        ],
      },
    },
    image : "https://i.pinimg.com/1200x/ab/f0/6d/abf06de6dca3227d37b02339e1abe12a.jpg",
    author: "Daniel Kim",
    rating: 4.8,
    stars: 5,
    reviews: 310,
    price: 84.99,
    discount: 20,
    discount_days: 2,
    courseStructure: [
      {
        sectionTitle: "1. Introduction to Node.js",
        lectures: [
          {
            lectureTitle: "Node.js Overview",
            duration_minutes: 12,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=Oe421EPjeBE",
          },
          {
            lectureTitle: "Creating Your First Server",
            duration_minutes: 18,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
          },
          {
            lectureTitle: "Understanding Express.js",
            duration_minutes: 14,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=L72fhGm1tfE",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "MongoDB Essentials",
    description: {
      Title: "Learn NoSQL Database Design",
      features: {
        dec: "Understand MongoDB, its data models, and how to integrate it with applications.",
        points: [
          "CRUD Operations",
          "Schema Design",
          "Aggregation",
          "Indexing",
          "Integration with Node.js",
        ],
      },
    },
    image : "https://i.pinimg.com/1200x/ab/f0/6d/abf06de6dca3227d37b02339e1abe12a.jpg",
    author: "Rachel Adams",
    rating: 4.5,
    stars: 5,
    reviews: 190,
    price: 49.99,
    discount: 15,
    discount_days: 3,
    courseStructure: [
      {
        sectionTitle: "1. MongoDB Basics",
        lectures: [
          {
            lectureTitle: "What is MongoDB?",
            duration_minutes: 8,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=ofme2o29ngU",
          },
          {
            lectureTitle: "Installing MongoDB",
            duration_minutes: 10,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=5e1PLV-L8qA",
          },
          {
            lectureTitle: "CRUD Operations in MongoDB",
            duration_minutes: 16,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=excRbA7fy_A",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "UI/UX Design with Figma",
    description: {
      Title: "Design Beautiful User Interfaces",
      features: {
        dec: "Learn Figma to design interactive, user-friendly web and mobile interfaces.",
        points: [
          "Wireframing",
          "Prototyping",
          "Typography",
          "Color Theory",
          "User Testing",
        ],
      },
    },
    image : "https://i.pinimg.com/1200x/ab/f0/6d/abf06de6dca3227d37b02339e1abe12a.jpg",
    author: "Lisa Brown",
    rating: 4.9,
    stars: 5,
    reviews: 420,
    price: 64.99,
    discount: 25,
    discount_days: 4,
    courseStructure: [
      {
        sectionTitle: "1. Figma Basics",
        lectures: [
          {
            lectureTitle: "Introduction to Figma",
            duration_minutes: 6,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=4W4LvJnNegA",
          },
          {
            lectureTitle: "Creating Your First Wireframe",
            duration_minutes: 10,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=jk1T0CdLxwU",
          },
          {
            lectureTitle: "Building a UI Kit",
            duration_minutes: 18,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Next.js Full Course",
    description: {
      Title: "Server-Side Rendering Made Easy",
      features: {
        dec: "Learn how to build modern, SEO-friendly React applications using Next.js.",
        points: [
          "SSR and SSG",
          "API Routes",
          "Dynamic Routing",
          "Deploying on Vercel",
          "Optimizing Performance",
        ],
      },
    },
    image : "https://i.pinimg.com/1200x/ab/f0/6d/abf06de6dca3227d37b02339e1abe12a.jpg",
    author: "Tom Harris",
    rating: 4.8,
    stars: 5,
    reviews: 330,
    price: 89.99,
    discount: 30,
    discount_days: 5,
    courseStructure: [
      {
        sectionTitle: "1. Introduction to Next.js",
        lectures: [
          {
            lectureTitle: "Why Next.js?",
            duration_minutes: 10,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=1WmNXEVia8I",
          },
          {
            lectureTitle: "Pages and Routing",
            duration_minutes: 14,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=qbW6FRbaSl0",
          },
          {
            lectureTitle: "Fetching Data in Next.js",
            duration_minutes: 20,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=MFuwkrseXVE",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "TypeScript for React Developers",
    description: {
      Title: "Enhance React Apps with Type Safety",
      features: {
        dec: "Add strong typing to your React projects using TypeScript.",
        points: [
          "TypeScript Basics",
          "Interfaces & Generics",
          "Type Checking Props",
          "Custom Hooks with TS",
          "Advanced Patterns",
        ],
      },
    },
    image : "https://i.pinimg.com/1200x/ab/f0/6d/abf06de6dca3227d37b02339e1abe12a.jpg",
    author: "Chris Allen",
    rating: 4.7,
    stars: 5,
    reviews: 260,
    price: 74.99,
    discount: 20,
    discount_days: 3,
    courseStructure: [
      {
        sectionTitle: "1. TypeScript Fundamentals",
        lectures: [
          {
            lectureTitle: "Introduction to TypeScript",
            duration_minutes: 9,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=ahCwqrYpIuM",
          },
          {
            lectureTitle: "Working with Interfaces",
            duration_minutes: 13,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=gp5H0Vw39yw",
          },
          {
            lectureTitle: "Using TS in React",
            duration_minutes: 19,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=jrKcJxF0lAU",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Full Stack MERN Project",
    description: {
      Title: "Build Complete Applications",
      features: {
        dec: "Learn how to integrate MongoDB, Express, React, and Node into one powerful app.",
        points: [
          "Project Setup",
          "API Integration",
          "Frontend + Backend Connection",
          "Authentication",
          "Deployment",
        ],
      },
    },
    image : "https://i.pinimg.com/1200x/ab/f0/6d/abf06de6dca3227d37b02339e1abe12a.jpg",
    author: "Kevin Parker",
    rating: 5.0,
    stars: 5,
    reviews: 520,
    price: 99.99,
    discount: 35,
    discount_days: 7,
    courseStructure: [
      {
        sectionTitle: "1. Full Stack Overview",
        lectures: [
          {
            lectureTitle: "What is MERN Stack?",
            duration_minutes: 8,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
          },
          {
            lectureTitle: "Connecting Frontend & Backend",
            duration_minutes: 20,
            isFree: false,
            videoUrl: "https://www.youtube.com/watch?v=ngc9gnGgUdA",
          },
          {
            lectureTitle: "Deploying to Production",
            duration_minutes: 18,
            isFree: true,
            videoUrl: "https://www.youtube.com/watch?v=1RHDhtbqo94",
          },
        ],
      },
    ],
  },
];

export default courseData;





export const buyers = [
    {
      id: 1,
      name: "Ali Khan",
      date: "12 August 2024",
      amount: "$30",
      profile: assets.profile_img,
    },
    {
      id: 2,
      name: "Sara Ahmed",
      date: "15 August 2024",
      amount: "$45",
      profile: assets.profile_img,
    },
    {
      id: 3,
      name: "Usman Malik",
      date: "20 August 2024",
      amount: "$50",
      profile: assets.profile_img,
    },
    {
      id: 4,
      name: "Hina Shah",
      date: "25 August 2024",
      amount: "$25",
      profile: assets.profile_img,
    },
    {
      id: 5,
      name: "Bilal Hussain",
      date: "30 August 2024",
      amount: "$60",
      profile: assets.profile_img,
    },
  ];







const backEnd = async () => {  
  try {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

backEnd();