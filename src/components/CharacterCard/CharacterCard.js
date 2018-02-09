import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="card">
        <img alt={props.name} src={props.image} />
    </div>
);

export default CharacterCard;