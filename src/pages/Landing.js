import React, { useState, useEffect, useRef } from 'react';

const slideshowImages = [
  { link: '/assets/slideshow/sh1.png', alt: 'Slide 1' },
  { link: '/assets/slideshow/sh2.png', alt: 'Slide 2' },
  { link: '/assets/slideshow/sh3.png', alt: 'Slide 3' },
  { link: '/assets/slideshow/sh4.png', alt: 'Slide 4' },
  ]

const slideshowStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '20px',
};

const slideStyles = {
  display: 'none',
  width: '100%',
  maxWidth: '1000px',
  height: 'auto',
  margin: '0 auto',
};

const buttonContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
};

const buttonStyles = {
  width: '60px',
  height: '60px',
  margin: '0 5px',
  cursor: 'pointer',
  backgroundColor: '#858585',
  color: 'white',
  textAlign: 'center',
  lineHeight: '60px',
  borderRadius: '0px',
  border: '2px solid #000000',
  boxShadow: 'inset -2px -4px 0 0px #595959, inset 2px 2px 0 0px #b3b3b3',
  textShadow: '3px 3px 0 #4c4c4c',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0
};

const arrowButtonStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  border: 'none',
  padding: '15px',
  cursor: 'pointer',
  fontSize: '24px',
  zIndex: 2,
  borderRadius: '5px',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 20px'
};

const Landing = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);
  const slideIntervalRef = useRef(null);

  useEffect(() => {
    showDivs(slideIndex);
    
    // Set up automatic slideshow
    slideIntervalRef.current = setInterval(() => {
      setSlideIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        return newIndex > slideshowImages.length ? 1 : newIndex;
      });
    }, 5000); // Change slide every 5 seconds
    
    return () => {
      // Clean up interval on component unmount
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [slideIndex]);

  const plusDivs = (n) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  const currentDiv = (n) => {
    setSlideIndex(n);
  };

  const showDivs = (n) => {
    let i;
    const x = slidesRef.current;
    const dots = dotsRef.current;
    if (n > x.length) { setSlideIndex(1); return; }
    if (n < 1) { setSlideIndex(x.length); return; }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
  };

  return (
    <div className='landing-container'>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Welcome to the home page of</h1>
      <img src="/assets/landing.webp" alt="Landing" className="landing-img" style={{ width: '50%' }}/>
      <br></br>
      <div className="slideshow" style={{...slideshowStyles, position: 'relative'}}>
        <div style={{ width: '100%', position: 'relative' }}>
          <button 
            onClick={() => plusDivs(-1)} 
            style={{...arrowButtonStyles, left: '0'}}
          >
            &#10094;
          </button>
          
          {slideshowImages.map((image, index) => (
              <div key={index} className="mySlides" ref={(el) => slidesRef.current[index] = el} style={slideStyles}>
                <img 
                  src={image.link} 
                  alt={image.alt} 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
          ))}

          <button 
            onClick={() => plusDivs(1)} 
            style={{...arrowButtonStyles, right: '0'}}
          >
            &#10095;
          </button>
        </div>
        
        <div className="slideshow-button-container" style={{...buttonContainerStyles, marginTop: '20px', gap: '10px'}}>
          {slideshowImages.map((image, index) => (
            <div 
              key={index} 
              className="minecraft-btn" 
              ref={(el) => dotsRef.current[index] = el} 
              onClick={() => currentDiv(index + 1)} 
              style={buttonStyles}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;