import React from 'react';
import "./style/Help.css";
import {FormLabel, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar1 from './components/Navbar/Navbar1';
import { ReactComponent as Help1 } from './assets/help1.svg';
import { ReactComponent as Help2 } from './assets/help2.svg';
import TextField from './components/Textfield.js';

const Help = () =>{
    
    const styleObj = {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "0px",
        marginBottom: "43px",
        paddingRight : "50px",
        paddingLeft : "50px",
        borderRadius : "0px"
        };

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
        marginLeft: "60%",
        marginRight:"720px",
        marginTop:"800px"
    }

    const textFieldData1 = [
        "Nom ",
        "Addressse-email",
        "Sujet",
        "Message"
        ]

    return(
        <div>
        <Navbar1 />
        <p className="aide">Aide</p> 
        <div className="paragraph">
        Avez-vous un problème avec l’application DeVines ou votre récepteur? Envoyez-nous un message et nous nous mettrons en contact avec vous le plus tôt possible pour résoudre le problème.
        </div>
        <Help1 className="help11" />
        <Help1 className="help12" />
        <Help1 className="help13" />
        <Help2 className="help2" />
        <div >
              <Grid container spacing={1} className="grid"> 
              <form className="col1">
                {textFieldData1.map((item , index) => {
                return ( <label style = {styleObj}>
                            <TextField label ={item}/>  
                </label>)
                })}
              </form>
              </Grid>
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}>
                <div style={styleBot}>
                <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Envoyer</FormLabel>
                </div>
        </Link>
        </div>

    );
};

export default Help; 