import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="flex max-w-[1600px] m-auto md:py-8 text-[chivo-bold-italic] leading-10" id="about">
      <div className="hidden md:block p-12">
        <Image
          src="/user.jpg" // Replace with the actual path to your image
          alt="Your Image"
          width={500} // Adjust the width as needed
          height={200} // Adjust the height as needed
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-full p-4">
        <em>
          {" "}
          <h2 className="text-3xl font-bold mb-4 text-[#03424C] md:py-10">
            <span className="text-[#F56607]">Hi, </span>This is Charles,
          </h2>
          <p className="leading-10">
            A final-year student at Sri Shakthi Institute of Engineering and
            Technology, I am passionate about leveraging technology to create
            innovative solutions. My journey as a front-end developer at
            Vakilsearch has been instrumental in honing my skills. Throughout my
            time there, I excelled in crafting visually appealing and
            user-friendly websites, utilizing the power of React and Next.js. My
            proficiency extends beyond front-end technologies to encompass
            programming languages such as Java and MySQL. This diverse skill set
            allows me to approach projects with a holistic perspective, ensuring
            seamless integration and optimal performance. Alongside my academic
            pursuits, I have actively sought opportunities for self-improvement.
            I proudly hold certifications from HackerRank, a testament to my
            commitment to continuous learning and the pursuit of excellence in
            the dynamic field of technology. I am excited about the prospect of
            contributing my skills and knowledge to future endeavors.
          </p>
        </em>
      </div>
    </div>
  );
};

export default Content;
