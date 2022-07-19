import { BrowserRouter } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { fireEvent, render, screen } from '../../utils/testutils';
import EliminateForm from './emilinateForm';

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

describe('Given the component EliminateForm', () => {
    describe('When called it', () => {
        test('It should render the button when I click eliminate', () => {
            render(
                <BrowserRouter>
                    <EliminateForm></EliminateForm>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );

            const button = screen.getByRole('button');
            fireEvent.click(button);
            const isConfirmed = screen.getByText('Sí');
            fireEvent.click(isConfirmed);
            localStorage.clear = jest.fn();
            expect(button).toBeInTheDocument();
        });
        test('It should render the button when I click no eliminate', () => {
            render(
                <BrowserRouter>
                    <EliminateForm></EliminateForm>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const button = screen.getByText(/Eliminar cuenta/i);
            fireEvent.click(button);
            const isConfirmed = screen.getByText(/No/i);
            fireEvent.click(isConfirmed);
            expect(button).toBeInTheDocument();
        });
    });
});
