import React from 'react';
import "./style/Echec.css";
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar1 from './components/Navbar/Navbar1';


const Echec = () => {

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
            <p className = "middle"> La connexion a échoué</p>

            <p className="sub">
                La saisie de vos identifiants est incorrecte. Vous pouvez réessayer ou réinitialiser votre mot de passe oublié.
            </p>

            <Link to="Connexion" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>OK</FormLabel>
                </div>
            </Link>
                
        </div>
    );
};

export default Echec;
