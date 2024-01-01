import React from "react";

const Resume = () => {
  return (
    <div className="p-4 max-w-[1600px] m-auto" id="resume">
      <em>
        <h2 className="text-[#F56607] text-3xl font-bold mb-4 text-center pt-10">
          My Resume
        </h2>
        <p className="leading-10 text-center">
          If your browser does not support iframes. You can{" "}
          <a href="https://drive.google.com/file/d/111B-SpR5YVoV_8C4vR5UZjmo1JR9LKLR/view" className="text-[#F56607]">
            download the PDF
          </a>{" "}
          instead.
        </p>
      </em>
      <iframe
        src="Aakaash_charles_cv.pdf"
        title="PDF Viewer"
        className="w-full h-screen hidden md:block"
      />
    </div>
  );
};

export default Resume;
