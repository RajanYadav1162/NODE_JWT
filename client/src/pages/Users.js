import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState();
  console.log("users", users);
  useEffect(() => {
    const fetchUsersEmail = async () => {
      const { data } = await axios.get("http://localhost:5000/user", {
        withCredentials: true,
      });
      setUsers(data);
    };
    fetchUsersEmail();
  }, []);
  return (
    <>
      <div>{users && users.error && users.message}</div>
      <ul>{users && users.response && users.response.map((user)=><li key={user._id}>{user.email}</li>)}</ul>
    </>
  );
};
export default Users;
