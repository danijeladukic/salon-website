import React, { useCallback, useEffect, useRef, useState } from "react";


const ImageSlider= ({slides})=>{
    const timerRef = useRef(null)

    const [currentIndex, setCurrentIndex] = useState(0)

    const slideStyles={
        width:'100%',
        height:'100%',
        borderRadius:'10px',
        backgroundPosition:'center',
        bckgroundSize:'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    
    }
    const sliderStyles ={
        height:'100%',
        position:'relative'//because of arrows,
        
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

    const goToSlide = (slideIndex)=>{
        setCurrentIndex(slideIndex)
    }
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    useEffect(()=>{
        if(timerRef.current){             //IF WE CLICK ARROWS IT CLEARS TIMER ID
            clearTimeout(timerRef.current);

        }
        timerRef.current = setTimeout(()=>{//slides automatically every 2 sec
            goToNext();
            console.log('use effect')
            

        },2000)

        return () => clearTimeout(timerRef.current) //if component is destroyed, we destroy setTimeout
    }, [goToNext] )



    return(
        <div style={sliderStyles}>
            <div style={leftArrowStyle} onClick={goToPrevious}>◁</div>
           
            <div style={rightArrowStyle} onClick={goToNext}>▷</div>

            <div style={slideStyles}></div>

            <div style ={dotsContainerStyles}>
                {slides.map((slide, slideIndex)=>(
                    <div key ={slideIndex} style={dotStyles} onClick={ ()=> goToSlide(slideIndex)}>○</div>
                    
                ))}
            </div>
        </div>


    )
}

export default ImageSlider;