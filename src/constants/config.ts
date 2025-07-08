type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Aman Singh — Full Stack Developer Portfolio",
    fullName: "Aman Singh",
    email: "aman.singh.applicant@gmail.com",
  },
  hero: {
    name: "Aman Singh",
    p: [
      "I build responsive web apps,",
       "and scalable backend solutions."
      ,
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a full-stack developer with strong expertise in TypeScript, JavaScript, and frameworks like React, Node.js, and MongoDB. I’ve worked on both front-end and back-end projects during internships at Elevate Labs and CodTech IT Solutions. I’m passionate about clean code, responsive UI, and building apps that deliver value. Let’s connect and turn your vision into a working solution.`,
    },
    experience: {
      p: "Where I've worked",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `These projects highlight my hands-on experience with real-world development. They reflect my problem-solving skills, ability to work with various technologies, and deliver functional, responsive web applications. Check out the live demos and GitHub code for each.`,
    },
  },
};
