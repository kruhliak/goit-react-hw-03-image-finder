import React from 'react';
import { Thumb } from './Button.styles';

function Button({ text, onClick }) {
  return (
    <Thumb>
      <button type="button" onClick={() => onClick()}>
        {text}
      </button>
    </Thumb>
  );
}

export default Button;
