import { render, screen } from '@testing-library/react';
import {
  BrowserRouter as Router 
} from 'react-router-dom'
import App from '../App';

test('renders learn react link', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Food Court/i);
  expect(linkElement).toBeInTheDocument();
});
