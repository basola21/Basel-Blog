import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

const Title = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={`${theme === "white" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <Divider
        sx={{
          borderBottomWidth: 2,
          bgcolor: `${theme === "white" ? "black" : "white"}`,
          marginLeft: { lg: "5%", xs: 0 },
          marginRight: { lg: "5%", xs: 0 },
        }}
      />
      <p className="font-bold text-[60px] md:text-[130px] lg:text-[174px] text-center w-full">
        BASEL BLOG
      </p>
      <Divider
        sx={{
          borderBottomWidth: 2,
          bgcolor: `${theme === "white" ? "black" : "white"}`,
          marginLeft: { lg: "5%", xs: 0 },
          marginRight: { lg: "5%", xs: 0 },
        }}
      />
    </div>
  );
};

export default Title;
