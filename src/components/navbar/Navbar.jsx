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

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos]);
  
  let handleClick = event => {
    let others = document.getElementsByTagName('a');
    console.log(others);
    for(let i=0;i<others.length;i+=1){
      others[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }


  return (
    <div>
      <nav  className={visible ? 'visible' : 'hidden'}>
          <a href='#Home' id='home' onClick={handleClick}>Home</a>
          <a href='#About' id='abt' onClick={handleClick}>About</a>
          <a href='#Work' id='work' onClick={handleClick}>Works</a>
          <a href='#Contact' id='contact' onClick={handleClick}>Contact</a>
      </nav>
      
    </div>
  );
}