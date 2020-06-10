import * as React from 'react';
import './Button.css';

type Props = {
  text: string;
  variant?: string;
  disabled?: boolean;
};

export default ({ text, variant, disabled }: Props) => (
  <button
    className={`Button ${variant || ''}`}
    type="button"
    disabled={disabled}
  >
    {text}
  </button>
);
