import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Redux/peopleSlice"

const UserAuthentication = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.value);

  const handleLogin = () => {
    const userInfo = {
      userName: "exampleUser",
      isLoggedIn: true,
    };
    dispatch(login(userInfo));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {userInfo.isLoggedIn ? (
        <div>
          <p>Welcome, {userInfo.userName || "User"}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to continue.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserAuthentication;
