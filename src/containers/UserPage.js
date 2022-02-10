import React, { useState, useEffect } from "react";
import { getUserData, getUserRepositories } from "../Api/index";
import Navbar from "../components/NavBar/NavBar";
import UserInfos from "../components/UserInfo/UserInfo";
import Repositories from "../components/Repositories/Repositories";
import Tabs from "../components/Tabs/Tabs";
import { useParams } from "react-router-dom";

function UserPage() {
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState([]);
  const { userName } = useParams();
  console.log(userName);

  useEffect(() => {
    fetchUser();
    fetchRepositories();
  }, []);

  async function fetchUser() {
    const { data } = await getUserData(userName);
    setUser(data);
  }
  async function fetchRepositories() {
    const { data } = await getUserRepositories(userName);
    setRepositories(data);
  }

  return (
    <>
      {user ? (
        <>
          <Navbar user={user} />
          <div className="container">
            <UserInfos user={user} />
            <Tabs repos={repositories} user={user} />
            <Repositories repos={repositories} user={user} />
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
        </div>
        </div>
      )}
    </>
  );
}

export default UserPage;
