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
      title: "Software Engineer Intern",
      company: "Dev Youngstown",
      date: "May 2023 - Present",
      url: "https://www.youngstown.dev/",
      description: [
        "Developed a RESTful API using Fast API and PostgreSQL to compliment a React Native Expo mobile application that generates running routes for runners that I also helped develop.",
        "Improved route generation algorithm by more than 200% in terms of speed and accuracy.",
        "Developed a full-stack web application using Fast API, PostgreSQL, and Vite as an order management system, and admin dashboard for delivery orders.",
        "Developed a Shopify app that utilizes Shopify's Parter API to store Shopify orders in a RESTful API to be fulfilled by drivers in a mobile application.",
      ],

      img: "images/dev_ytown.png",
    },
    {
      title: "Software Engineer",
      company: "Youngstown State University",
      date: "December 2022 - Present",
      url: "https://ysu.edu/",
      description: [
        "Responsible for addressing incoming tickets pertaining to the modification of the Youngstown State University website, utilizing the Drupal platform.",
        "Utilized technologies including HTML5, CSS3, and JavaScript to execute modifications to the website as per the requests received.",
        "These requests have entailed an array of updates such as adding or updating files, hyperlinks, information, and staff lists.",
        "Moreover, I have demonstrated the ability to create new web pages within the Youngstown State University website, using my proficiency in the aforementioned technologies to ensure optimal outcomes.",
      ],
      img: "images/ysu.jpeg",
    },
    {
      title: "Advanced Repair Agent",
      company: "Geek Squad",
      date: "May 2022 - December 2022",
      url: "https://www.bestbuy.com/site/services/geek-squad/pcmcat138100050018.c?id=pcmcat138100050018&PSRCH",
      description: [
        "Consistently delivered direct client assistance, employing diverse troubleshooting techniques including OS repair, virus removal, and basic registry fixes. Achieved exceptional results in resolving technical issues and restoring devices to optimal functionality.",
        "Apple-certified to diagnose and repair a range of Apple devices, including the latest iPhones, Apple Watches, iPads, and Mac computers. Delivering reliable, high-quality service focused on efficient repairs and support.",
        "I have demonstrated my exceptional teaching skills, working with clients who are seeking to learn how to use a computer effectively.",
        "my familiarity with computer BIOS, command line tools, and the Windows registry has allowed me to effectively troubleshoot and improve clients' devices, leading to enhanced performance and user experience.",
      ],
      img: "images/gs.png",
    },
    {
      title: "Sales Associate",
      company: "Best Buy",
      date: "February 2022 - May 2022",
      url: "https://www.bestbuy.com",
      description: [
        "Leveraged my extensive product knowledge to assist customers in making well-informed purchasing decisions.",
        "I played an instrumental role in enhancing the front-end flow of the store, ensuring that customers have a seamless and satisfying experience.",
      ],
      img: "images/bb.jpeg",
    },
    {
      title: "Product Flow",
      company: "Best Buy",
      date: "May 2021 - February 2022",
      url: "https://www.bestbuy.com",
      description: [
        "Managed complex logistics, including receipt of shipments, stock maintenance, and order fulfillment, ensuring efficient operations and exceptional customer service.",
        "Gained valuable insight into the interplay between inventory management, logistics, and customer service, contributing to store success.",
      ],
      img: "images/bb.jpeg",
    },
  ],
};
