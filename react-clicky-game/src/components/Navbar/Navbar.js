import React from "react";
import "./Navbar.css";

const style = {
    textStyle: {
        color: "white",
        margin: 20
    }
}

function Navbar(props) {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4">
                    Instruments Click Game!
    </div>
                <div className="col-md-4">
                    <div className="title">Click an Image Once!</div>
                </div>

                <div className="col-md-4">
                    <div className="score">
                        <span>Score: {props.score} | </span><span style={style.textStyle}>Highscore: {props.topScore}</span>
                    </div>

                </div>
            </div>
        </div>
    )
};
export default Navbar;
