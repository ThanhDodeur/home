import React from "react";
import "./MainPage.css";

//import NavBar from "../NavBar/NavBar.js";
import ProjectBox from "../ProjectBox/ProjectBox.js";
import Summary from "../Summary/Summary.js";
import Footer from "../Footer/Footer.js";

class MainPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            displayProjects: false,
        };
    }

    async componentDidMount() {
        window.addEventListener("beforeunload", this.onClose);
    }
    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.onClose);
    }

    ////////////////// //////// //////////////////
    ////////////////// PRIVATE ///////////////////
    ////////////////// //////// //////////////////

    ////////////////// //////// //////////////////
    ////////////////// HANDLERS //////////////////
    ////////////////// //////// //////////////////

    onClose = () => {};

    onHrefWrapperClick = (e) => {
        if (e.currentTarget !== e.target) {
            return;
        }
        const a = e.currentTarget.getElementsByTagName("a");
        if (a.length) {
            e.stopPropagation();
            a[0].click();
        }
    };

    toggleDisplayProjects = () => {
        this.setState({ displayProjects: !this.state.displayProjects });
    };

    ////////////////// //////// //////////////////
    ///////////////////// DOM ////////////////////
    ////////////////// //////// //////////////////

    /**
     * Generates the buttons to be given to the top nav-bar.
     *
     * @returns {Array} buttons
     */
    _getButtons() {
        const buttons = [
            {
                className: "white",
                fa: "fa-github",
                content: (
                    <a target="new" href="https://github.com/ThanhDodeur">
                        Personal Github
                    </a>
                ),
                callBack: (e) => this.onHrefWrapperClick(e),
            },
            {
                className: "white",
                fa: "fa-github",
                content: (
                    <a target="new" href="https://github.com/ThanhDodeurOdoo">
                        Work Github
                    </a>
                ),
                callBack: (e) => this.onHrefWrapperClick(e),
            },
            {
                className: "linkedin",
                fa: "fa-linkedin-square",
                content: (
                    <a
                        target="new"
                        href="https://be.linkedin.com/in/thanhsondodeur"
                    >
                        LinkedIn
                    </a>
                ),
                callBack: (e) => this.onHrefWrapperClick(e),
            },
            /*
            {
                className:
                    (this.state.displayProjects ? "active" : "") +
                    " green ml-auto",
                fa: "fa-briefcase",
                content: "Sample Projects", // <a target="new" href="https://thanhdodeur.github.io/marche-noel/">Christmas Market</a>
                callBack: this.toggleDisplayProjects,
            },
            */
        ];
        return buttons;
    }

    render() {
        return (
            <div className="main-page-wrapper">
                {/* <NavBar buttons={this._getButtons()} /> */}
                <div className="main-page">
                    <header></header>
                    <main>
                        <Summary />
                        <ProjectBox />
                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </div>
        );
    }
}

export default MainPage;
