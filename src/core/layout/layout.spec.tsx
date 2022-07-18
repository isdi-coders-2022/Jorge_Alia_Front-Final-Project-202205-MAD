import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../../store/store';
import { Layout } from './layout';
describe('Given the component Layout', () => {
    describe('when it is called', () => {
        test('should have render its children', () => {
            let MockChildren: () => ReactElement;
            MockChildren = function () {
                return (
                    <>
                        <p>test</p>
                    </>
                );
            };
            render(
                <Provider store={store}>
                    <MemoryRouter>
                        <Layout>
                            <MockChildren></MockChildren>
                        </Layout>
                    </MemoryRouter>
                </Provider>
            );
            const display = screen.getByText(/test/i);
            expect(display).toBeInTheDocument();
        });
    });
});
