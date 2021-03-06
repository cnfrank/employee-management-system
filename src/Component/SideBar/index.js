import React, { useState } from "react";
import "./SideBar.css"

const SideBar = () => {
    const [lastClicked, setLastClicked] = useState(false);

    const resetBackgroundColor = () => {
        const list = document.querySelectorAll("li");
        list.forEach(list => {
            list.style.backgroundColor = "inherit";
        });
    };
    const onClick = e => {
        if (!lastClicked) {
            e.target.style.backgroundColor = "rgba(189, 169, 169, 0.856)";
            setLastClicked(true);
        }
        if (lastClicked) {
            resetBackgroundColor();
            e.target.style.backgroundColor = "rgba(189, 169, 169, 0.856)";
        }
    };

    return (
        <div className="side-bar">
            <div className="side-bar-wrapper">

                <div>
                    <span className="all-employees">
                        <i className="far fa-check-circle" />
                        <span className="all-employees-span">All Employees</span>
                    </span>
                </div>
                <div className="side-bar-projects">
                    <h4>PROJECT</h4>
                    <ul>
                        <li onClick={e => { onClick(e) }}>
                            <i className="fab fa-atlassian" style={{ color: "forestgreen" }} />
                            <span>Aroma Sport</span>
                        </li>
                        <li onClick={e => { onClick(e) }}>
                            <i className="fab fa-dochub" style={{ color: "darkmagenta" }} />
                            <span>DSV</span>
                        </li>
                        <li onClick={e => { onClick(e) }} >
                            <i className="fas fa-puzzle-piece" style={{ color: "midnightblue" }} />
                            <span>SeaFood Mall</span>
                        </li>
                        <li onClick={e => { onClick(e) }} >
                            <i className="fas fa-otter" style={{ color: "olivedrab" }} />
                            <span>FiveStar</span>
                        </li>
                        <li onClick={e => { onClick(e) }} >
                            <i className="fas fa-hat-wizard" style={{ color: "saddlebrown" }} />
                            <span>Zeto Bank</span>
                        </li>
                    </ul>
                </div>
                <div className="side-bar-status">
                    <h4>STATUS</h4>
                    <ul>
                        <li onClick={e => { onClick(e) }} >
                            <i className="fas fa-battery-full" style={{ color: "maroon" }} />
                            <span>Full-time</span>
                        </li>
                        <li onClick={e => { onClick(e) }} >
                            <i className="fas fa-battery-half" style={{ color: "orangered" }} />
                            <span>Part-time</span>
                        </li>
                    </ul>
                    <div className="add-project">
                        <button><span>add project</span></button>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default SideBar;
