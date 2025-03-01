import React, { useState } from 'react';
import { Aditions } from './Aditions';
import { Soustractions } from './Soustractions';
import { Link } from 'react-router-dom';

export const MathsLanding = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <>
    <Link to='/'>Acceuil</Link>
      <h2>Maths Landing</h2>
      
      <button onClick={() => setActiveComponent('add')}>Addition</button>
      <button onClick={() => setActiveComponent('sub')}>Soustraction</button>

      {activeComponent === 'add' && <Aditions />}
      {activeComponent === 'sub' && <Soustractions />}
    </>
  );
};
