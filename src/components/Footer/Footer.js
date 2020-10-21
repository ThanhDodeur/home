import React from "react";
import "./Footer.css";
import monogram from "../../description/monogram_tso.svg";

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
            <img width="40px" height="40px" src={monogram} className="ml-auto" alt="monogram"/>
            <div className="footer-signature">
                Thanh Dodeur, Software developer @ Odoo
            </div>
        </div>
    );
}

export default Footer;


