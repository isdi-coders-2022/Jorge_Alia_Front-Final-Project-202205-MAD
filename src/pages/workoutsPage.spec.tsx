import { BrowserRouter } from 'react-router-dom';
import { iUser } from '../models/user.model';
import { userReducer } from '../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../redurcers/workout.reducer/workout.reducer';
import { render, screen } from '../utils/testutils';
import WorkoutPage from './workoutsPage';

const reducer = {
    workouts: workoutReducer,
    users: userReducer,
};
const preloadedState = {
    user: [
        {
            _id: '',
            name: '',
            email: '',
            passwd: '',
            workouts: [],
            done: [],
            rol: '',
        },
    ] as Array<iUser>,
};
describe('Given the component WorkPage', () => {
    describe('When calling it', () => {
        // test('Then it should render', () => {
        //     render(
        //         <BrowserRouter>
        //             <WorkoutPage></WorkoutPage>
        //         </BrowserRouter>,
        //         {
        //             preloadedState,
        //             reducer,
        //         }
        //     );
        //     const newResult = screen.getByText(/Únete/i);
        //     expect(newResult).toBeInTheDocument();
        });
    });
});
