import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect } from '@jest/globals';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';

test('renders links correctly', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  const homeLink = getByText('Home');
  const calculatorLink = getByText('Calculator');
  const quoteLink = getByText('Quote');

  expect(homeLink).toBeInTheDocument();
  expect(calculatorLink).toBeInTheDocument();
  expect(quoteLink).toBeInTheDocument();
});
