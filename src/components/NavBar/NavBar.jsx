import React from 'react';
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return ( 
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Sección 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Sección 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            ModaApp
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
}


//Funcion por defecto
export default NavBar;
