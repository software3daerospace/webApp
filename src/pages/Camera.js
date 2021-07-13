import React from 'react';
import "./style/Camera.css";
import {FormLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';
import image from "./assets/cam.jpg";
import { ReactComponent as Rec} from './assets/rec.svg';
import { ReactComponent as Vec1} from './assets/vec1.svg';
import { ReactComponent as Vec2} from './assets/vec2.svg';


const Camera = () => {

    const styleBot = {
        border: "solid white",
        paddingTop : "10px",
        paddingBottom : "10px",
        borderRadius: "30px",
        paddingRight:"10px",
        paddingLeft:"10px", 
        textAlign: "center" , 
        justifyContent: "center" ,
        alignItems: "center" , 
        width: "15%",
        marginLeft: "1450px",
        marginRight:"720px",
        marginTop:"830px"
    }

    return(
    <>
    <img src={image} alt="" className="cam"/>
    <Rec className="recv" />
    <Vec1 className="vec1" />
    <Vec2 className="vec21" />
    <Vec2 className="vec22" />
    <Vec2 className="vec23" />
    <Vec2 className="vec24" />
    <Vec2 className="vec25" />
    <Vec2 className="vec26" />
    <h1 className="tit">e2405 - CAMERA 2</h1>
    <h1 className="cont">Vérifiez la propreté des caméras</h1>
    <Link to="Home" style={{ textDecoration: 'none' }}>
        <div style={styleBot}>
            <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 100 , marginRight : 50 , marginLeft : 50 , justifyContent: "center" , textAlign: "center" }}>Retour</FormLabel>
        </div>
    </Link>
    </>
    );
};

export default Camera;