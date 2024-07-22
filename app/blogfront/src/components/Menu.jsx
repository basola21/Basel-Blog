import ThemeSwitch from "./ThemeSwitch";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { useSelector } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <span
      className={`${theme === "white" ? "bg-white text-black" : "bg-gray-900 text-white"} flex flex-col h-screen items-center text-center relative`}
    >
      <p className="font-bold mt-20 mb-14">Basel Rokaya</p>
      <span className="flex flex-col gap-y-4">
        <p>Blog</p>
        <p>Projects</p>
        <p>About</p>
        <p>Newsletter</p>
        <ThemeSwitch />
      </span>

      <button
        className="absolute top-4 right-4"
        onClick={() => {
          dispatch(toggleMenu());
        }}
      >
        <CloseRoundedIcon />
      </button>
    </span>
  );
};

export default Menu;
