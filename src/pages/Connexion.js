import {Switch, FormLabel} from '@material-ui/core';
import React from 'react';
import "./style/Connexion.css";
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Inscriptioncad } from './assets/inscription.svg';
import { Link } from 'react-router-dom';
import TextField from './components/Textfield.js';
import Navbar2 from './components/Navbar/Navbar2';


const Connexion = () => {
  const styleObj = {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "200px",
    marginBottom: "50px"};

  const styleObject = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "0px",
    paddingRight : "50px",
    paddingLeft : "50px",
    borderRadius : "50px"};

  const styleBot = {
    border: "solid white",
    paddingTop : "20px",
    paddingBottom : "20px",
    borderRadius: "30px",
    paddingRight:"10px",
    paddingLeft:"10px", 
    textAlign: "center" , 
    justifyContent: "center" ,
    alignItems: "center" , 
    width: "20%",
    marginLeft: "700px",
    marginRight:"700px",
    marginTop:"350px"
    }
  
    
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    });
    
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };
     
  const textFieldData1 = [
    "Identifiant",
    "Mot de passe"
  ]
  
  return (
  <div>
    <Navbar2 />
    <div className="title-connexion">
      CONNEXION
    </div>
    <Inscriptioncad className="cc1" />
    <Inscriptioncad className="cc2" />
    <div style={styleObj}>
      <div>
        <Logo width="200px" height="200px"/>
      </div>
    </div>
    <form className="form-connexion">
        {textFieldData1.map((item , index) => {
         return ( <label style = {styleObject}>
                      <TextField label ={item}/>  
          </label>)
          })}        
   </form>
    <div className="button">
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        color="default"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
     Se souvenir de moi
     </div>
     <Link to="Mpforget" style={{ textDecoration: 'none' }}>
     <h1 className="mp">Mot de passe oublié?</h1>
     </Link>
      <div style={styleBot}>
      <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Suivant</FormLabel>
      </div>
    </div>
    
  );
};

export default Connexion;
