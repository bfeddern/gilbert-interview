import { render, screen } from '@testing-library/react';
import GilbertFooter from '../../components/layout/gilbert-footer';

describe('GilbertFooter Component', () => {
  test('displays social media icons', () => {
    const { container } = render(<GilbertFooter />);
    const iconContainer = container.getElementsByClassName('footer_social_icons');
    expect(iconContainer.length).toBe(1);

    const imageElements = screen.getAllByRole('img');
    const imageCount = imageElements.length;
    expect(imageCount).toBe(5);
  });
});
