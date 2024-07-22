import ThemeSwitch from "./ThemeSwitch";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <span className="flex flex-col gap-y-3.5 items-center text-center">
      <p>Basel Rokaya</p>
      <p>Blog</p>
      <p>Projects</p>
      <p>About</p>
      <p>Newsletter</p>
      <ThemeSwitch />

      <button
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
