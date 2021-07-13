import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from "react-router-dom";
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Echec from './pages/Echec';
import Home from './pages/Home';
import Configfirst from './pages/Configfirst';
import Configsecond from './pages/Configsecond';
import Configthird from './pages/Configthird';
import Configthird2 from './pages/Configthird2';
import Configthird3 from './pages/Configthird3';
import Configfourth from './pages/Configfourth';
import Configfifth from './pages/Configfifth';
import Configsixth from './pages/Configsixth';
import Configsixth2 from './pages/Configsixth2';
import Configfinal from './pages/Configfinal';
import Mpforget from './pages/Mpforget';
import Recup from './pages/Recup';
import Mpnv from './pages/Mpnv';
import Profile from './pages/Profile';
import Accessibilite from './pages/Accessibilite';
import Vignoble from './pages/Vignoble';
import Help from './pages/Help';
import Camera from './pages/Camera';
import Wifi from './pages/Wifi';
import Maping from './pages/Maping';
import Calend from './pages/Calend';


const App = () => {
  return (
    <Switch>
     <Route exact path = "/" component={Home} />
     <Route exact path="/Connexion" component={Connexion} /> 
     <Route exact path="/Inscription" component={Inscription} />
     <Route exact path="/Echec" component={Echec} />
     <Route exact path="/Mpforget" component={Mpforget} />
     <Route exact path="/Recup" component={Recup} />
     <Route exact path="/Mpnv" component={Mpnv} />
     <Route exact path="/Configfirst" component={Configfirst} />
     <Route exact path="/Configsecond" component={Configsecond} />
     <Route exact path="/Configthird" component={Configthird} />
     <Route exact path="/Configthird2" component={Configthird2} />
     <Route exact path="/Configthird3" component={Configthird3} />
     <Route exact path="/Configfourth" component={Configfourth} />
     <Route exact path="/Configfifth" component={Configfifth} />
     <Route exact path="/Configsixth" component={Configsixth} />
     <Route exact path="/Configsixth2" component={Configsixth2} />
     <Route exact path="/Configfinal" component={Configfinal} />
     <Route exact path="/Profile" component={Profile} />
     <Route exact path="/Accessibilite" component={Accessibilite} />
     <Route exact path="/Vignoble" component={Vignoble} />
     <Route exact path="/Help" component={Help} />
     <Route exact path="/Camera" component={Camera} />
     <Route exact path="/Wifi" component={Wifi} />
     <Route exact path='/Maping' component={Maping} />
     <Route exact path='/Calend' component={Calend} />
      <Redirect to="/" />
      </Switch>
  
  );
};

document.body.style.backgroundColor = "#2C2C2C";
/*document.body.style.overflow = "hidden"*/
export default App;
