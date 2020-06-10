import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('with example text text', () => <Button text="Click Me" />)
  .add('Button disabled', () => <Button disabled text="Click Me" />)
  .add('Primary variant', () => <Button variant="primary" text="Click Me" />)
  .add('Secondary variant', () => (
    <Button variant="secondary" text="Click Me" />
  ));
