import React, { useState, useEffect, useRef } from 'react';

const slideshowImages = [
  { link: '/assets/slideshow/sh1.png', alt: 'Slide 1' },
  { link: '/assets/slideshow/sh2.png', alt: 'Slide 2' },
  { link: '/assets/slideshow/sh3.png', alt: 'Slide 3' },
  { link: '/assets/slideshow/sh4.png', alt: 'Slide 4' },
  ]

const Landing = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);

  useEffect(() => {
    showDivs(slideIndex);
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
      <h1>Welcome to the home page of</h1>
      <img src="/assets/landing.webp" alt="Landing" className="landing-img" style={{ width: '50%' }}/>
      <br></br>
      <div className="slideshow">
        {slideshowImages.map((image, index) => (
            <div key={index} className="mySlides" ref={(el) => slidesRef.current[index] = el}>
              <img src={image.link} alt={image.alt}/>
            </div>
        ))}
        <div className="slideshow-button-container">
          {slideshowImages.map((image, index) => (
            <div key={index} className="minecraft-btn" ref={(el) => dotsRef.current[index] = el} onClick={() => currentDiv(index + 1)} style={{ width: '60px' }}>{index + 1}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;