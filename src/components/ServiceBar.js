import React from "react";
import '../styles/ServiceBar.css'

function ServiceBar(){
    return(

        <div className="service-bar">
            <div className="title">MY SERVICES</div>
            <div className="service">
                <span className="description">acrylic nails</span>
                <span className="price">$70</span>
            </div>
            <div className="service">
                <span className="description">gel nails</span>
                <span className="price">$50</span>
            </div>
            <div className="service">
                <span className="description">gel removal</span>
                <span className="price">$5</span>
            </div>
            <div className="service">
                <span className="description">russian manicure</span>
                <span className="price">$30</span>
            </div>
            <div className="service last-service">
                <span className="description">nail repair</span>
                <span className="price">$10</span>
            </div>
            <button className="button">BOOK NOW</button>


        </div>

    )
}
export default ServiceBar;