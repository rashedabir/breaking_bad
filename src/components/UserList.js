import React from "react";
import { Link } from "react-router-dom";

function UserList({ displayUser }) {
  return (
    <div className="my-3 py-2 table-responsive">
      <table className="table table-bordered table-striped bg-white">
        <thead className="bg-white">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Occupation</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {displayUser.map((user) => (
            <tr>
              <th scope="row">
                <Link to={`user/${user.char_id}`}>{user.name}</Link>
              </th>
              <td>
                <Link to={`user/${user.char_id}`}>{user.occupation}</Link>
              </td>
              <td>{user.birthday}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
