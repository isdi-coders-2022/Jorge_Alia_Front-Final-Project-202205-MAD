import { BrowserRouter } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { HttpStoreUser } from '../../services/repository.users';
import { fireEvent, render, screen } from '../../utils/testutils';
import RegisterForm from './registerForm';

jest.mock('sweetalert2');
const reducer = {
    workouts: workoutReducer,
    user: userReducer,
};
const preloadedState = {
    workouts: [],
    user: {
        _id: '',
        name: '',
        email: '',
        passwd: '',
        workouts: [
            {
                id: '',
            },
        ],
        done: [],
        rol: '',
    },
};

describe('Given the component RegisterForm', () => {
    describe('When called it', () => {
        test('It should render', () => {
            render(
                <BrowserRouter>
                    <RegisterForm></RegisterForm>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/Correo/i);
            expect(element).toBeInTheDocument();
        });
        test('Then HttpStoreUser should be called with invalid token', () => {
            HttpStoreUser.prototype.registerUser = jest
                .fn()
                .mockResolvedValue({ user: { test: 'pepe' } });

            render(
                <BrowserRouter>
                    <RegisterForm></RegisterForm>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const button = screen.getByRole('button');
            fireEvent.click(button);

            expect(HttpStoreUser.prototype.registerUser).toBeCalled();
        });

        test('should first', () => {
            HttpStoreUser.prototype.registerUser = jest
                .fn()
                .mockResolvedValue({ token: '9', user: { test: 'pepe' } });
            render(
                <BrowserRouter>
                    <RegisterForm></RegisterForm>
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const input = screen.getByAltText(/email/i) as HTMLFormElement;
            fireEvent.change(input, { target: { value: 'email' } });

            const button = screen.getByText(/Registrarse/);
            fireEvent.click(button);

            expect(HttpStoreUser.prototype.registerUser).toBeCalled();
        });
    });
});
