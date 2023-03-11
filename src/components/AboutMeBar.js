import React from "react";
import '../styles/AboutMeBar.css'

function AboutMeBar(){
    return(

        <div className="about-me-bar">
            <div className="description-container">
            <div className="me-title"> WHO STANDS BEHIND THE MAGIC?</div>
            <div className="me-description">
                Katarina, the founder, your best nail<br></br>
                magician. Loves dogs, hates cuticles.<br></br>
                Conversation therapy is somethíng you <br></br>
                won't miss here,but won't pay extra for! <br></br>
                <br></br>
                Come and enyoy the beautifying process 
                in my precious littlle salon!
                                    </div>
            </div>
            <img className="me-img" src="..\images\result.png" alt='me-image'></img>

        </div>

    )
}
export default AboutMeBar;