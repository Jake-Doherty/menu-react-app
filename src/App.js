import React from "react";
import "./App.css";
import Footer from "./components/Layout/Footer/Footer.js";
import Header from "./components/Layout/Header/Header.js";
import Main from "./components/Layout/Main/Main.js";

// import background from "./background.gif";
import { useState } from "react";

// function setStyles() {
//     document.body.style.backgroundImage = `url(${background})`;
//     // document.body.style.backgroundImage = "none";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundRepeat = "no-repeat";
//     document.body.style.backgroundPosition = "center";
// }

function App() {
    // setStyles();
    const [toggle, setToggle] = useState(true);

    const [nav, setNav] = useState("home");

    return (
        <div className="App">
            <Header
                toggle={toggle}
                setToggle={setToggle}
                nav={nav}
                setNav={setNav}
            />
            <Main nav={nav} />
            <Footer />
        </div>
    );
}

export default App;
