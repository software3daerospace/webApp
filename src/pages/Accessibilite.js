import React from 'react';
import "./style/Accessibilite.css";
import Switch from '@material-ui/core/Switch';



const Accessibilite=() =>{

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
 
    return(
        <div>
            <p className="titlex">accessibilité</p>
            <h1>
              <p className="phrase">Autoriser l’application à vous informer en cas d’évolution des plants.</p>
              <p className="phrase">Autoriser l’application à vous informer des nouveautés.</p>
              <p className="phrase">Autoriser l’envoi de notifications sur smartphone.</p>
              <p className="phrase">Autoriser DeVines à accéder à votre position.</p>
            </h1>

            <div className="butt1">
            <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color = "primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            </div>

            <div className="butt2">
            <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color = "primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            </div>

           <div className="butt3">
            <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedB"
            color = "primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
           </div>

           <div className="butt4">
            <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedB"
            color = "primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
           </div>
           
        </div>
    )

}

export default Accessibilite;