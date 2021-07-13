import React from 'react';
import TextField from './components/Textfield.js';
import "./style/Inscription.css";
import { Link } from 'react-router-dom';
import { Grid,FormLabel} from '@material-ui/core';
import Navbar2 from './components/Navbar/Navbar2';
import { ReactComponent as Inscriptioncad } from './assets/inscription.svg';

const Inscription = () => {
  const styleObj = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px",
    paddingRight : "50px",
    paddingLeft : "50px",
    borderRadius : "50px"
    };
  
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
    marginLeft: "670px",
    marginRight:"100px" ,
    marginTop: "700px"
    }


  const textFieldData1 = [
    "Nom de famille",
    "Addressse-email",
    "Pays",
    "Ville",
     "Employé*",
     "Mot de passe"
    ]

    const textFieldData2 = [
      "Prénom",
      "Numéro de téléphone",
      "Adresse postale",
      "Code postale",
      "Nom de l'entreprise viticole",
      "Confirmation du mot de passe"       
      ]

  return (
    <div>
      <Navbar2 />
    <div className="wrapper" style = {{justifyContent: "center", textAlign: "center", alignItems: "center"}}>
      <h1 className="title-inscription">INSCRIPTION</h1>
    <Inscriptioncad className="ic1" />
    <Inscriptioncad className="ic2" />
    <Inscriptioncad className="ic3" />
    <Inscriptioncad className="ic4" />
    <Inscriptioncad className="ic5" />
    <Inscriptioncad className="ic6" />
    <Inscriptioncad className="ic7" />
    <Inscriptioncad className="ic8" />
    <Inscriptioncad className="ic9" />
    <Inscriptioncad className="ic10" />
    <Inscriptioncad className="ic11" />
    <Inscriptioncad className="ic12" />
    <div style={{marginTop: "150px"}} >
      <Grid container spacing={1} className="grid">
      <Grid item md={6} direction="column">
      <form className="inscription-form1">
        {textFieldData1.map((item , index) => {
         return ( <label style = {styleObj}>
                      <TextField label ={item}/>  
          </label>)
          })}

          
      </form>

      </Grid>
           <Grid item md={6 } direction="column">
           <form className="inscription-form2">
        {textFieldData2.map((item , index) => {
         return ( 
         <label style ={styleObj}>
                    <TextField label ={item}/>  
          </label>)
          })}

          
      </form>
  
     
      </Grid>
      </Grid>
    <Link to="Configfirst" style={{ textDecoration: 'none' }}>
    <div style={styleBot}>
    <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 50 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Suivant</FormLabel>
    </div>
    </Link>
    </div>
    </div>
    </div>
  );
};

export default Inscription;
