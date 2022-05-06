import React from 'react';
import github from '../../assets/Social/github-512.webp';
import linkedin from '../../assets/Social/LinkedIn_icon_circle.svg.png';

function Footer() {
  
    return (
      <footer className="flex-row px-1">
        <h2>
          <a data-testid="link" href="https://github.com/Dommy99">
          <img src={github} className="my-2" style={{ width: "5%" }} alt="cover" />
          </a>
        
          <a data-testid="link" href="https://www.linkedin.com/in/dominique-akers-319a07154/">
          <img src={linkedin} className="my-2" style={{ width: "5%" }} alt="cover" /> 
          </a>
        </h2>
        {/* <h2>
          <a data-testid="link" href="/">
            Blog(coming soon) 
          </a>
        </h2> */}
      </footer>
    );
  }
  
  export default Footer;