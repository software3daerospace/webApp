import React from 'react';
import "./style/Configthird.css";
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as Rect} from './assets/configuration3.svg';
import Navbar1 from './components/Navbar/Navbar1';



const Configthird = () => {

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
            <Rect className="rectangle"/>
            <p className="text">À présent, activez la fonction Bluetooth de votre smartphone et selectionnez le canal de votre appareil</p>
            <Link to="Configthird2" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Suivant</FormLabel>
                </div>
            </Link>
                
        </div>
    );

};

export default Configthird;