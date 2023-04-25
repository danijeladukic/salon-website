import React, { useCallback, useEffect, useRef, useState } from "react";


const ImageSlider= ({slides, parentWidth})=>{
    const timerRef = useRef(null)

    const [currentIndex, setCurrentIndex] = useState(0)

    const slideStyles={
        width:'100%',
        height:'100%',
        borderRadius:'10px',
        backgroundPosition:'center',
        bckgroundSize:'strech',
        backgroundImage: `url(${slides[currentIndex].url})`
    
    }
    const sliderStyles ={
        height:'100%',
        position:'relative',//because of arrows,
        minWidth: '719px',
        
    }
    const leftArrowStyle={
        position:'absolute',
        top: '50%',
        left: '5px',
        transform: 'traslate(0, -50%)',
        zIndex:'1',
        fontSize:'45px',
        color:'white',
        cursor:'pointer'
    }
    const rightArrowStyle={
        position:'absolute',
        top: '50%',
        right: '5px',
        transform: 'traslate(0, -50%)',
        zIndex:'1',
        fontSize:'45px',
        color:'white',
        cursor:'pointer'
    }
    const goToPrevious = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex-1
        setCurrentIndex(newIndex)
        
    }
    const goToNext =  useCallback(()=>{
        const isLastSlide = currentIndex === slides.length-1
        const newIndex = isLastSlide ? 0 : currentIndex+1

        setCurrentIndex(newIndex)
    },[currentIndex, slides])

    const dotsContainerStyles={
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    }
    const dotStyles={
        margin:'1px 5px',
        cursor: 'pointer',
        fontSize:'25px',
        color: 'white'

    }

    const getSlideStylesWithBackground = (slideIndex)=>(
        {
            ...slideStyles,
            backgroundImage: `url(${slides[slideIndex].url})`,
            width: `${parentWidth}px`,
        }
    )

    const slidesContainerOverflowStyles = {
        marginLeft:'100px',
        overflow:'hidden',
        height:'100%',
        width:'500px',
        
        

    }
    const slidesContainerStyles = {
        
        // paddingLeft:'127px',
        display:'flex',
        height: '100%',
        transition: 'transform ease-out 0.5s'

    }
    const getSlidesContainerStylesWithWidth = () =>({
        ...slidesContainerStyles,
            width :parentWidth*slides.length, //room for each slide
        transform : `translateX(${-(currentIndex * parentWidth)}px)`,
        

    }
    )

    const Dots = document.getElementsByClassName('dot');

    const goToSlide = (slideIndex)=>{
        console.log(slideIndex)
        setCurrentIndex(slideIndex)
        
        console.log(Dots[0].innerHTML)

        for (let i in Dots){
            i == slideIndex ? Dots[i].innerHTML = '•' 
                            : Dots[i].innerHTML ='○' 
        }

    }
   

    useEffect(()=>{
        if(timerRef.current){             //IF WE CLICK ARROWS IT CLEARS TIMER ID
            clearTimeout(timerRef.current);

        }
        timerRef.current = setTimeout(()=>{//slides automatically every 2 sec
            goToNext();
            console.log('use effect')
            //nastavi
            // for (let i in Dots){
            //     i == currentIndex ? Dots[i].innerHTML = '•' 
            //                     : Dots[i].innerHTML ='○' 
            // }
            

        },2000)

        return () => clearTimeout(timerRef.current) //if component is destroyed, we destroy setTimeout
    }, [goToNext] )



    return(
        <div style={sliderStyles}>
            <div style={leftArrowStyle} onClick={goToPrevious}>◁</div>
           
            <div style={rightArrowStyle} onClick={goToNext}>▷</div>

            <div style={slidesContainerOverflowStyles}>
            <div style = {getSlidesContainerStylesWithWidth()}>
                {slides.map((_,slideIndex)=>(
                    <div key={slideIndex} style={getSlideStylesWithBackground(slideIndex)}></div>
                ))}
            </div>
            </div>
            <div className="dot-container" style ={dotsContainerStyles}>
                {slides.map((slide,slideIndex)=>(
                    <div 
                     className="dot"
                     key ={slideIndex} style={dotStyles} onClick={ ()=> goToSlide(slideIndex)}>○</div>
                    
                ))}
            </div>
        </div>


    )
}

export default ImageSlider;