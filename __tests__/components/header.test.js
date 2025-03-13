import { render, screen } from '@testing-library/react';
import GilbertHeader from '../../components/layout/gilbert-header';

describe('GilbertHeader Component', () => {
  test('displays logo', () => {
    const { getByTestId } = render(<GilbertHeader />);
    const logoContainer = getByTestId('home-link').innerHTML;
    expect(logoContainer).toBe('Home');
  });
});
