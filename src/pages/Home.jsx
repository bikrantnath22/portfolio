import React from "react";
import { Link } from "react-router-dom";
import Name from "../component/Name";
import Keyword from "../component/Keyword";
import Photo from "../data/Photo.jpg"


function Home() {
  return (
    <><div >
      <Name/>
      <div className="flex flex-col md:flex-row justify-center  w-full p-2 md:space-x-4">
        <div className="w-full md:w-[50%] flex justify-center items-center">
        
          <img
            className="p-2 md:w-[70%] h-[400px] rounded-full"
            src={Photo}  />
        
        </div>
        <div className=" md:w-[50%] flex-col p-2">
        
        <h1 className="text-[20px] text-blue-700 font-semibold">About Me</h1>
       
         
          <p className="text-[15px] text-gray-600 mt-2 font-serif">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
       
          </p>
        </div>
      </div>
      <Keyword/>
      </div>
    </>
  );
}

export default Home;
