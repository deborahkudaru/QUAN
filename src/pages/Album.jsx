import React from "react";
import { Link } from "react-router-dom";
import photo17 from "../images/photo17.jpg";
import photo6 from "../images/KWP_2772.jpg";
import photo21 from "../images/photo21.jpg";
import photo22 from "../images/photo22.jpg";
import photo23 from "../images/photo23.jpg";
import { GoArrowRight } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
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
  {
    id: 5,
    bgImage: photo22,
    albumName: "Music Videos",
    albumURL: "/no-page",
  },
];

const Album = () => {
  const navigate = useNavigate();
  return (
    <>
      <BlackHeader />
      <div className="px-4 pt-20">
        <div className="flex py-5 lg:gap-10 gap-5">
          <button onClick={() => navigate(-1)}>
            <BsArrowLeft className="lg:text-2xl text-lg" />
          </button>
          <h2 className="font-playFair lg:text-3xl text-red-800 text-lg font-semibold">ALBUM</h2>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
          {albums.map((alb) => (
            <div key={alb.id} className="">
              <Link to={alb.albumURL}>
                <div
                  className="bg-cover bg-no-repeat bg-black bg-opacity-50 bg-blend-overlay text-white font-mateSC pt-72"
                  style={{ backgroundImage: `url(${alb.bgImage})` }}
                >
                  <p className="text-xl font-lato font-semibold ml-5 pb-5">{alb.albumName}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-2 justify-end mt-10">
          <Link
            to="/book"
            className="text-black  font-mateSC font-semibold lg:text-xl text-sm relative text-end hover:underline"
          >
            BOOK A SESSION{" "}
          </Link>
          <GoArrowRight className="text-2xl animate-pulse" />
        </div>
      </div>
    </>
  );
};

export default Album;
