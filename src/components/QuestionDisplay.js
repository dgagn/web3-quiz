import React from 'react';
import {useQuestion} from '../question-context';
import {CardQuestionsDone} from './CardQuestionsDone';
import {CardQuestion} from './CardQuestion';

export function QuestionDisplay() {
  const {state} = useQuestion();

  return state.current >= state.questions.length ? (
    <CardQuestionsDone />
  ) : (
    <CardQuestion />
  );
}
