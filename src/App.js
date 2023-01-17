import "./App.css";
import Footer from "./components/Layout/Footer/Footer.js";
import Header from "./components/Layout/Header/Header.js";
import Main from "./components/Layout/Main/Main.js";

import background from "./background.gif";

// hopefully this doesn't mess things up!!!!
function setStyles() {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
}

function App() {
    setStyles();
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
