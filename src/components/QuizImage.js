import {Image} from 'react-bootstrap';
import React from 'react';

/**
 * The quiz image to display in the
 * quiz game.
 * @return {JSX.Element} a react component as `img`
 * @constructor
 */
export function QuizImage() {
  return (
    <Image
      className="mx-auto d-block width-fixed-sm"
      fluid
      src="/quiztime.jpeg"
    />
  );
}
