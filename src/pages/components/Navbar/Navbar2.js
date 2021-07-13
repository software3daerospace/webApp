import React from 'react';
import { ReactComponent as Back } from '../../assets/back.svg';
import './Navbar2.css';

const Navbar2 = () => {
  return(
    <div className="container">
      <h1 className="text-center">
       <Back className="back" />
      </h1> 
    </div>
  )
}

export default Navbar2;
