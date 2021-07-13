import React from 'react';
import "./style/Mpnv.css";
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as Box } from './assets/recup.svg';
import Navbar1 from './components/Navbar/Navbar1';


const Mpnv = () => {

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
        marginLeft: "720px",
        marginRight:"720px",
        marginTop:"800px"
    }
      
    return(
        <div>
           <Navbar1 />
            <p className = "motdepasse"> Nouveau mot de passe</p>

            <Box className="boxing1" />

            <div className="try1">
            Nouveau mot de passe*
            </div>

            <div className = "cond">
                <tr>
                <td>* Votre mot de passe doit contenir au minimum :</td> 
                </tr>
                <tr>
                <td>-  huit lettres dont une majuscule et une minuscule</td>
                </tr>
                <tr>
                <td>- un caractère spécial ( !,?,-,_,@)</td>
                </tr>
                <tr>
                <td>- un chiffre.</td>
                </tr>
            </div>
            
            <Box className="boxing2" />

            <div className="try2">
            Confirmation
            </div>

            <Link to="Connexion" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Confirmer</FormLabel>
                </div>
            </Link>
                
        </div>
    );
};

export default Mpnv;