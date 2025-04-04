import React from "react";
import { Link } from "react-router-dom";
import photo7 from "../images/KWP_5163.jpg";
import BlackHeader from "../components/BlackHeader";
import { motion } from "framer-motion";

const albums = [
  {
    id: 1,
    bgImage:
      "https://res.cloudinary.com/dqflr6fmv/image/upload/v1739651942/KWP_6639_ahfmtc.jpg",
    albumName: "Fashion",
    albumURL: "/fashion",
  },
  {
    id: 2,
    bgImage:
      "https://res.cloudinary.com/dqflr6fmv/image/upload/v1739652054/photo18_r2glgk.jpg",
    albumName: "Beauty/Portraits",
    albumURL: "/birthday",
  },
  {
    id: 3,
    bgImage:
      "https://res.cloudinary.com/dqflr6fmv/image/upload/v1739652057/photo21_a1sztv.jpg",
    albumName: "Weddings/Events",
    albumURL: "/weddings",
  },
  {
    id: 4,
    bgImage: photo7,
    albumName: "Corporates",
    albumURL: "/corporate",
  },
  {
    id: 5,
    bgImage:
      "https://res.cloudinary.com/dqflr6fmv/image/upload/v1740072673/Screenshot_158_yfjt1h.png",
    albumName: "Music Video/Shorts",
    albumURL: "/music",
  },
  {
    id: 6,
    bgImage:
      "https://res.cloudinary.com/dqflr6fmv/image/upload/v1739652065/photo24_fo9voj.jpg",
    albumName: "Commercials",
    albumURL: "/no-page",
  },
];

const Album = () => {
  return (
    <>
      <BlackHeader />
      <div className="px-5 lg:px-20 pt-20 dark:bg-[#121212]">
        <h3 className=" text-center pb-6 font-bold text-2xl lg:text-3xl font-playFair text-gray-900  dark:text-white">
          GALLERY
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {albums.map((alb) => (
            <motion.div
              key={alb.id}
              className=""
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link to={alb.albumURL}>
                <div
                  className="bg-cover bg-no-repeat bg-black bg-opacity-50 bg-blend-overlay text-white font-mateSC pt-72 rounded-xl"
                  style={{ backgroundImage: `url(${alb.bgImage})` }}
                >
                  <p className="text-xl font-lato font-semibold ml-5 pb-5">
                    {alb.albumName}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Album;
