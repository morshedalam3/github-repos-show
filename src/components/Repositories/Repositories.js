import React from "react";
import "./Repositories.css";

const Repositories = ({ repos, user }) => (
  <section className="repositories">
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Serial</th>
          <th scope="col">Repository name</th>
          <th scope="col">Star</th>
          {/* <th scope="col">Forks</th> */}
        </tr>
      </thead>
      <tbody>
      {repos.map((repo ,index) => (
             <tr key={repo.id}>
             <th scope="row">{index +1}</th>
             <td>{repo.name}</td>
             <td>{repo.stargazers_count}</td>
             {/* <td>{repo.forks_count}</td> */}
           </tr>
            ))}
      </tbody>
    </table>
  </section>
);

export default Repositories;
