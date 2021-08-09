import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuetesCard from "../components/QuetesCard";
import UserDetail from "../components/UserDetail";

function UserDetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [quetes, setQuestes] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`https://breakingbadapi.com/api/characters/${id}`)
        .then((res) => res.json())
        .then((data) => setDetails(data));
    }
  }, [id]);

  useEffect(() => {
    details.forEach((element) => {
      setName(element.name);
    });
    if (details && name) {
      fetch(`https://breakingbadapi.com/api/quote?author=${name}`)
        .then((res) => res.json())
        .then((data) => setQuestes(data));
    }
  }, [details, name]);

  console.log(quetes);

  return (
    <div className="details container py-5">
      <div className="bg-white py-2 px-2">
        <h3>Characters Details</h3>
      </div>
      {details.map((details) => (
        <UserDetail details={details} />
      ))}
      <div className="row">
        {quetes.map((quete) => (
          <QuetesCard quete={quete} />
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
