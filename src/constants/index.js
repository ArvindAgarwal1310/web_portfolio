import {
  AdaanPradhan,
  BrainT,
  LinkedIn,
  LyraHome,
  StockAnalysis,
  analyser360,
  aws,
  backend,
  c,
  creator,
  css,
  datadive_ai,
  flutter,
  git,
  github2,
  html,
  invsto,
  java,
  javascript,
  kmit,
  mobile,
  mongodb,
  nodejs,
  python,
  reactjs,
  resume,
  sme,
  tailwind,
  threejs,
  tutor,
  web
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "poc",
      title: "Resume",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Problem Solving",
      icon: backend,
    },
    {
      title: "Machine Learning",
      icon: creator,
    },
  ];
  

  const points = [
    {
      title:"github",
      icon: github2,
    },
    {
      title:"linkedin",
      icon: LinkedIn,
    },
    {
      title:"resume",
      icon: resume,
    },
  ]
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "AWS",
      icon: aws,
    }

  ];
  
  const experiences = [
    {
      title: "SDE Intern",
      company_name: "DataDive AI",
      icon: datadive_ai,
      iconBg: "white",
      date: "February 2024 - Present",
      points: [
        "Spearheaded end-to-end MVP development from scratch, architecting robust back-end systems powered by cloud services and tailored database solutions for optimal performance and scalability.",
        "Implemented voice-conversation support and AI-driven cross-selling, elevating user engagement anddriving sales growth.",
        "Integrated with third-party apps-APIs(delivery services, payment gateways-cashfree, meta conversations) for enhanced functionality.",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Invsto",
      icon: invsto,
      iconBg: "#383E56",
      date: "October 2023 - March 2024",
      points: [
        "Developed, refined, and optimized more than 10 high-performance, reusable components for Backend systems, driving 30% improvement in processing speed using Python and Fast-API.",
        "Drove innovation in backend architecture to ensure the seamless execution of trading activities.",
        "Partnered with cross-functional teams to enhance user experience and functionality.",
      ],
    },
    {
      title: "Tutor",
      company_name: "Self",
      icon: tutor,
      iconBg: "#383E56",
      date: "August 2022 - February 2023",
      points: [
        "Provided guidance and tutoring to high school students with the aim of enhancing their comprehension of subjects including Logic,Mathematics, Physics, and Chemistry.",
        "Acquired the ability to assume accountability for my decisions and my teaching philosophy.",
        "Enhanced my communication abilities through interactions with individuals of varying age range.",
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "IFS - Genesis",
      icon: kmit,
      iconBg: "#E6DEDD",
      date: "February 2022 - April 2022",
      points: [
        "Assisted new staﬀ members at Zensar Technology (Los Angeles) in enhancing their proﬁciency in Python programming.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Engaged in my inaugural technical internship, acquiring international exposure in the process.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Subject Matter Specialist",
      company_name: "CodeOfFun",
      icon: sme,
      iconBg: "#FFFFFF",
      date: "July 2021 - September 2021",
      points: [
        "Oﬀered solutions to a multitude of online inquiries and challenges pertaining to Physics and Mathematics, which were posted on diverse educational platforms.",
        "Resolved questions of competitive diﬃculty and provided online explanations to fellow students.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Brain Tumour Segmentation",
      description:
        "Mobile Based Application to Segment Brain Tumour using CT-Scan. Deep Learning Model-UNET is trained to segment tumour anddeployed using ﬂask API and AWS, accessible on a Flutter Application.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "Flutter",
          color: "pink-text-gradient",
        },
        {
          name: "AWS",
          color: "blue-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "green-text-gradient",
        },
      ],
      image: BrainT,
      source_code_link: "https://github.com/ArvindAgarwal1310/Brain_Tumour_Segmentation",
      documentation : "/BrainTumourSegmentation.pdf"
    },
    {
      name: "Lyra - Voice Based Personal Assistant ",
      description:
        "Lyra is a desktop application that understand user queries spoken to them, and fetches the response, speaks it out and displays in a Chat-message interface",
      tags: [
        {
          name: "Electron-JS",
          color: "blue-text-gradient",
        },
        {
          name: "Speech-Recognition",
          color: "green-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
        {
          name: "API",
          color: "blue-text-gradient",
        },
      ],
      image: LyraHome,
      source_code_link: "https://github.com/ArvindAgarwal1310/AI-Voice-Assistant--LYRA",
    },
    {
      name: "Adaan Pradhan",
      description:
        "MERN website for students to book laboratory around them to perform lab activities, dynamically updated laboratory availabilities.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "Database",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap-5",
          color: "pink-text-gradient",
        },
      ],
      image: AdaanPradhan,
      source_code_link: "https://github.com/ArvindAgarwal1310/Adaan-Pradhan",
    },
    {
      name: "Analyser 360",
      description:
        "Analysis csv data and creates a statistical-report based on the data provided in csv, presented as a pdf with visuals like pie charts, bargraphs.",
      tags: [
        {
          name: "Pandas Numpy",
          color: "blue-text-gradient",
        },
        {
          name: "Resource Management",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: analyser360,
      source_code_link: "https://github.com/ArvindAgarwal1310",
    },
    {
      name: "Stock Analysis & Trading Strategies",
      description:
        "Data insertion into a MySQL database and the creation of trading strategies for stock data analysis, visual representations of stock prices with trading signals.",
      tags: [
        {
          name: "Pandas",
          color: "blue-text-gradient",
        },
        {
          name: "matplotlib",
          color: "green-text-gradient",
        },
        {
          name: "Technical Analysis",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
      ],
      image: StockAnalysis,
      source_code_link: "https://github.com/ArvindAgarwal1310/Invsto-assignment",
      documentation: "https://mango-fish-bf0.notion.site/Data-Analysis-and-Trading-Strategies-4b0e45a58d5b44bc87e95f64c297b067",
    }
  ];
  
  export { experiences, points, projects, services, technologies, testimonials };

