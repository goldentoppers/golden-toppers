import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { About } from './About';
import { afterEach, describe, expect, it } from 'vitest';

describe('About page', () => {
    const originalUrl = import.meta.env.VITE_BUY_ME_A_COFFEE_URL;

    afterEach(() => {
        if (originalUrl === undefined) {
            delete import.meta.env.VITE_BUY_ME_A_COFFEE_URL;
        } else {
            import.meta.env.VITE_BUY_ME_A_COFFEE_URL = originalUrl;
        }
    });

    it('shows a setup prompt when no coffee URL is configured', () => {
        delete import.meta.env.VITE_BUY_ME_A_COFFEE_URL;

        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>,
        );

        expect(screen.getByText('Support the Mission')).toBeInTheDocument();
        expect(screen.getByText(/Add VITE_BUY_ME_A_COFFEE_URL to your environment variables to enable donations\./i)).toBeInTheDocument();
    });

    it('renders the donation link when the coffee URL is configured', () => {
        import.meta.env.VITE_BUY_ME_A_COFFEE_URL = 'https://www.buymeacoffee.com/example';

        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>,
        );

        const link = screen.getByRole('link', { name: /buy me a coffee/i });
        expect(link).toHaveAttribute('href', 'https://www.buymeacoffee.com/example');
        expect(link).toHaveTextContent('Buy me a coffee');
    });
});
