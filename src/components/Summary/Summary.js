import React from "react";
import "./Summary.css";

function Summary(props) {

    return (
        <div className="summary-box">
            <div className="summary-content">
                <h1>Hello,</h1>
                <h2>My name is Thanh</h2>
                <p>I am a full stack developer currently working at <a href="https://www.odoo.com/" target="new"><b className="odoo">Odoo</b></a>.</p>
            </div>
        </div>
    );
}

export default Summary;
