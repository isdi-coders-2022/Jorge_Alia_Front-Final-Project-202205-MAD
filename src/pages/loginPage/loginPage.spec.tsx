import { BrowserRouter } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { fireEvent, render, screen } from '../../utils/testutils';
import LoginPage from './loginPage';

const reducer = {
    workouts: workoutReducer,
    users: userReducer,
};
describe('Given the Login component', () => {
    describe('When it is called', () => {
        test('Then it should render the login page when i am not logged', async () => {
            const preloadedState = {
                workouts: [],
                users: {
                    token: '',
                    user: {
                        _id: '',
                        name: '',
                        email: '',
                        passwd: '',
                        workouts: [],
                        done: [],
                        rol: '',
                    },
                },
            };
            render(
                <BrowserRouter>
                    <LoginPage></LoginPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const newResult = screen.getByText(/Únete/i);
            expect(newResult).toBeInTheDocument();
        });
        test('Then it shoul render the login page when i am logged', async () => {
            const preloadedState = {
                workouts: [],
                users: {
                    token: 'test',
                    user: {
                        _id: '',
                        name: '',
                        email: '',
                        passwd: '',
                        workouts: [],
                        done: [],
                        rol: '',
                    },
                },
            };
            render(
                <BrowserRouter>
                    <LoginPage></LoginPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            fireEvent.click(screen.getByText(/SALIR/));
            const newResult = screen.getByText(/Modifica tus datos/i);
            expect(newResult).toBeInTheDocument();
        });
    });
});
