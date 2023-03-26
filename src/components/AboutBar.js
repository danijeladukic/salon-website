import React from "react";
import '../styles/AboutBar.css'

function AboutBar(){
    return(
        <div className="about-bar">
            <div className="question-line">
                 and what are you searching for?
            </div>

            <div className="container">
                <div className="image-container">
                  <img className="abstract-img norm-window" src="../../images/weddnails.jpg" alt="first-pic"></img>
                  <div className="img-description">Special event nails</div>
                </div>
                <div className="image-container">
                    <img className="abstract-img upside-down-window" src='../images/lepardnails.jpg' alt="second-pic"></img>
                    <div className="img-description">to spice up your everyday nails?</div>
                    
                </div>
                <div className="image-container">
                    <img className="abstract-img upside-down-window" src='../images/freshnails.jpg' alt="third-pic"></img>
                    <div className="img-description">Or just a fresh manicure?</div>   
                </div>
            </div>

            <button className="book-description">BOOK WITH ME</button>
        </div>
        

    )
}
export default AboutBar;