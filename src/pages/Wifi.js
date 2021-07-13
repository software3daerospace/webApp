import React from 'react';
import "./style/Wifi.css";
import {FormLabel} from '@material-ui/core';

import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {ReactComponent as Vec} from "./assets/vec.svg";
import {ReactComponent as Box} from "./assets/box.svg";
import {ReactComponent as Phone} from "./assets/phone.svg";
import Navbar1 from './components/Navbar/Navbar1';

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiFormLabel-root": {
        color: "red" // or black
      }
    }
}));



const Wifi = () => {

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
        marginTop:"800px"
    }

    return(
        <div>
        <Navbar1 />
        <h1 className="tit">CONNEXION WIFI</h1>
        <h1 className="par">Veuillez renseigner le nom de votre réseau WiFi ainsi que sa clé de sécurité </h1>
        <div>
            <Vec className="vec1" />
            <TextField className="nr" id="standard-basic" variant="standard" label="Nom du réseau" color = "primary"/>
            <Vec className="vec2" />
            <TextField className="cs" id="standard-basic" variant="standard" label="Clé de sécurité" />
            <Box className="box" />
            <h1 className="des1">Bbox EE1265</h1>
            <Phone className="phone" />
            <h1 className="des2">iPhone de Alexandre</h1>
        </div>
        <Link to="Home" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Confirmer</FormLabel>
                </div>
        </Link>
        </div>
    );

};

export default Wifi;