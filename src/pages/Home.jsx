import React from "react";
import { Link } from "react-router-dom";
import Name from "../component/Name";
import Keyword from "../component/Keyword";


function Home() {
  return (
    <><div >
      <Name/>
      <div className="flex flex-col md:flex-row justify-center  w-full p-2 md:space-x-4">
        <div className="w-full md:w-[50%]">
        
          <img
            className="p-4"
            src="https://imgs.search.brave.com/fXd4lPQ-VGV-38zBBz8Qwp-6YXaRcPDoK2GEZaU599g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw"
          />
        
        </div>
        <div className=" md:w-[50%] flex-col p-2">
        
        <h1 className="text-[20px] text-blue-700 font-semibold">About Me</h1>
       
         
          <p className="text-[12px] text-gray-800 mt-2">
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
