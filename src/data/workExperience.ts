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
        "Developed an algorithm to generate the best possible path for a running route using python and libraries such as osmnx and networkx.",
        "Assisted in creating a responsive application that incorporated APIs such as MapBox and Google Maps.",
        "Created a shopify dashboard that linked local delivery services to a client's RESTful API service to send local delivery orders to their React Native App.",
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
        "Consistently provided direct assistance to clients, utilizing a range of sophisticated troubleshooting techniques such as operating system repair, virus removal, and simple registry fixes. I have consistently delivered exceptional results in terms of resolving technical issues and restoring clients' devices to their optimal functionality.",
        "Certified by Apple to diagnose and repair Apple devices such as the latest iPhones, Apple Watches, iPads, and Mac computers. This certification has enabled me to deliver reliable and efficient service, with a focus on high-quality repairs and support.",
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
