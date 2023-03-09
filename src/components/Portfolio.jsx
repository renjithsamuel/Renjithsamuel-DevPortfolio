import React , {useEffect , useState}from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import Works from './works/Works';
import Contact from './contact/Contact';
import './portfolio.css';
import { Element, scroller } from 'react-scroll';
import { Link } from 'react-scroll';

// import ScrollAnimate from 'react-scroll-fade-animation';
// import Zoom from 'react-reveal/Zoom';
// import Bounce from 'react-reveal/Bounce';
// import Reveal from 'react-reveal/Reveal';
export default function Portfolio() {


  const [prevScrollpos, setPrevScrollpos] = useState(0);
  var rigthval = 0;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if(prevScrollpos > currentScrollPos){
        rigthval = rigthval-20;
      const backgroundpattern = document.getElementById('backgroundpattern');
      console.log("at scrollup R :" + rigthval);
      backgroundpattern.style.backgroundPosition =`0% - ${rigthval}%`;
      }
      else if(prevScrollpos < currentScrollPos){
        rigthval = rigthval+20;
        console.log("at scrolldown R :" + rigthval);
        const backgroundpattern = document.getElementById('backgroundpattern');
        backgroundpattern.style.backgroundPosition =`0% - ${rigthval}%`;
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

      {/* <Zoom>   */}
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
         {/* <FluidAnimation pointer={true} /> */}
        {/* </Zoom> */}
        <div id="backgroundpattern">
          
          </div>
    </div>
  )
}
