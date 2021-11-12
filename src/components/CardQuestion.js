import {Button, Card, ProgressBar} from 'react-bootstrap';
import React from 'react';
import {useQuestion} from '../question-context';

/**
 * The main card that displays the questions
 * to the user.
 * @return {JSX.Element} a react component with `div`
 * @constructor
 */
export function CardQuestion() {
  const {
    state: {current, questions},
    dispatch,
  } = useQuestion();

  return (
    <Card className="text-center mx-auto container">
      <Card.Header>Question #{current + 1}</Card.Header>
      <Card.Body>
        <div className="pt-2">{questions[current].question}</div>
        <div className="pt-4 d-flex gap-2 justify-content-center">
          <Button
            onClick={() => dispatch({type: 'answer_question', payload: true})}
            variant="success"
          >
            Vrai
          </Button>
          <Button
            onClick={() => dispatch({type: 'answer_question', payload: false})}
            variant="danger"
          >
            Faux
          </Button>
        </div>
      </Card.Body>
      <Card.Footer>
        <ProgressBar now={~~((current / questions.length) * 100)} />
      </Card.Footer>
    </Card>
  );
}
