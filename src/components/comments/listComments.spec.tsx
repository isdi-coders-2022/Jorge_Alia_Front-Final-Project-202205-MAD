import { BrowserRouter } from 'react-router-dom';
import { iWorkout } from '../../models/workout.model';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { HttpStoreWorkouts } from '../../services/repository.workouts';
import { fireEvent, render, screen } from '../../utils/testutils';
import ListComments from './listComments';

const reducer = {
    workouts: workoutReducer,
    user: userReducer,
};
const mockWorkout: iWorkout = {
    _id: '62c3fa970a6339f727766546',
    title: ' SECUENCIA LATERAL DE PIERNAS con softball',
    image: ' piernasgluteossoftball.png',
    video: ' https://www.youtube.com/embed/gZghpARZK3Y',
    description: '',
    category: 'Gluteos y piernas',
    complementaryMaterial: 'Softball',
    duration: 12,
    intensity: 'Alta',
    comments: [
        {
            text: 'asdfgasdgasdfdsfasdf',
            user: {
                _id: '62d12c8b177dca139940a29e',
                name: 'test',
            },
            score: 10,
            _id: '62d6fd1f155be3afc1110061',
        },
    ],
    favorite: false,
};
describe('Given the component ListComments', () => {
    describe('When it called it', () => {
        test('It should render', () => {
            const preloadedState = {
                workouts: [],
                user: {
                    _id: '62d12c8b177dca139940a29e',
                    name: 'test',
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
            HttpStoreWorkouts.prototype.addComment = jest
                .fn()
                .mockResolvedValue({ text: 'test', score: 3 });
            render(
                <BrowserRouter>
                    <ListComments workout={mockWorkout}></ListComments>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );

            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(button).toBeInTheDocument();
            expect(HttpStoreWorkouts.prototype.addComment).toHaveBeenCalled();
        });
    });
});
