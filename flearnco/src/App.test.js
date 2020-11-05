import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const mainHeading = screen.getByText(/Learn with the best/i);
  expect(mainHeading).toBeInTheDocument();
});
