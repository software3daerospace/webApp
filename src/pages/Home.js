import React from 'react';
import FormLabel from "@material-ui/core/FormLabel";
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Rights } from './assets/rights.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  const styleObj = {
    color : "white",
    textAlign: "center",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",}

  return (
    <div style={styleObj}>
        <div style={{ display: "grid", width: "20%" }}>
            <div>
              <Logo width="250px" height="250px"/>
            </div>
            <FormLabel style={{color : 'white' ,fontSize : 30 , marginBottom: 50 , marginTop: 50 }}>Bienvenue sur DeVines !</FormLabel>
          <Link to="Inscription" style={{ textDecoration: 'none' }}>
            <div style={{border: "solid white", paddingTop : "20px", paddingBottom : "20px", borderRadius: "30px", textAlign: "center" , justifyContent: "center" , alignItems: "center",width :"100%", marginBottom : 40, marginTop : 10
            }}>
            <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 50 }}>S'inscrire</FormLabel>
          </div>
          </Link>
          <Link to="Connexion" style={{ textDecoration: 'none' }}>
            <div style={{border: "solid white", paddingTop : "20px", paddingBottom : "20px", borderRadius: "30px", textAlign: "center" , justifyContent: "center" , alignItems: "center",width :"100%"
            }}>
            <FormLabel style={{color : 'white' ,fontSize : 20 , marginBottom: 100 , marginTop: 50 }}>J'ai un compte</FormLabel>
          </div>
          </Link>
            <div>
              <Rights width="300px" height="300px"/>
            </div>
        </div>
    </div>
  );
};

export default Home;
