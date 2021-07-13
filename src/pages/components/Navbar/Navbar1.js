import React from 'react';
import { ReactComponent as Back } from '../../assets/back.svg';
import { ReactComponent as Quit } from '../../assets/quit.svg';
import './Navbar1.css';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return(
    <div className="container">
      <h1 className="text-center">
       <Back className="back" />
       <Link to="Connexion" style={{ textDecoration: 'none' }}> 
            <Quit className="quit"/>
       </Link>
      </h1> 
    </div>
  )
}

export default Navbar1;
