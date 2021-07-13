import React from 'react';
import "./style/Configsixth.css";
import { ReactComponent as Figcon} from './assets/figcon.svg';
import Navbar1 from './components/Navbar/Navbar1';


const Configsixth = () => {

    return(
        <div>
        <Navbar1 />
        <div className = "titre">
            CONFIGURATION
        </div>
        <Figcon className = "pic"/>
        <div className = "textit">
        Connection en cours...
        </div>
        </div>
    )
}

export default Configsixth;