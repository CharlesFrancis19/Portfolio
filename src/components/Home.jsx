import React from 'react';

const HomePage = () => {
  return (
    <div className="p-4 max-w-[1600px] m-auto text-[chivo-bold-italic] leading-10" id="home">
      <h2 className="text-4xl font-bold mb-4 text-center text-[chivo-bold-italic] text-[#F56607] pb-10"><em>Welcome to My Portfolio!</em></h2>
      <p className="text-lg mb-6 leading-10 pb-8">
  <em>Thank you for visiting! Within this portfolio, you'll discover a comprehensive overview of my skills, projects, and experiences. My journey in the realm of technology and creativity is reflected in the diverse range of projects showcased here. From web development to software engineering, each endeavor is a testament to my passion and commitment.
  Dive into the details of my skill set, ranging from front-end technologies like React.js to back-end frameworks such as Node.js. Explore the projects section to see real-world applications and solutions I've crafted. Additionally, my resume provides a detailed account of my professional journey, highlighting key achievements and milestones.
  As technology is ever-evolving, I strive to stay at the forefront of innovation. This portfolio serves as a dynamic canvas, constantly updated with the latest projects and endeavors. I invite you to navigate through the sections, discover my story, and witness the fusion of creativity and technical expertise.
  Feel free to reach out through the contact section for inquiries, collaborations, or just to say hello. Your presence here is appreciated, and I hope you enjoy the exploration of this digital space!</em>
</p>

      <div>
        <h3 className="text-2xl font-bold mb-2  text-[#F56607]"><em>What You Can Find:</em></h3>
        <ul className="list-disc pl-6 pb-10">
          <em><li>Home - You are here!</li>
          <li>About - Learn more about me and my background.</li>
          <li>Resume - View my professional experience and qualifications.</li>
          <li>Contact - Get in touch with me.</li></em>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
