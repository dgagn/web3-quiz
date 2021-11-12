import * as React from 'react';
import {questions} from './data/questions';

const QuestionContext = React.createContext(undefined);

function questionReducer(state, {payload, type}) {
  switch (type) {
    case 'answer_question': {
      return {
        ...state,
        current: state.current + 1,
        answers:
          state.questions[state.current].answer === payload
            ? state.answers + 1
            : state.answers,
      };
    }
    case 'restart': {
      return {
        questions: questions,
        current: 0,
        answers: 0,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

function QuestionProvider({children}) {
  const [state, dispatch] = React.useReducer(
    questionReducer,
    {
      questions,
      current: 0,
      answers: 0,
    },
    undefined,
  );
  const value = {state, dispatch};
  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
}

function useQuestion() {
  const context = React.useContext(QuestionContext);
  if (context === undefined)
    throw new Error('useQuestion must be used inside the QuestionProvider');
  return context;
}

export {QuestionProvider, useQuestion};
