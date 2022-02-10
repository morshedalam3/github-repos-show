import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div>
        <form class="row g-3">
          {/* <div class="col-auto">
            <label for="staticEmail2">Email</label>
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail2"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div> */}
          <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              readonly
              // id="inputPassword2"
              placeholder="Enter Your UserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <Link to={`${userName}`}>
              {" "}
              <button type="submit" class="btn btn-primary mb-3">
                submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
