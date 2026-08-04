import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('should render without crashing', () => {
    render(<App />);
    // Verify the app renders by checking for a heading from the Hero component
    const heading = screen.getByRole('heading', { name: /onde seu corpo se posiciona na escala do imc/i });
    expect(heading).toBeInTheDocument();
  });
});
