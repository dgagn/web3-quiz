import {Button, Card} from 'react-bootstrap';
import React from 'react';
import {useQuestion} from '../question-context';

/**
 * The `Card` component when the questions is
 * done.
 * @return {JSX.Element} a react component with `div`
 * @constructor
 */
export function CardQuestionsDone() {
  const {state, dispatch} = useQuestion();
  return (
    <Card className="text-center mx-auto container">
      <Card.Header>Terminé</Card.Header>
      <Card.Body>
        <b className="h5 pt-4">Votre résultat est de: {state.answers}</b>
        <p className="pt-2">
          {~~((state.answers / state.questions.length) * 100) < 50
            ? 'Extrèmement déçu'
            : 'Bravo!'}
        </p>
      </Card.Body>
      <Card.Footer>
        <Button onClick={() => dispatch({type: 'restart'})}>Recommencer</Button>
      </Card.Footer>
    </Card>
  );
}
