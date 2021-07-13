import React from 'react';
import "./style/Configfifth.css";
import TextField from './components/Textfield.js';
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar1 from './components/Navbar/Navbar1';


const Configfifth = () => {

    const textFieldData1 = [
        "Nom du réseau",
        "Clé de sécurité"
    ]

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
        marginRight:"720px",
        marginTop:"780px"
        }   

    return(
        <div>
        <Navbar1 />
        <div className = "titre">
            CONFIGURATION
        </div>
        <div className = "texte">
            Veuillez renseigner le nom de votre réseau WiFi ainsi que sa clé de sécurité 
        </div>
        <form className="formulaire">
        {textFieldData1.map((item , index) => {
         return ( <label style = {styleObject}>
                      <TextField label ={item}/>  
          </label>)
          })}        
        </form>
        <Link to="Configsixth" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Suivant</FormLabel>
                </div>
        </Link>
        </div>
    )
}

export default Configfifth;