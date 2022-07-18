import { BrowserRouter } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { render, screen } from '../../utils/testutils';
import AboutMePage from './aboutMePage';

const reducer = {
    workouts: workoutReducer,
    user: userReducer,
};

describe('Given the component AboutMePage', () => {
    describe('When calling it', () => {
        test('Then it should render', () => {
            const preloadedState = {
                workouts: [],
                user: {
                    _id: '',
                    name: '',
                    email: '',
                    passwd: '',
                    workouts: [],
                    done: [],
                    rol: '',
                },
            };
            render(
                <BrowserRouter>
                    <AboutMePage></AboutMePage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = screen.getByText(/Soy Ana Aguado,/i);
            expect(result).toBeInTheDocument();
        });
    });
});
