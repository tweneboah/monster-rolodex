import React, { Component } from 'react'

class Header extends Component {

 render() { 
  return ( 

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="https://cti-ghana.herokuapp.com/">Emma</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
     
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ongoing Projects
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="https://cti-ghana.herokuapp.com/">CTI-Ghana</a>
         
        </div>
      </li>
      
    </ul>
    
  </div>
</nav>
 
   );
 }
}
 
export default Header;