import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div onClick={() => props.clickEvent(props.id)} className="card">
        <img alt={props.name} src={props.image} />
    </div>
);

export default CharacterCard;