import React from "react";

function Newsitem(props) {
  return (
    <div>
      <div
        className="card bg-dark text-light mb-3 d-inline-block"
        style={{ maxWidth: "345px" }}
      >
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.url} className="btn btn-primary">
            Read more..
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsitem;
