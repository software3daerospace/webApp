import React from 'react';
import "./style/Configthird3.css";
import { ReactComponent as Rect} from './assets/configuration33.svg';

const Configthird3 = () => {
    return(
        <div>
            <p className="title"> Configuration </p>
            <Rect className="rectangle"/>
            <p className="text">Jumelage réussi!</p>
        </div>
    );
};

export default Configthird3;