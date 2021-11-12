import React from 'react';
import {Button, Card, ProgressBar} from 'react-bootstrap';

function App() {
  return (
    <Card className="text-center mx-auto container">
      <Card.Header>Question #1</Card.Header>
      <Card.Body>
        <div className="pt-2">Je suis ?</div>
        <div className="pt-4 d-flex gap-2 justify-content-center">
          <Button variant="success">Vrai</Button>
          <Button variant="danger">Faux</Button>
        </div>
      </Card.Body>
      <Card.Footer>
        <ProgressBar now={0} />
      </Card.Footer>
    </Card>
  );
}

export default App;
