import * as React from 'react';
import {questions} from './data/questions';
import PropTypes from 'prop-types';

/**
 * The context for questions.
 */
const QuestionContext = React.createContext(undefined);

/**
 * The initial values for the context.
 */
const initialValues = {
  questions,
  current: 0,
  answers: 0,
};

/**
 * The reducer for managing state in the application.
 *
 * @param {Object} state - the current state before applying a
 * modification
 * @param {Object} action - the action with a type and a payload
 * @return {Object} the object of the current reducer
 */
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
      return initialValues;
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

/**
 * The question provider that provides all the child
 * elements with the questions and connex information.
 *
 * @param {Object} props - the props passed in the provider (children)
 * @return {JSX.Element} - the react component with `Provider` that
 * sends information to childrens
 * @constructor
 */
function QuestionProvider({children}) {
  const [state, dispatch] = React.useReducer(
    questionReducer,
    initialValues,
    undefined,
  );
  const value = {state, dispatch};
  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
}

/**
 * Specify that the `QuestionProvider` requires
 * a children props.
 */
QuestionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook to be able to use the `QuestionContext` to
 * get the reducer with `state` and `dispatch`.
 * @return {Object} - with the current `state` and the `dispatch`
 */
function useQuestion() {
  const context = React.useContext(QuestionContext);
  if (context === undefined)
    throw new Error('useQuestion must be used inside the QuestionProvider');
  return context;
}

export {QuestionProvider, useQuestion};
