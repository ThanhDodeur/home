import React, { useState } from "react";
import { useDarkMode } from "./utils/hooks.js";
import Accueil from "./components/Accueil/Accueil.js";
import MainPage from "./components/MainPage/MainPage.js";
import "./App.css";

function App(props) {
    const [state, setState] = useState({ open: false });
    const [mode, setMode] = useDarkMode();

    function openApp() {
        setState({ open: true });
    }

    return (
        <div className={`page ${mode}`}>
            {state.open ? (
                <MainPage/>
            ) : (
                <div className="frame accueil-wrapper" >
                    <div role='button' className='light-icon-wrapper clickable noselect' onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
                    <i className={'light-icon fa ' + (mode === 'light' ? 'fa-sun-o' : 'fa-moon-o')}></i>
                    </div>
                    <Accueil callBack={openApp} theme={mode}/>
                </div>
            )}
        </div>
    );
}

export default App;