import React from "react";
import "./Counter.css";

const Counter = props => (
    <div>
        <p>Count: {props.count}</p>
        <p>High Score: {props.highscore}</p>
    </div>
);

export default Counter;