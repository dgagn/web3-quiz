import {Button, Card, ProgressBar} from 'react-bootstrap';
import React, {useMemo} from 'react';
import {useQuestion} from '../question-context';
import {CardQuestionsDone} from './CardQuestionsDone';

export function QuestionDisplay() {
  const {state, dispatch} = useQuestion();

  const currentQuestion = useMemo(() => {
    return state.questions[state.current];
  }, [state.questions, state.current]);

  return state.current >= state.questions.length ? (
    <CardQuestionsDone />
  ) : (
    <Card className="text-center mx-auto container">
      <Card.Header>Question #{state.current + 1}</Card.Header>
      <Card.Body>
        <div className="pt-2">{currentQuestion.question}</div>
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
        <ProgressBar now={~~((state.current / state.questions.length) * 100)} />
      </Card.Footer>
    </Card>
  );
}
