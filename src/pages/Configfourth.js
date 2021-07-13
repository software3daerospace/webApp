import React from 'react';
import "./style/Configfourth.css";
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as Wifi } from './assets/configuration4.svg';
import Navbar1 from './components/Navbar/Navbar1';


const Configfourth = () => {

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
        marginLeft: "850px",
        marginRight:"720px",
        marginTop:"730px"
    }

    return(
        <div>
            <Navbar1 />
            <p className="title"> Configuration </p>
            <p className="text">Après avoir couplé votre smartphone avec votre récepteur, il vous ai désormais possible d’activer le Wifi du récepteur afin d’avoir accès aux données collectées dans la journée </p>
            <p className="txt">Assurez-vous que le voyant s’allume lors de la mise en tension.</p>
            <Wifi className="wifi"/>
            <Link to="Configfifth" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Suivant</FormLabel>
                </div>
            </Link>
                
        </div>
    );

};

export default Configfourth;