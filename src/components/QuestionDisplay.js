import React from 'react';
import {useQuestion} from '../question-context';
import {CardQuestionsDone} from './CardQuestionsDone';
import {CardQuestion} from './CardQuestion';
import {QuizImage} from './QuizImage';

/**
 * Display the correct component if certain
 * conditions is met. `CardQuestionsDone` or `CardQuestion`.
 * @return {JSX.Element} the react component with `Fragment`
 * @constructor
 */
export function QuestionDisplay() {
  const {state} = useQuestion();
  return (
    <>
      <QuizImage />
      {state.current >= state.questions.length ? (
        <CardQuestionsDone />
      ) : (
        <CardQuestion />
      )}
    </>
  );
}
