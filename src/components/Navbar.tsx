import { useNavigate } from "react-router-dom";
import Logo from "../pages/utils/icons/Logo";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 border-b border-gray-400 flex items-center justify-between bg-white">
      <div className="flex items-center justify-between w-[95%] m-auto">
        <Logo />

        <div className="flex items-center">
          <button
            className="p-2 bg-[#0B69FF] text-white w-[93px] h-[42px] rounded-[4px] mr-4"
            onClick={() => navigate("/addresource")}
          >
            ADD +
          </button>
          <img
            src="https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-1/407975937_2433326553505622_3671635203250849648_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5DQZucCYzeUQ7kNvgGTgJWJ&_nc_ht=scontent.fccu16-1.fna&oh=00_AYCPZKEnMT9SJcMptaK4VpGzSr5aSAY3B5gumC0jPkMp0g&oe=66552EB9"
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
