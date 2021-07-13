import React from 'react';
import "./style/Configthird2.css";
import { ReactComponent as Rect} from './assets/configuration32.svg';



const Configthird2 = () => {
    return(
        <div>
            <p className="title"> Configuration </p>
            <Rect className="rectangle"/>
            <p className="text">Jumelage en cours ...</p>
        </div>
    );
};

export default Configthird2;