import React from "react";
import '../styles/AboutBar.css'

function AboutBar(){
    return(
        <div className="about-bar">
            <div className="question-line">
                 and what are you searching for?
            </div>

            <div className="images-container">
                <img className="norm-window" src="../../images/weddnails.jpg" alt="first-pic"></img>
                <img className="upside-down-window" src='../images/lepardnails.jpg' alt="second-pic"></img>
                <img className="norm-window" src="../images/freshnails.jpg" alt="third-pic"></img>
            </div>

        <div className="img-descriptions">
            <div>
                A special event nails?
            </div>
            <div className="middle-description"> 
                Spice up your everyday nails?
            </div>
            <div>
                Or just a fresh manicure?
            </div>
        </div>

        <div className="book-description">Book an appointment with me!</div>
        </div>
        

    )
}
export default AboutBar;