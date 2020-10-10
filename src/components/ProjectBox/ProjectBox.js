import React from "react";
import "./ProjectBox.css";

function ProjectBox(props) {

    return (
        <div className="project-box">
            <a className="project" target="new" href="https://thanhdodeur.github.io/marche-noel/">
                <div className="generic-button white"><i className="fa fa-snowflake-o"></i>Christmas Market</div>
            </a>
        </div>
    );
}

export default ProjectBox;


