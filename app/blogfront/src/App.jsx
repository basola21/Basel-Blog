import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Blogs from "./components/Blogs";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={`${theme === "white" ? "bg-white text-black" : "bg-gray-900 text-white"}`}
    >
      <Navbar />
      <Title />
      <Blogs />
    </div>
  );
}

export default App;
