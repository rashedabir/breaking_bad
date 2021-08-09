import React from "react";

function UserDetail({ details }) {
  return (
    <div className="row">
      <div className="col-lg-4 py-3">
        <img src={details.img} alt={details.name} width="100%" />
      </div>
      <div className="col-lg-8 py-3">
        <ul className="list-group">
          <li className="list-group-item">
            <h5>Full Name: {details.name}.</h5>
          </li>
          {details.nickname ? (
            <li className="list-group-item">
              {" "}
              <h5>Nickname: {details.nickname}</h5>{" "}
            </li>
          ) : null}
          <li className="list-group-item">
            <h5>Date of Birth: {details.birthday}.</h5>
          </li>
          <li className="list-group-item">
            <h5 className="d-flex align-items-center">
              Occupation:{" "}
              {details.occupation.map((occupation) => (
                <h5 className="my-1 px-1">{occupation},</h5>
              ))}
            </h5>
          </li>
          <li className="list-group-item">
            {" "}
            <h5>Status: {details.status}</h5>{" "}
          </li>
          <li className="list-group-item">
            <h5>Portrayed: {details.portrayed}</h5>
          </li>
          <li className="list-group-item">
            <h5 className="d-flex align-items-center">
              Appearance:{" "}
              {details.appearance.map((appearance) => (
                <h5 className="my-1 px-2">{appearance},</h5>
              ))}
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDetail;
