type Job = {
  title: string;
  company: string;
  date: string;
  url: string;
  description: string[];
  img: string;
};

type WorkExperience = {
  header: string;
  jobs: Job[];
};

export const workExperience: WorkExperience = {
  header: "Work Experience",
  jobs: [
    {
      title: "Full Stack Engineer",
      company: "InsureScope",
      date: "October 2024 - Present",
      url: "https://www.insurescope.ai/",
      description: [
        "Built a SaaS platform from the ground up to analyze and compare legal contracts using AI.",
        "Responsible for the full development lifecycle—from backend architecture to frontend implementation.",
      ],

      img: "images/insurescope_logo.jpeg",
    },
    {
      title: "Software Developer",
      company: "Dev Youngstown",
      date: "May 2023 - May 2025",
      url: "https://www.youngstown.dev/",
      description: [
        "Responsible for developing MVPs (Minimum Viable Products) in an agile, remote work environment:",
        "Developed a cross-platform mobile application (React Native, Expo, Mapbox) used by student athletes to track their training regimen. Designed a REST API (FastAPI, PostgreSQL) along with an algorithm to generate running routes for users.",
        "Developed a web application (Vite, Mapbox, Material UI) used by organizations to display and annotate satellite drone images on a map. Designed a REST API (FastAPI, PostgreSQL) to handle organization permissions, and processing and uploading drone images to a tile server (Mapbox).",
        "Actively collaborated in project planning, onboarding, issue management, and code review.",
        "Deployed MVPs to Northflank, establishing a CI/CD release flow using GitHub Actions and Northflank’s pipeline webhook triggers.",
      ],

      img: "images/dev_ytown.png",
    },
    {
      title: "Software Developer",
      company: "Youngstown State University",
      date: "January 2023 - December 2024",
      url: "https://ysu.edu/",
      description: [
        "Contributed to a small team that completed 907 tickets within 8 months.",
        "Performed content changes to ysu.edu using technologies such as HTML5, CSS3, and JavaScript.",
        "Communicated directly with ticket issuers to fulfill their content change requests.",
      ],
      img: "images/ysu.jpeg",
    },
    {
      title: "Advanced Repair Agent",
      company: "Geek Squad",
      date: "May 2022 - December 2022",
      url: "https://www.bestbuy.com",
      description: [
        "Certified by Apple to diagnose and repair devices and stay up to date with the latest technology.",
        "Responsible for troubleshooting issues and repairing client devices on the OS And hardware level.",
      ],
      img: "images/gs.png",
    },
    {
      title: "Sales Associate",
      company: "Best Buy",
      date: "June 2021 - May 2022",
      url: "https://www.bestbuy.com",
      description: [
        "Kept up to date with the latest technology and leveraged my product knowledge to help guests make informed decisions.",
        "Played an integral role in product flow throughout the store.",
      ],
      img: "images/bb.jpeg",
    },
  ],
};
