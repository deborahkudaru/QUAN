import React from "react";
import { Link } from "react-router-dom";
import photo17 from "../images/photo17.jpg";
import photo6 from "../images/KWP_2772.jpg";
import photo21 from "../images/photo21.jpg";
import photo23 from "../images/photo23.jpg";
import BlackHeader from "../components/BlackHeader";

const albums = [
  {
    id: 1,
    bgImage: photo17,
    albumName: "Fashion",
    albumURL: "/fashion",
  },
  {
    id: 2,
    bgImage: photo6,
    albumName: "Birthdays",
    albumURL: "/birthday",
  },
  {
    id: 3,
    bgImage: photo21,
    albumName: "Weddings",
    albumURL: "/weddings",
  },
  {
    id: 4,
    bgImage: photo23,
    albumName: "Shorts",
    albumURL: "/no-page",
  },
];

const Album = () => {
  return (
    <>
      <BlackHeader />
      <div className="px-4 pt-20 dark:bg-[#121212]">
         <h3 className=" text-center pb-6 font-bold text-2xl lg:text-3xl font-playFair text-gray-900  dark:text-white">
        GALLERY
      </h3>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
          {albums.map((alb) => (
            <div key={alb.id} className="">
              <Link to={alb.albumURL}>
                <div
                  className="bg-cover bg-no-repeat bg-black bg-opacity-50 bg-blend-overlay text-white font-mateSC pt-72 rounded-xl"
                  style={{ backgroundImage: `url(${alb.bgImage})` }}
                >
                  <p className="text-xl font-lato font-semibold ml-5 pb-5">{alb.albumName}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Album;
