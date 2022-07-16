import { BrowserRouter } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { fireEvent, render, screen } from '../../utils/testutils';
import WorkoutPage from './workoutsPage';

const reducer = {
    workouts: workoutReducer,
    users: userReducer,
};

describe('Given the component WorkoutPage', () => {
    describe('When calling it', () => {
        test('Then it should render', () => {
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
                    <WorkoutPage></WorkoutPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const newResult = screen.getByText(/Únete/i);
            expect(newResult).toBeInTheDocument();
        });
        test('Then it should render if I am logger', () => {
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
                    <WorkoutPage></WorkoutPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            fireEvent.click(screen.getByAltText(/Brazos y Abs/));
            fireEvent.click(screen.getByAltText(/Glúteos & Piernas/));
            fireEvent.click(screen.getByAltText(/Total body/));
            fireEvent.click(screen.getByAltText(/Sin material/));
            fireEvent.click(screen.getByAltText(/Goma/));
            fireEvent.click(screen.getByAltText(/Mancuernas/));
            fireEvent.click(screen.getByAltText(/Softball/));
            const newResult = screen.getByText(/Selecciona uso de/i);
            expect(newResult).toBeInTheDocument();
        });
    });
});
