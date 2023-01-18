import React from "react";
import Nav from "../Nav/Nav.js";
import "./Header.css";

export default function Header({ toggle, setToggle, nav, setNav }) {
    return (
        <header>
            <Nav
                toggle={toggle}
                setToggle={setToggle}
                nav={nav}
                setNav={setNav}
            />
        </header>
    );
}
