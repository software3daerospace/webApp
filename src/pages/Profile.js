import React from 'react';
import "./style/Profile.css";
import { ReactComponent as Cadre1 } from './assets/cadre1.svg';
import { ReactComponent as Cadre2 } from './assets/cadre2.svg';
import { ReactComponent as Crayon } from './assets/crayon.svg';
import { Container, Row, Col } from 'reactstrap';

  
const Profile = () =>{

    return(
        <div>
            <p className="tit1"> Profil </p>
            <Cadre1 className="cadre1"/>
            <Container className="cont1">
            <Row>
                <Col className="prénom">Prénom</Col>
                <Col className ="pren">Alexandre</Col>
                <Col className="prénom">Adresse postale</Col>
                <Col className ="pren">4 rue des Mangoustes</Col>
                <Col className="prénom">Code postale</Col>
                <Col className ="pren">32 820</Col>
                <Col className="prénom">E-mail</Col>
                <Col className ="pren">alexandre.d@gmail.com</Col>
            </Row>
            </Container>
            <Container className="cont2">
            <Row>
                <Col className="prénom">Nom de famille</Col>
                <Col className ="pren">Dupont</Col>
                <Col className="prénom">Ville</Col>
                <Col className ="pren">Etauliers</Col>
                <Col className="prénom">Pays</Col>
                <Col className ="pren">France</Col>
                <Col className="prénom">Numéro de téléphone</Col>
                <Col className ="pren">04 12 23 45 56 </Col>
            </Row>
            </Container>
            <Crayon className="cray1" />
            
            <p className="tit2">appareil</p>
            <Cadre2 className="cadre2"/>
            <Container className="cont3">
            <Row>
                <Col className="prénom">Nom de l'exploitation</Col>
                <Col className ="pren">SCI Test    Braucol,côté route</Col>
                <Col className="prénom">Cépage</Col>
                <Col className ="pren">4 rue des Mangoustes   Parcelle1</Col>
                <Col className="prénom">Cépage</Col>
                <Col className ="pren">4 rue des Mangoustes   Parcelle2</Col>
                <Col className="prénom">Cépage</Col>
                <Col className ="pren" > 4 rue des Mangoustes</Col>
            </Row>
            </Container>
            <Container className="cont4">
            <Row>
                <Col className="prénom">Type de sol</Col>
                <Col className ="pren">Sableux</Col>
                <Col className="prénom">Type de sol</Col>
                <Col className ="pren">Argilleux</Col>
                <Col className="prénom">Type de sol</Col>
                <Col className ="pren">Sableux</Col>
            </Row>
            </Container>
            <Crayon className="cray2" />
        </div>
    )

}
export default Profile;