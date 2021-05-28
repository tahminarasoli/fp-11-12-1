import React from "react";
import about from "../../images/about.png";
import "./About.css";

function About() {
    return (
        <>
            <div className="section">
                <div className="about">
                    <p>
                        This is the final project from HYF class 11-12 group-1
                        students. In this project, we tried to give a bit back
                        to society and participate in solving or at least lower
                        an existing social problem and propose a solution for
                        it. The issue that is addressed in this project is the
                        challenge that vulnerable people such as old people,
                        people with limited movement, sick people, etc... are
                        facing to do their groceries and bring them to their
                        address without extra costs. The goal of this app is to
                        link those people who need help with their groceries to
                        volunteers who are willing to help.
                    </p>
                </div>
                <div className="image">
                    <img className="image" src={about} alt="about" />
                </div>
            </div>
        </>
    );
}

export default About;
