import React from "react";
import "./notFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="body">
            {/* <head>
  <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/4b9ba14b0f.js" crossorigin="anonymous"></script>
</head> */}
            <div className="mainbox">
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"></i>
                <div className="err2">4</div>
                <div className="msg">
                    <p>Maybe this page moved? </p>
                    <p>Got deleted? </p>
                    <p>Is hiding out in quarantine?</p>
                    <p>Never existed in the first place?</p>
                    <p>Or you do not have a permission for that page?</p>

                    <p>
                        Let's go <Link to="/">home</Link> and try from there.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
