import React,{useEffect , useState} from 'react';
import './Navbar.css';

export default function Navbar() {

  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollpos > currentScrollPos || currentScrollPos < 10);
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

  let handleClick = event => {
    let others = document.getElementsByClassName('navelem');
    // console.log(others);
    for(let i=0;i<others.length;i+=1){
      others[i].classList.remove('activeunder');
    }
    event.target.classList.add('activeunder');
  }


  return (
    <div>
      <nav  id='navitems' className={visible ? 'visible' : 'hidden'}>
          <a href='#Home' id='home' className='navelem' onClick={handleClick}>Home</a>
          <a href='#About' id='abt' className='navelem' onClick={handleClick}>About</a>
          <a href='#Work' id='work' className='navelem' onClick={handleClick}>Works</a>
          <a href='#Contact' id='contact' className='navelem' onClick={handleClick}>Contact</a>
      </nav>
      
    </div>
  );
}