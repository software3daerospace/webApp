import React from 'react';
import "./style/Configfirst.css";
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/configuration1.svg';
import Navbar1 from './components/Navbar/Navbar1';

const Configfirst = () => {

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
            <Logo className="conf" width="200px" height="200px"/>
            <p className="text">Redressez le boîtier de 45° afin d’accéder au tableau de commande</p>
            <p className="txt">Ajustez la force exercée sur les têtes rotatives en abaissant les gâchettes.</p>

            <Link to="Configsecond" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Suivant</FormLabel>
                </div>
            </Link>
                
        </div>
    );

};

export default Configfirst;