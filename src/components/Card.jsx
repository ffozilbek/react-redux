import React from "react";

function Card({ text, event }) {
  return (
    <div className="card">
      <p>{text}</p>
      <button className="btn btn-soft btn-info mt-5" onClick={event}>
        View
      </button>
    </div>
  );
}

export default Card;
