import React from 'react';
import "./style/Configsixth.css";
import { ReactComponent as Figcon} from './assets/figcon2.svg';


const Configsixth2 = () => {

    return(
        <div>
        <div className = "titre">
            CONFIGURATION
        </div>
        <Figcon className = "pic"/>
        <div className = "textit">
        Connexion réussie !
        </div>
        </div>
    )
}

export default Configsixth2;