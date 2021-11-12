import React from 'react';
import {QuestionProvider} from '../question-context';
import {QuestionDisplay} from './QuestionDisplay';

/**
 * The main app component that displays the
 * Quiz game.
 * @return {JSX.Element} the `App` component in a
 * `Fragment`
 * @constructor
 */
function App() {
  return (
    <>
      <QuestionProvider>
        <QuestionDisplay />
      </QuestionProvider>
    </>
  );
}

export default App;
