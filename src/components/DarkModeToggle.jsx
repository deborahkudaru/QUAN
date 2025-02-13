import { useTheme } from "./ThemeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 text-yellow-500 text-2xl rounded-md"
    >
      {darkMode ? <IoSunnyOutline /> : <IoMoonSharp />}
    </button>
  );
};

export default DarkModeToggle;
