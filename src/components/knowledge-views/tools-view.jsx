import {React, Fragment} from 'react';
import Card from 'react-bootstrap/Card';

const ToolsView = ()=>{
  return(
    <Fragment>
      <Card>
        <Card.Header>
          <h1>Mis Skills</h1>
        </Card.Header>
        <Card.Body>
          <h2>Programacion Frontend</h2>
          <h2>Programacion Backend</h2>
          <h2>Otras Herramientas</h2>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default ToolsView;
