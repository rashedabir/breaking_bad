import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import UserList from "../components/UserList";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  const BASE_URL = `https://breakingbadapi.com/api/characters?name=${search}`;

  const userPerPage = 10;
  const pageVisited = page * userPerPage;

  const displayUser = users.slice(pageVisited, pageVisited + userPerPage);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [BASE_URL]);

  const pageCount = Math.ceil(users.length / userPerPage);

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div className="users my-3 py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <h2 className="text-white my-2">Characters List</h2>
          </div>
          <div className="col-lg-3">
            <input
              className="form-control my-2"
              type="text"
              placeholder="search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
          </div>
        </div>
        <UserList displayUser={displayUser} />
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default Users;
