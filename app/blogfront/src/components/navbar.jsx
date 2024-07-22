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
      <span className="flex justify-between items-center mx-2 py-3">
        <p>Basel Rokaya</p>

        <div className="flex items-start gap-x-14 ml-auto font-thin mx-2">
          <p className="hidden md:block">Blog</p>
          <p className="hidden md:block">Projects</p>
          <p className="hidden md:block">About</p>
          <p className="hidden md:block">Newsletter</p>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeSwitch
            key={width}
            visability={width > 767 ? "visible" : "hidden"}
          />
          <button
            className="md:hidden"
            onClick={() => {
              dispatch(toggleMenu());
            }}
          >
            <MenuRoundedIcon />
          </button>
        </div>
      </span>
    );
  }
};

export default Navbar;
