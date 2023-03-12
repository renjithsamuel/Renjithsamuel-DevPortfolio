import React , {useEffect , useState,useRef }from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import Works from './works/Works';
import Contact from './contact/Contact';
import './portfolio.css';
import { Element, scroller } from 'react-scroll';
import { Link } from 'react-scroll';
export default function Portfolio() {

  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const backgroundPatternRef = useRef(null);
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

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos]);
  

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
    </div>
  )
}
