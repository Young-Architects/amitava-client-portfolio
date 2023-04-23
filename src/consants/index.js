import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    angular,
    spring,
    bootstrap,
    threejs,
    firebase,
    iem,
    ardent,
    vinsys,
    iso,
    ibmacc,
    pentasoft,
    HMS,
    todo,
    tindog,
    cognizant,
    sunbd,
    sunjava,
    sunweb,
    peerless,
    coal
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
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: web,
    },
    {
      title: "Database Architect",
      icon: mobile,
    },
    {
      title: "Cloud Engineer",
      icon: backend,
    },
    {
      title: "Servers & APIs",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "spring",
      icon: spring,
    },
    // {
    //   name: "canva",
    //   icon: canva,
    // },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    {
      title: "Assistant Professor",
      company_name: " Institute of Engineering and Management (IEM)",
      icon: iem,
      iconBg: "#E6DEDD",
      date: "2016-2021",
      points: [
        "Conducting the classes for the individuals and corporate on the following technologies:",
        "Wipro specific Training on Java and Python",
        "Machine Learning with Python",
        "Blockchain projects completion",
      ],
    },
    {
      title: "Technical Trainer and Technical Head",
      company_name: "Wipro",
      icon: ardent,
      iconBg: "#E6DEDD",
      date: "2012-2016",
      points: [
        "Conducting the classes for the individuals and corporate on the following technologies:",
        "WIPRO, Cognizant and Accenture Java,J2EE and Oracle 11G Corporate Trainer",
        "Oracle 11G- SQL, PL/SQL classes conduction",
        "Java – SCJP 1.8, Web Component Development and SCBCD on J2EE platform",

      ],
    },
    {
      title: "Technical Trainer and Technical Head",
      company_name: "Cognizant",
      icon: vinsys,
      iconBg: "#E6DEDD",
      date: "2011-2012",
      points: [
        "Conducting the classes for the individuals and corporate on the following technologies:",
        "Cognizant Java,J2EE and Oracle 10G Corporate Trainer",
        "Oracle 10G- SQL,PL/SQL classes conduction",
        "Java – SCJP 1.6 ,Web Component Development and SCBCD on J2EE platform",
        "Business Component and Struts Based Development on J2EE platform"
      ],
    },
    {
      title: "Senior Developer and Senior Faculty",
      company_name: "Scope (ISO 9001-2000)",
      icon: iso,
      iconBg: "#E6DEDD",
      date: "2006 - 2011",
      points: [
        "Conducted training on Java, Oracle 10G SQL &, PL/SQL for TechMahindra and TCG-I Vega in recent past.",
        "Conducted training on Web Technology, HTML, JavaScript & Java for IBM. Evaluated by IBM as the trainer for Core Java and Web Component Development",
        "Conducted training on Web Technology, HTML, JavaScript & Java for Avita Software."
      ],
    },
    {
      title: "Senior Faculty",
      company_name: "IBMACE Barrackpore",
      icon: ibmacc,
      iconBg: "#E6DEDD",
      date: "2002 - 2006",
      points: [
        "Conducting training need analysis for the group employee",
        "Scheduling and conducting training to the group employee",
        "Coordinating the overall IT training need for the group employees and for the general students",
        "Batch scheduling",
        "Launching new batches",
        "Distributing classes",
        "Giving technical consultancies to various clients",
        "Courseware development",
        "Designing & implementing new courses according to the market demand",
      ],
    },
    {
      title: "Java Faculty” ",
      company_name: "PentaSoft Technology Limited",
      icon: pentasoft,
      iconBg: "#E6DEDD",
      date: "2006 - 2001",
      points: [
        "Conducting the classes on the following courses for the general students: Oracle 8i, Java, Active Server Pages with Interdev, Hyper Text Mark Up Language, Advanced Diploma in Web & e-Commerce Technology",
        "Overall Co-ordination of all the training programs",
        "Training need analysis for the corporate offices",
        "Giving technical support to the marketing and counseling team members",
        "Conducting technology based seminars"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "During his presentation in the classroom it has been observed that Mr. Chatterjee is thoroughly conversant with the subject and has immense capability and aptitude of teaching.",
      name: "Arun Majumder",
      designation: "Program Coordinator",
      company: "Indian Institute of Coal Management",
    },
    {
      testimonial:
        "Best Trainer of 2011 for the Campus Associates Training Program.",
      name: "Balakrishnan Shanmugam",
      designation: "Vice President",
      company: "Cognizant",
    },
    {
      testimonial:
        "Amitava is an excellent trainer and has recieved the best teacher award at IEM based on the feedbacks given by the students. It is really nice working with him.",
      name: "Abhishek Bhattacharya",
      designation: "Director",
      company: " Institute of Engineering and Management (IEM)",
    },
  ];
  
  const projects = [
    {
      name: "E-Hospital Management System",
      description:
        "E-Hospital-Management-System is a console based application which is built using Java and JDBC. This application helps in management of Patients, Doctors, Admin in a easy and comfortable way.",
      tags: [
        {
          name: "JAVA",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "JDBC",
          color: "pink-text-gradient",
        },
      ],
      image: HMS,
      source_code_link: "https://github.com/GFG-Hackathon/E-Hospital-Management-System",
    },
    {
      name: "Book-Shopping App",
      description:
        "Online Book Shopping App that enables users to browse a wide variety of books and shop online according to their taste.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJS",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/cloudsony999/BookShoppingApp_ARPAN_SUPRATIM",
    },
    {
      name: "Full-Stack Employee Management System",
      description:
        "Full-Stack Employee Management System made using Java-Spring Boot and Angular",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "Angular",
          color: "pink-text-gradient",  
        },
      ],
      image: tindog,
      source_code_link: "https://github.com/cloudsony999/EmployeeManagement",
    },
  ];

  const Certificate=[
    {
      name: "Cognizant",
      description:
        "Awarded as the Best Trainer of 2011",
      image: cognizant,
    },
    {
      name: "Sun Certification",
      description:
        "Has successfully Sun Certification as a Business Component Developer",
      image: sunbd,
    },
    {
      name: "Sun Certification",
      description:
        "Has successfully Sun Certification as a Programmer",
      image: sunjava,
    },
    {
      name: "Sun Certification",
      description:
        "Has successfully Sun Certification as a Web Component Developer",
      image: sunweb,
    },
    {
      name: "Peerless Group",
      description:
        "An Excellent Corporate Trainer Award from The Peerless Group",
      image: peerless,
    },
    {
      name: "Indian Institute of Coal Management",
      description:
        "An Interactive Trainer who has instilled great knowledge among the trainees.",
      image: coal,
    },
  ];

  export { services, technologies, experiences, testimonials, projects, Certificate };