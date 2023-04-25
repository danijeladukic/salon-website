import React from "react";
import '../styles/MyWorkBar.css'
import ImageSlider from '../components/ImageSlider.js'


function MyWorkBar(){
    const slides = [
        {url:'https://i.pinimg.com/564x/56/1b/82/561b8216b9d04f92ba01e8edab91b1d0.jpg', title:'a'},
        {url:'https://i.pinimg.com/564x/be/95/90/be95903d0082721ff3ddabab882e8c48.jpg', title:'a'},
        {url:'https://i.pinimg.com/564x/ad/28/61/ad2861ceb6ef7392965731a49f2fddf3.jpg', title:'a'},
        {url:'https://i.pinimg.com/564x/59/cf/34/59cf345b4fef0a72d53b95e228dbe0ae.jpg', title:'a'},
        {url:'https://i.pinimg.com/564x/db/f0/ea/dbf0eab2b33f5450f9dda9b871f239d5.jpg', title:'a'},
    
    ]
    const containerStyle ={
            width: '700px',
            height: '480px',
            
    }
    // const togglePhotoSize= (event) =>(
    //     console.log(event.target)

    // )
    // const Photos = document.getElementsByClassName('photo')
    // alert(Photos.length)
    
    // Photos.forEach(element => {
    //     element.addEventListener('click',console.log('click'))
    // });
    
   
    return(<div className="mywork-bar-container">
            <div className="mywork-bar">
                <div style={containerStyle}>
                    <ImageSlider className="image-slider" slides={slides} parentWidth={500}>
                    
                    </ImageSlider>
                </div>
            </div>

            <div className="mywork-bar-2">
                <div className="main-container">
                    <div className="photo-container">
                    <img className="photo right-up" src="../../images/photo1.jpg" alt="photo" ></img> 
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
        </div>


    )
}
export default MyWorkBar;