import React from 'react';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  test('renders the title correctly', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText('Math Magicians');
    expect(titleElement).toBeInTheDocument();
  });
});
