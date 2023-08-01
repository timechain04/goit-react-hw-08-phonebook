import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div style={{
    fontSize: '23px',
    fontStyle: 'italic'
    }}>
      <nav>
        <NavLink to="contacts">Contacts</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
