import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Navbar = () => {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <span className="flex justify-between mx-5">
      <p>Basel Rokaya</p>
      <p>Blog</p>
      <p>Projects</p>
      <p>About</p>
      <p>Newsletter</p>
      <button
        onClick={() => {
          dispatch(toggleMenu());
        }}
      >
        <MenuRoundedIcon />
      </button>
      {menu && <Menu />}
    </span>
  );
};

export default Navbar;
