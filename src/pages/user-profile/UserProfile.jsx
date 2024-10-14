import { useContext } from "react";
import { UserLoginContext } from "../../contexts/UserLoginContext";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

function UserProfile() {
  const { user } = useContext(UserLoginContext);
  let navigate = useNavigate();

  return (
    <div>
      <div className="user-dashboard">
        <div className="user-info-box flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-center">
            <img
              src="https://th.bing.com/th/id/OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw?w=202&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              width="75px"
              alt="User Avatar"
              className=""
            />
            <Link to="/edit" className="mt-2 text-3xl text-violet-700">
              <CiEdit />
            </Link>
          </div>
          <div className="p-5 text-center md:text-left">
            <p className="text-4xl">Name: {user.name}</p>
            <p className="text-2xl">Email: {user.email}</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ipsam necessitatibus veniam labore minima molestiae
              quisquam ducimus tempore soluta aliquam?
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link to={'/user-profile/cart'} className="text-xl text-violet-700 flex items-center">
          My Cart <CiShoppingCart className="inline ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default UserProfile;
