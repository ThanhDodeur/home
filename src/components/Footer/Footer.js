import React from "react";
import "./Footer.css";

function Footer(props) {

    return (
        <div className="footer-box">
            <a
                className=""
                target="new"
                href="mailto: thanhdodeur@gmail.com"
            >
                <div className="footer-element">
                    <i className="fa fa-envelope"></i>Personal
                    email
                </div>
            </a>
            <a
                className=""
                target="new"
                href="mailto: tso@odoo.com"
            >
                <div className="footer-element">
                    <i className="fa fa-envelope"></i>Odoo email
                </div>
            </a>
            <div className="footer-signature ml-auto">
                Thanh Dodeur, Software developer @ Odoo
            </div>
        </div>
    );
}

export default Footer;


