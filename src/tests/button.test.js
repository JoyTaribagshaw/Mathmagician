import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button';

describe('Button', () => {
  test('renders correctly', () => {
    render(<Button className="white-btn" value="1" onClick={() => {}} />);
    const button = screen.getByRole('button', { name: '1' });
    expect(button.textContent).toEqual('1');
  });

  test('handle click works correctly', () => {
    const handleClick = jest.fn();
    render(<Button className="white-btn" value="1" onClick={handleClick} />);
    const button = screen.getByRole('button', { name: '1' });
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
