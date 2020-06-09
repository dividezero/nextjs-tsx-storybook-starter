import * as React from 'react';
import './Button.css';

type Props = {
  text: string;
};

export default ({ text }: Props) => <button>{text}</button>;
