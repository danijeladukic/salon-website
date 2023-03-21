import React from "react";
import '../styles/MyWorkBar.css'

function MyWorkBar(){
    return(

        <div className="mywork-bar">
        
           <img src="../../images/mywork.png"></img>
        
       <div className="main-container">
           <div className="photo-container">
           <img className="photo right-up" src="../../images/photo1.jpg" alt="photo"></img> 
           <img className="photo right-down" src="../../images/photo2.jpg" alt="photo"></img> 
           <img className="photo left-down" src="../../images/photo3.jpg" alt="photo"></img> 
           <img className="photo right-down" src="../../images/photo4.jpg" alt="photo"></img>
           </div>
           <div className="photo-container"> 
           <img className="photo left-down right-down" src="../../images/photo5.jpg" alt="photo"></img> 
           <img className="photo left-down" src="../../images/photo6.jpg" alt="photo"></img> 
           <img className="photo right-up" src="../../images/photo7.jpg" alt="photo"></img> 
           <img className="photo left-up right-up" src="../../images/photo8.jpg" alt="photo"></img> 
         </div>
        </div>
        </div>


    )
}
export default MyWorkBar;