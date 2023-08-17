import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders the Calculator component', () => {
    render(<Calculator />);
  });
});

it('renders correctly if there is no items present', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('checks UI changes state after the button is clicked', () => {
  const { getByText } = render(<Calculator />);
  const number1 = getByText(1);
  const answer = number1.textContent;
  expect(answer).toBe('1');
});
