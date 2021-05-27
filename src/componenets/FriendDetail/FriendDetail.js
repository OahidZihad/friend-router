import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h1>Details of {friendId}</h1>
      <h3>Name: {friend.name}</h3>
      <h3>User Name: {friend.username}</h3>
      <h5>Email: {friend.email}</h5>
      {/* <p>Address: {friend.address.city}</p> */}
      <p>Phone: {friend.phone}</p>
      <p>Website: {friend.website}</p>
    </div>
  );
};

export default FriendDetail;
