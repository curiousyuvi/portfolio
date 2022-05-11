import React from "react";
import ProjectImage from "../asset/movie.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="w-full flex justify-center my-8">
        <div className="w-full">
          <h1 className="sm:text-2xl lg:text-4xl text-xl text-gray-50 font-semibold text-center p-0 sm:py-4">
            PROJECTS
          </h1>
          <div
            className="flex flex-col sm:flex-row justify-between items-start w-full px-4 sm:px-16 py-2"
            data-aos="fade-right"
          >
            <img
              src={ProjectImage}
              alt=""
              className="w-full sm:w-1/3 lg:w-1/6 max-w-[20rem] rounded"
            />
            <div className="py-4 sm:py-0 sm:px-4 w-full sm:w-2/3 lg:w-5/6">
              <h2 className="text-green-400 text-sm sm:text-base lg:text-lg font-bold">
                REACT APP
              </h2>
              <h3 className="text-gray-50 text-lg sm:text-xl lg:text-2xl font-bold">
                MOVIE RATING APP
              </h3>
              <p className="text-sm sm:text-base lg:text-lg">
                A platform where users can search for any movies and see their
                IMDB ratings and all the information related to it.
              </p>
              <div className="flex justify-start items-center my-2">
                <button
                  className="font-bold text-gray-50 bg-green-400 rounded px-3 py-2 mr-2"
                  href="https://movies-search-karo.herokuapp.com/"
                >
                  WEBSITE
                </button>
                <a
                  className="font-bold text-green-400 bg-transparent rounded px-2 py-1 outline outline-green-400 ml-2"
                  href="https://github.com/skinnyiam/moviezone"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
