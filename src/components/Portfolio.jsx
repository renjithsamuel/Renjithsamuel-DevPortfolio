import React , {useEffect , useState,useRef }from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import Works from './works/Works';
import Contact from './contact/Contact';
import './portfolio.css';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';
export default function Portfolio() {

  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [prevMousepos, setPrevMousepos] = useState(0);
  const backgroundPatternRef = useRef(null);
  const CursorRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if(prevScrollpos > currentScrollPos){
        backgroundPatternRef.current.classList.remove('increaseSize');
        // console.log(backgroundPatternRef);
      }
      else if(prevScrollpos < currentScrollPos){
        backgroundPatternRef.current.classList.add('increaseSize');
      }
      setPrevScrollpos(currentScrollPos);
    };

        function throttle (callbackFn, limit) {
          let wait = false;                  
          return function () {              
              if (!wait) {                  
                  callbackFn.call();           
                  wait = true;               
                  setTimeout(function () {   
                      wait = false;          
                  }, limit);
              }
          }
      }
  
     window.addEventListener("scroll", throttle(handleScroll, 150));

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos]);


  useEffect(()=>{
    const handleCursor = (e) =>{
        const currMousePos = e.clientX + e.clientY;
        CursorRef.current.style.left = (e.clientX-10)+ "px";
        CursorRef.current.style.top = (e.clientY-10) + "px";
        setPrevMousepos(currMousePos);
      };
      
      window.addEventListener("mousemove",handleCursor );
      return () => window.removeEventListener('mousemove',handleCursor);
  },[prevMousepos])
  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
      else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenItems = document.querySelectorAll('.hiddenitem');
  hiddenItems.forEach((el) => observer.observe(el));

  return ( 
    <div className='allcontainer' id='portfolio'>


        <div id="portfolio-items">
          
          <Navbar id='Navbar' >
          <Link to="Home" smooth={true} duration={500}>Home</Link>
         <Link to="About" smooth={true} duration={500}>About</Link>
          <Link to="Work" smooth={true} duration={500}>Work</Link>
           <Link to="Contact" smooth={true} duration={500}>Contact</Link>

          </Navbar>
          <Element name="Home">
           <Home id="Home"  className='portfolio-item'/> </Element>
           <Element name="About" className='hiddenitem'>

          <About id="About"  className='portfolio-item'/> </Element>
          <Element name="Work" className='hiddenitem'>
          <Works id="Work"  className='portfolio-item'/></Element>
          <Element name="Contact" className='hiddenitem'> 
           <Contact id="Contact" className='portfolio-item'/></Element>
        </div>
        <div id="backgroundpattern"  ref={backgroundPatternRef}>
          
          </div>
          <div className="cursor" ref={CursorRef}></div>
    </div>
  )
}
