import "./App.css";
import Footer from "./components/Layout/Footer/Footer.js";
import Header from "./components/Layout/Header/Header.js";
import Main from "./components/Layout/Main/Main.js";

// hopefully this doesn't mess things up!!!!

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
