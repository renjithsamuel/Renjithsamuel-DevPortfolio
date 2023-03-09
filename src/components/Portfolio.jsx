import React , {useEffect , useState}from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import Works from './works/Works';
import Contact from './contact/Contact';
import './portfolio.css';
import FluidAnimation from 'react-fluid-animation';

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


  return ( 
    <div className='allcontainer' id='portfolio'>

      {/* <Zoom>   */}
        <div id="portfolio-items">
          <Navbar id='Navbar' />
           <Home id="Home"  className='portfolio-item'/>
          <About id="About"  className='portfolio-item'/>
          <Works id="Work"  className='portfolio-item'/>
           <Contact id="Contact" className='portfolio-item'/>
        </div>
         {/* <FluidAnimation pointer={true} /> */}
        {/* </Zoom> */}
        <div id="backgroundpattern">
          
          </div>
    </div>
  )
}
