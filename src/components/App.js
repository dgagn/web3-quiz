import React from 'react';
import {QuestionProvider} from '../question-context';
import {QuestionDisplay} from './QuestionDisplay';

function App() {
  return (
    <QuestionProvider>
      <QuestionDisplay />
    </QuestionProvider>
  );
}

export default App;
