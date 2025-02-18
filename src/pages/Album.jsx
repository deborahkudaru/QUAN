import React from "react";
import { Link } from "react-router-dom";
import photo6 from "../images/KWP_2772.jpg";
import BlackHeader from "../components/BlackHeader";
import { motion } from "framer-motion";

const albums = [
  {
    id: 1,
    bgImage: "https://res.cloudinary.com/dqflr6fmv/image/upload/v1739652054/photo17_k5pcc2.jpg",
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
    bgImage: "https://res.cloudinary.com/dqflr6fmv/image/upload/v1739652057/photo21_a1sztv.jpg",
    albumName: "Weddings",
    albumURL: "/weddings",
  },
  {
    id: 4,
    bgImage: "https://res.cloudinary.com/dqflr6fmv/image/upload/v1739651911/KWP_3917_zlocpz.jpg",
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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 ">
          {albums.map((alb) => (
            <motion.div key={alb.id} className=""   whileHover={{ scale: 1.1 }} // Increases size on hover
            transition={{ type: "spring", stiffness: 200 }}>
              <Link to={alb.albumURL}>
                <div
                  className="bg-cover bg-no-repeat bg-black bg-opacity-50 bg-blend-overlay text-white font-mateSC pt-72 rounded-xl"
                  style={{ backgroundImage: `url(${alb.bgImage})` }}
                >
                  <p className="text-xl font-lato font-semibold ml-5 pb-5">{alb.albumName}</p>
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
