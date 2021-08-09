import React from "react";

function QuetesCard({ quete }) {
  return (
    <div className="col-sm-4 my-2">
      <div className="card">
        <div className="card-header">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{quete.quote}</p>
            <footer className="blockquote-footer">{quete.author}</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default QuetesCard;
