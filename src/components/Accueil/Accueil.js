import React from "react";
import logoLight from "../../description/main-icon-light.svg";
import logoDark from "../../description/main-icon-dark.svg";
import "./Accueil.css";

function Accueil({ callBack, theme }) {

    return (
        <div className="accueil noselect clickable" onClick={callBack}>
            <img src={(theme === 'light' ? logoLight : logoDark)} className="App-logo" alt="logo"/>
        </div>
    );
}

export default Accueil;

