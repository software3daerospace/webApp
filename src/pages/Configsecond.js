import React from 'react';
import "./style/Configsecond.css";
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/configuration2.svg';
import Navbar1 from './components/Navbar/Navbar1';


const Configsecond = () => {

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
            <Logo className="conf"/>
            <p className="text">Veuillez allumer le recepteur en appuyant une fois sur le bouton </p>
            <p className="txt">Assurez-vous que le voyant s’allume lors de la mise en tension.</p>

            <Link to="Configthird" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Suivant</FormLabel>
                </div>
            </Link>
                
        </div>
    );

};

export default Configsecond;