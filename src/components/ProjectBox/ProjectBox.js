import React from "react";
import { openUrl } from '../../utils/utils.js'
import img_marche_noel from "../../description/projects/marche-noel.png";
import img_awu from "../../description/projects/awu.png";
import img_links from "../../description/projects/links.png";
import img_odoo from "../../description/projects/odoo_logo.png";
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
            href:'https://thanhdodeur.github.io/marche-noel/',
        },
        {
            name: 'Advanced Weapon UI',
            technologies: 'ActionScript 2, Flash',
            description: `A UI mod for the videogame 'Secret World Legends'.`,
            img: {src: img_awu, alt: 'advanced weapon ui icon'},
            href:'https://www.curseforge.com/tsw/tsw-mods/advanced-weapon-ui-swl',
        },
        {
            name: 'GW2 KP Generator',
            technologies: 'AHKScript',
            description: `A custom software that allows generating specific item base64 links and sending them to a chatbox or saving them in the paperclip.
                This software is made for the videogame "Guild Wars 2"`,
            img: {src: img_links, alt: 'generator preview'},
            href:'https://drive.google.com/file/d/15XxHmgUoC77FD9TEFRa5thxZf3Gruwi-/view?usp=sharing',
        },
        {
            name: 'Odoo (my day job)',
            technologies: 'PostgreSQL, Python, Javascript (custom OWL Framework), scss, xml templating',
            description: `Odoo is a suite of business management software tools including CRM, e-commerce,
                billing, accounting, manufacturing, warehouse, project management, and inventory management to name a few.
                The Community version is a libre software, licensed under the GNU LGPLv3.`,
            img: {src: img_odoo, alt: 'Odoo SA Logo'},
            href:'https://www.odoo.com/',
        },
    ];

    return (
        <div className="project-box">
            <h2>Work/Projects</h2>
        {projects.map((project, index) => {
            return (
                <div title={project.name} key={'project_'+index} className="project-tile clickable noselect" onClick={() => { openUrl(project.href) }}>
                    <div className="project-text">
                        <h4>{project.name}</h4>
                        {!!project.technologies && (
                            <h6>technologies: {project.technologies}</h6>
                        )}
                        <div className="project-description">{project.description}</div>
                    </div>
                    <div className="project-thumbnail">
                        <img alt={project.img.alt} src={project.img.src}/>
                    </div>
                </div>
            );
        })}
        </div>
    );
}

export default ProjectBox;
