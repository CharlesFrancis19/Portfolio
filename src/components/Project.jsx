import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Bank Managing System",
      text: "As part of this project, I developed a sophisticated bank management system using JDBC (Java Database Connectivity). The system serves the crucial purpose of efficient and secure bank management, offering features such as detailed tracking of transactions, withdrawal dates, and transaction timings. This implementation not only provides a comprehensive record-keeping system for the bank but also enhances the user experience by presenting clear and detailed information. The JDBC technology ensures seamless communication with the database, resulting in a robust and reliable application for effective bank management.",
    },
    { 
      id: 2,
      title: "Cash Counter AI",
      text: "In this innovative project, I leveraged the power of React to develop an intelligent tool for cash counting. The system utilizes advanced color recognition algorithms tailored to the distinct color variants in Indian rupee notes. Using the webcam, the application accurately counts and identifies different denominations of currency. This not only streamlines the cash counting process but also introduces an element of automation, reducing the likelihood of errors. The Cash Counter AI project showcases my proficiency in web technologies, computer vision, and my commitment to creating practical solutions that blend technology with real-world applications."
    },    
    { 
      id: 3,
      title: "SEO Developer",
      text: "As a part of my journey as an Developer, I utilized the powerful combination of Node.js and the Google API to create an effective SEO tool. This tool seamlessly connects with Google Sheets, extracting recommended SEO strategies and transforming them into a structured JSON file. By doing so, it simplifies the process of optimizing webpages for search engines. This project not only showcases my technical skills in Node.js and API integration but also underscores my commitment to enhancing the visibility and performance of websites through effective SEO practices. The SEO Developer project stands as a testament to my dedication to delivering practical solutions for web optimization."
    },    
    { 
      id: 4,
      title: "Biker Service System",
      text: "In the creation of the Biker Service System, I developed a dynamic website for a bike service company using the Next.js software. The primary goal of this project was to enhance customer engagement and efficiently manage data related to bike services. Leveraging the capabilities of Next.js, the website not only provides a seamless and responsive user experience but also incorporates features to streamline service data management. The Biker Service System represents my commitment to utilizing cutting-edge technologies to elevate online presence, engage customers effectively, and optimize data management processes for service-oriented businesses."
    }    
  ];

  return (
    <div className="max-w-[1600px] m-auto">
      <h2 className="text-[#F56607] text-3xl font-bold mb-4 text-center py-10">
        <em>My Projects</em>
      </h2>
      <div className="grid md:grid-cols-2 gap-4 p-4 ">
        {projects.map((project) => (
          <div key={project.id} className="border p-4">
            <em>
              <h3 className="text-xl font-bold text-[#03424C] pb-4">
                {project.title}
              </h3>
              <p className="leading-6">{project.text}</p>
            </em>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
