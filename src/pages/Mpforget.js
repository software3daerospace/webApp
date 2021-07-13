import React from 'react';
import "./style/Mpforget.css";
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar1 from './components/Navbar/Navbar1';

const Mpforget = () => {

    const styleBot1 = {
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
        marginTop:"650px"
    }

    const styleBot2 = {
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
        marginTop:"50px"
    }

      
    return(
        <div>
            <Navbar1/>
            <p className = "msg">Mot de passe oublié ?</p>

            <p className="message">
            Un numéro de récupération va vous être envoyé sur le numéro de téléphone renseigné lors de votre inscription. Vous pourrez, par la suite, enregistrer un nouveau mot de passe.
            </p>

            <Link to="Connexion" style={{ textDecoration: 'none' }}>
                <div style={styleBot1}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Non, merci</FormLabel>
                </div>
            </Link>
            <Link to="Recup" style={{ textDecoration: 'none' }}>
                <div style={styleBot2}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>OK</FormLabel>
                </div>
            </Link>
                
        </div>
    );
};

export default Mpforget;
