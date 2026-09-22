import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('should render without crashing', () => {
    render(<App />);
    // Verify the app renders by checking for a heading from the Home component
    const heading = screen.getByRole('heading', { name: /seu corpo fala/i });
    expect(heading).toBeInTheDocument();
  });
});
