import React from "react";
import Nav from "../Nav/Nav.js";
import "./Header.css";

// import initials from "../../../Initials.png";

export default function Header() {
    return (
        <header>
            {/* <img src={initials} alt="my-initials" /> */}
            <Nav />
        </header>
    );
}
