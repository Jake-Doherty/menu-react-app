import React from "react";
import "./Home.css";
import initials from "../../../Initials.png";

export default function Home() {
    return (
        <>
            <div className="welcome-div">
                <img className="initials" src={initials} alt="my-initials" />
            </div>
        </>
    );
}
