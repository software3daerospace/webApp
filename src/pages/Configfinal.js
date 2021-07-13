import React from 'react';
import "./style/Configfinal.css";
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as Figyes} from './assets/yes.svg';
import Navbar1 from './components/Navbar/Navbar1';

const Configfinal = () => {


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
        <div className = "textfin">
        Hop ! Vos appareils sont maintenant configurés !
        </div>
        <Figyes className="figyes" />
        <Link to="Home" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Suivant</FormLabel>
                </div>
        </Link>
        </div>
    )
}

export default Configfinal; 