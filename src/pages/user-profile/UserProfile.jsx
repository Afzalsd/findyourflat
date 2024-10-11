import { useContext } from "react";
import { UserLoginContext } from "../../contexts/UserLoginContext";
import { Link } from "react-router-dom";

function UserProfile() {
  const { user } = useContext(UserLoginContext);

  return (
    <div className="user-dashboard">
      <div className="user-info-box">
        <img
          src="https://th.bing.com/th/id/OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw?w=202&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          width="75px"
          alt="User Avatar"
          className="rounded-circle"
        />
        <p className="fs-3">{user.name}</p>
      </div>
    </div>
  );
}

export default UserProfile;
