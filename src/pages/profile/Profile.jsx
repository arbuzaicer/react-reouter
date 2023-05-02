import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div>
      <h1>Hello from profile page</h1>

      <button>Go to some page</button>

      <Outlet />
    </div>
  );
};

export default Profile;
