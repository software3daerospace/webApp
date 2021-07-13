import React from 'react';
import "./style/Vignoble.css";
import {ReactComponent as Emp} from "./assets/employee.svg";
import {ReactComponent as Veh} from "./assets/vehicule.svg";
import {ReactComponent as Full} from "./assets/full.svg";
import {ReactComponent as Empty} from "./assets/empty.svg";

const Vignoble=() => {

    return(
        <>
        <h1 className="title">Mon vignoble</h1>
        <Emp className="employee" />
        <Veh className="vehicule"/>
        <Full className="full"/>
        <p className = "lea">Léa Dutronc</p>
        <Empty className="empty1"/> 
        <p className = "thomas">Thomas Dumas</p>
        <Empty className="empty2"/>
        <p className = "fred">Fred Grofe</p> 
        <Empty className="empty3"/>
        <p className = "celia">Célia Toise</p> 
        </>
    );
};
export default Vignoble;