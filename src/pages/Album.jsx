import React from "react";
import { Link } from "react-router-dom";
import photo17 from "../images/photo17.jpg";
import photo6 from "../images/photo6.jpg";
import photo21 from "../images/photo21.jpg";
import photo22 from "../images/photo22.jpg";
import photo23 from "../images/photo23.jpg";

const albums = [
  {
    id: 1,
    bgImage: photo17,
    albumName: "Fasion",
    albumURL: "/no-page",
  },
  {
    id: 2,
    bgImage: photo6,
    albumName: "Birthdays",
    albumURL: "/no-page",
  },
  {
    id: 3,
    bgImage: photo21,
    albumName: "Weddings",
    albumURL: "/no-page",
  },
  {
    id: 4,
    bgImage: photo23,
    albumName: "Shorts",
    albumURL: "/no-page",
  },
  {
    id: 5,
    bgImage: photo22,
    albumName: "Music Videos",
    albumURL: "/no-page",
  },
];

const Album = () => {
  return (
    <div className="px-4 pt-7">
      <h3 className="text-center pb-10 font-bold text-2xl lg:text-3xl font-mateSC">
        ALBUM
      </h3>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6 ">
        {albums.map((alb) => (
          <div key={alb.id}>
            <Link to={alb.albumURL}>
            <div
              className="bg-cover bg-no-repeat bg-black bg-opacity-50 bg-blend-overlay text-white font-mateSC pt-72"
              style={{ backgroundImage: `url(${alb.bgImage})` }}
            >
              <p className="text-xl ml-5 pb-5">{alb.albumName}</p>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
