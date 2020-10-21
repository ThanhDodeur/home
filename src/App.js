import React, { useState } from "react";
import { useDarkMode } from "./utils/hooks.js";
import { openUrl } from './utils/utils.js'
import Accueil from "./components/Accueil/Accueil.js";
import MainPage from "./components/MainPage/MainPage.js";
import monogram from "./description/monogram_tso.svg";
import github_icon from "./description/github_icon.svg";
import linkedin_icon from "./description/linkedin_icon.svg";
import github_icon_white from "./description/github_icon_white.svg";
import linkedin_icon_white from "./description/linkedin_icon_white.svg";
import "./App.css";

function App(props) {
    const [state, setState] = useState({ open: false });
    const [mode, setMode] = useDarkMode();

    function openApp() {
        setState({ open: true });
    }

    return (
        <div className={`page ${mode}`}>
            <div className="monogram-container">
                <img width="40px" height="40px" src={monogram} className="main-monogram" alt="monogram"/>
                <div className="contact-container">
                    <div onClick={() => { openUrl('https://github.com/ThanhDodeur') }}><img width="30px" height="30px" src={(mode === 'dark' ? github_icon_white : github_icon)} alt="github icon"/><span>Personal Github</span></div>
                    <div onClick={() => { openUrl('https://github.com/ThanhDodeurOdoo') }}><img width="30px" height="30px" src={(mode === 'dark' ? github_icon_white : github_icon)} alt="github icon"/><span>Work Github</span></div>
                    <div onClick={() => { openUrl('https://be.linkedin.com/in/thanhsondodeur') }}><img width="30px" height="30px" src={(mode === 'dark' ? linkedin_icon_white : linkedin_icon)} alt="linkedin icon"/><span>LinkedIn</span></div>
                </div>
            </div>
            <div role='button' className='light-icon-wrapper clickable noselect' onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
                <i className={'light-icon fa ' + (mode === 'light' ? 'fa-sun-o' : 'fa-moon-o')}></i>
            </div>
            {state.open ? (
                <MainPage/>
            ) : (
                <div className="frame accueil-wrapper" >
                    <Accueil callBack={openApp} theme={mode}/>
                </div>
            )}
        </div>
    );
}

export default App;