import { screen, render } from '@testing-library/react';
import { Footer } from './footer';

describe('Given the component Footer', () => {
    describe('When calling it', () => {
        test('Render Footer', () => {
            render(<Footer />);
            const name = screen.getByText(/Jorge/i);
            expect(name).toBeInTheDocument();
        });
    });
});
