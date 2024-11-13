import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Hero, type HeroProps } from './Hero';

const props: HeroProps = {
  header: 'Header',
  imgSrc: 'https://curatedevents.com/wp-content/uploads/2022/11/Corporate-awards-ceremony.jpg',
  text: 'Subtext goes here'
};

describe('Hero', () => {
  it('Renders the heading', () => {
    render(<Hero {...props} />);
    const heading = screen.getByRole('heading', {
      name: props.header
    });
    expect(heading).toBeInTheDocument();
  });

  it('Renders the text', () => {
    render(<Hero {...props} />);
    const text = screen.getByText(props.text as string);
    expect(text).toBeInTheDocument();
  });

  it('Renders the background image', () => {
    render(<Hero {...props} />);
    const backgroundImage = screen.getByAltText('hero image');
    expect(backgroundImage).toBeVisible();
  });

  it('Scrolls down 100vh on arrow click', async () => {
    window.scroll = jest.fn();
    render(
      <div className="relative h-[200vh]">
        <Hero {...props} />
      </div>
    );
    const cta = screen.getByTestId('arrow-scroll-cta');
    await userEvent.click(cta);
    expect(window.scroll).toHaveBeenCalledWith({ top: window.innerHeight });
  });
});
