import React from 'react';
import { render } from '@testing-library/react';
import Result from '../components/Result';

describe('Result Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Result value="0" />);
    expect(container).toMatchSnapshot();
  });
});
