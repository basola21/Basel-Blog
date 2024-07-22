import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import ThemeSwitch from "./ThemeSwitch";
import useWindowDimensions from "../hooks/useWindowDiminsions";

const Navbar = () => {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  if (menu && width < 767) {
    return <Menu />;
  } else {
    return (
      <span className="flex justify-between mx-2">
        <p>Basel Rokaya</p>
        <p className="hidden md:block">Blog</p>
        <p className="hidden md:block">Projects</p>
        <p className="hidden md:block">About</p>
        <p className="hidden md:block">Newsletter</p>
        <ThemeSwitch
          key={width}
          visability={width > 767 ? "visable" : "hidden"}
        />
        <button
          className="md:hidden"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        >
          <MenuRoundedIcon />
        </button>
      </span>
    );
  }
};

export default Navbar;
