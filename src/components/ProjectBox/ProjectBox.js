import React from "react";
import img_marche_noel from "../../description/projects/marche-noel.png";
import img_awu from "../../description/projects/awu.png";
import img_links from "../../description/projects/links.png";
import "./ProjectBox.css";

function ProjectBox(props) {

    return (
        <div className="project-box">
            <div className="project-tile">
                <div className="project-text">
                    <h4>Christmas market (web)</h4>
                    <h6>technologies: JS (React-Redux), HTML, CSS</h6>
                    <div className="project-description">
                        A custom-made single-page application to compute the data of a Christmas market.
                        The customer was not used to tech, so the intent throughout the project is to make
                        it easy to use and fool-proof (auto-save when the window is closed, serviceWorker,
                        various import options).
                    </div>
                    <a className="project" target="new" href="https://thanhdodeur.github.io/marche-noel/">
                        <div className="generic-button white"><i className="fa fa-snowflake-o"></i>Preview</div>
                    </a>
                </div>
                <div className="project-thumbnail">
                    <img src={img_marche_noel} alt="marché de noel"></img>
                </div>
            </div>
            <div className="project-tile">
                <div className="project-text">
                    <h4>Advanced Weapon UI</h4>
                    <h6>technologies: ActionScript 2, Flash</h6>
                    <div className="project-description">
                        A UI mod for the videogame 'Secret World Legends'.
                    </div>
                    <a className="project" target="new" href="https://www.curseforge.com/tsw/tsw-mods/advanced-weapon-ui-swl">
                        <div className="generic-button white"><i className="fa fa-file-text-o"></i>CurseForge page</div>
                    </a>
                </div>
                <div className="project-thumbnail">
                    <img src={img_awu} alt="advanced weapon ui icon"></img>
                </div>
            </div>
            <div className="project-tile">
                <div className="project-text">
                    <h4>GW2 KP Generator</h4>
                    <h6>technologies: AHKScript</h6>
                    <div className="project-description">
                        A custom software that allows generating specific item base64 links and sending them to a chatbox or saving them in the paperclip.
                    </div>
                    <a className="project" target="new" href="https://drive.google.com/file/d/15XxHmgUoC77FD9TEFRa5thxZf3Gruwi-/view?usp=sharing">
                        <div className="generic-button white"><i className="fa fa-cloud-download"></i>Software and Source code</div>
                    </a>
                </div>
                <div className="project-thumbnail">
                    <img src={img_links} alt="Thn Links"></img>
                </div>
            </div>
        </div>
    );
}

export default ProjectBox;


