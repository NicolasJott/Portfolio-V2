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
      title: "Full-stack Software Developer",
      company: "Open party Software",
      date: "May 2024 - Present",
      url: "https://www.openpartysoftware.com/",
      description: [
        "Responsible for separating Angular applications into smaller applications (Admin, Customer, Integration).",
        "Developed a task scheduler service (NestJS) to manage customer participation and payment.",
        "Wrote documentation submitted to patent laying out the methodology of an important feature in the application.",
      ],

      img: "images/ops.png",
    },
    {
      title: "Software Developer",
      company: "Dev Youngstown",
      date: "May 2023 - Present",
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
      date: "December 2022 - Present",
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
      url: "https://www.bestbuy.com/site/services/geek-squad/pcmcat138100050018.c?id=pcmcat138100050018&PSRCH",
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
