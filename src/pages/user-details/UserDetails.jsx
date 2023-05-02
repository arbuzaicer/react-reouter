import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);

  const getUserDetails = async () => {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const response = await request.json();

    setUserDetails(response);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!userDetails) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <h1>User details with id: {userId}</h1>

      <h2>{userDetails.username}</h2>
      <h2>{userDetails.name}</h2>
    </div>
  );
};

export default UserDetails;
