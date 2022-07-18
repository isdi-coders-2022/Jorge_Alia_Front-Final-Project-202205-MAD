import { BrowserRouter } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { HttpStoreUser } from '../../services/repository.users';
import { fireEvent, render, screen } from '../../utils/testutils';
import ModifyForm from './modifyForm';

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

describe('Given the component ModifyForm', () => {
    describe('When called it', () => {
        test('It should render', () => {
            render(
                <BrowserRouter>
                    <ModifyForm></ModifyForm>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/Nuevo correo/i);
            expect(element).toBeInTheDocument();
        });
        test('Then HttpStoreUser should be called with invalid token', () => {
            HttpStoreUser.prototype.updateUser = jest
                .fn()
                .mockResolvedValue({ user: { test: 'pepe' } });

            render(
                <BrowserRouter>
                    <ModifyForm></ModifyForm>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const button = screen.getByRole('button');
            fireEvent.click(button);

            expect(HttpStoreUser.prototype.updateUser).toBeCalled();
        });
        test('Then HttpStoreUser should be called', () => {
            HttpStoreUser.prototype.updateUser = jest
                .fn()
                .mockResolvedValue({ token: '9', user: { test: 'pepe' } });
            render(
                <BrowserRouter>
                    <ModifyForm></ModifyForm>
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const input = screen.getByAltText(/email/i) as HTMLFormElement;
            fireEvent.change(input, { target: { value: 'email' } });

            const button = screen.getByText(/Guardar/);
            fireEvent.click(button);

            expect(HttpStoreUser.prototype.updateUser).toBeCalled();
        });
    });
});
