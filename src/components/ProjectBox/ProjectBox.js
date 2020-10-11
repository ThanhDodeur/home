import React from "react";
import img_marche_noel from "../../description/projects/marche-noel.png";
import img_awu from "../../description/projects/awu.png";
import img_links from "../../description/projects/links.png";
import "./ProjectBox.css";

function ProjectBox(props) {

    const projects = [
        {
            name: 'Christmas market (web)',
            technologies: 'JS (React-Redux), HTML, CSS',
            description: `A custom-made single-page application to compute the data of a Christmas market.
                The customer was not used to tech, so the intent throughout the project is to make
                it easy to use and fool-proof (auto-save when the window is closed, serviceWorker,
                various import options).`,
            img: {src: img_marche_noel, alt: 'web page preview'},
            link: {name: 'Preview', href:'https://thanhdodeur.github.io/marche-noel/', fa:'fa-snowflake-o'},
        },
        {
            name: 'Advanced Weapon UI',
            technologies: 'ActionScript 2, Flash',
            description: `A UI mod for the videogame 'Secret World Legends'.`,
            img: {src: img_awu, alt: 'advanced weapon ui icon'},
            link: {name: 'View on CurseForge', href:'https://www.curseforge.com/tsw/tsw-mods/advanced-weapon-ui-swl', fa: 'file-text-o'},
        },
        {
            name: 'GW2 KP Generator',
            technologies: 'AHKScript',
            description: 'A custom software that allows generating specific item base64 links and sending them to a chatbox or saving them in the paperclip.',
            img: {src: img_links, alt: 'generator preview'},
            link: {name: 'Download', href:'https://drive.google.com/file/d/15XxHmgUoC77FD9TEFRa5thxZf3Gruwi-/view?usp=sharing', fa: 'fa-cloud-download'},
        },
    ];

    return (
        <div className="project-box">
        {projects.map((project, index) => {
            return (
                <div key={'project_'+index} className="project-tile">
                    <div className="project-text">
                        <h4>{project.name}</h4>
                        {!!project.technologies && (
                            <h6>technologies: {project.technologies}</h6>
                        )}
                        <div className="project-description">{project.description}</div>
                        <a className="project" target="new" href={project.link.href}>
                            <div className="generic-button white"><i className={`fa ${project.link.fa}`}></i>{project.link.name}</div>
                        </a>
                    </div>
                    <div className="project-thumbnail">
                        <img src={project.img.src} alt=""></img>
                    </div>
                </div>
            );
        })}
        </div>
    );
}

export default ProjectBox;
