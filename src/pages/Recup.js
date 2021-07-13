import React from 'react';
import "./style/Recup.css";
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as Box } from './assets/recup.svg';
import { ReactComponent as Line } from './assets/line.svg';
import Navbar1 from './components/Navbar/Navbar1';


const Recup = () => {

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
            <p className = "new"> Numéro de récupération </p>

            <Box className="boxing" />
            <Line className="line1" />
            <Line className="line2" />
            <Line className="line3" />
            <Line className="line4" />


            <Link to="Mpnv" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Confirmer</FormLabel>
                </div>
            </Link>
                
        </div>
    );
};

export default Recup;
