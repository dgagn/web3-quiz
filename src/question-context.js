import * as React from 'react';

const QuestionContext = React.createContext(undefined);

function questionReducer(state, action) {}

function QuestionProvider({children}) {
  const [state, dispatch] = React.useReducer(
    questionReducer,
    {
      count: 0,
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
