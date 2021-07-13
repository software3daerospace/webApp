import React from 'react';
import { ReactComponent as Account } from '../../assets/account.svg';
import { ReactComponent as Cal } from '../../assets/cal.svg';
import { ReactComponent as Under } from '../../assets/under.svg';
import { ReactComponent as Options } from '../../assets/options.svg';
import { ReactComponent as Actual } from '../../assets/actual.svg';
import './Navbar3.css';
import { Link } from 'react-router-dom';

const Navbar3 = () => {
  return(
    <div className="container">
      <h1 className="text-center">
       <Account className="account" />
       <Cal className="cal" />
       <p className="repart"> Répartition des tâches</p>
       <Under className="under"/>
       <p className="suivi"> Suivre l'activité</p>
       <p className="results"> Résultats</p>
       <Options className="options" />
       <p className="text">Voici un résumé de l’activité en cours dans votre exploitation.</p>
       <p className="info">Actualisé le  23/08/2020  à 15h00.  </p>
       <Actual className="actual"/>
      </h1> 
    </div>
  )
}

export default Navbar3;
