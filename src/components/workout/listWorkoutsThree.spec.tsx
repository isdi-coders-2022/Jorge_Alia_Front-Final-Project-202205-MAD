import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '../../utils/testutils';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { WorkoutListThree } from './listWorkoutsThree';

const reducer = {
    workouts: workoutReducer,
    users: userReducer,
};

const mockWorkoutList = [
    {
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
    },
];

describe('Given the component WorkoutListThree', () => {
    describe('When calling it', () => {
        test('Then it should render', () => {
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

            render(
                <BrowserRouter>
                    <WorkoutListThree
                        workouts={mockWorkoutList}
                    ></WorkoutListThree>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            fireEvent.click(screen.getByAltText(/Icono anterior/));
            fireEvent.click(screen.getByAltText(/Icono siguiente/));
            const result = screen.getByTitle(/Icono anterior/i);
            expect(result).toBeInTheDocument();
        });
    });
});
