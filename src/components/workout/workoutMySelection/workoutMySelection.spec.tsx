import { BrowserRouter } from 'react-router-dom';

import { fireEvent, render, screen } from '../../../utils/testutils';
import { workoutReducer } from '../../../redurcers/workout.reducer/workout.reducer';
import { userReducer } from '../../../redurcers/user.reducer/user.reducer';
import { HttpStoreUser } from '../../../services/repository.users';
import { WorkoutMySelection } from './workoutMySelection';

const reducer = {
    workouts: workoutReducer,
    users: userReducer,
};

const mockWorkout = {
    _id: 'h34h3n34n',
    title: ' SECUENCIA LATERAL DE PIERNAS con softball',
    image: ' piernasgluteossoftball.png',
    video: ' https://www.youtube.com/embed/gZghpARZK3Y',
    description:
        'Entrenamiento de pierna y glúteo con intensidad alta enfocada en el trabajo de pierna en postura lateral.',
    category: 'Gluteos y piernas',
    complementaryMaterial: 'Softball',
    duration: 12,
    intensity: 'Alta',
    comments: [],
    favorite: false,
};

describe('Given the component WorkoytMySlection', () => {
    describe('When calling it', () => {
        test('Then it should render when click in the button favorite and response is ok', () => {
            const preloadedState = {
                workouts: [],
                users: {
                    token: 'test',
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
                },
            };
            HttpStoreUser.prototype.deleteFavorites = jest
                .fn()
                .mockResolvedValue({});
            render(
                <BrowserRouter>
                    <WorkoutMySelection
                        workout={mockWorkout}
                    ></WorkoutMySelection>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            fireEvent.click(screen.getByRole('button'));
            const result = screen.getByText(/Eliminar/i);
            expect(result).toBeInTheDocument();
        });
    });
});
