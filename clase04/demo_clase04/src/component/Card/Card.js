import React from "react";
import "./Card.css";

function Card(props) {
  console.log(props.info);
  return (
    <div className="card_container">
      <img src={props.info.img} alt={props.info.nombre} />
      <h3>{props.info.nombre}</h3>
      <p>{props.info.director}</p>
      <p>{props.info.year}</p>
    </div>
  );
}
export default Card;
