import React from "react";
import ResumeName from "../component/ResumeName";
import ResumePdf from "../data/Resume.pdf";
import Images from "../data/00012.jpg";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Sameer-PDF-File";

    link.href = ResumePdf;

    link.click();
  };
  return (
    <>
    <div >
      <ResumeName />
      <div >
        <div className="p-4 w-full md:h-auto h-[60vh] md:block flex flex-col justify-center items-center">
          <img className="md:w-[60%] md:h-auto h-full w-full m-auto" src={Images} />
        </div>
        <div className="flex justify-center items-center p-2">
          <button className="w-[40%] text-md font-semibold bg-blue-900 text-white rounded-sm" onClick={handleDownload}>Download Resume</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Resume;
