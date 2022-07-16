import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../../../utils/testutils';
import { workoutReducer } from '../../../redurcers/workout.reducer/workout.reducer';
import { userReducer } from '../../../redurcers/user.reducer/user.reducer';
import Filter from './workoutFilter';
const reducer = {
    workouts: workoutReducer,
    users: userReducer,
};
const properties = {
    category: '',
    complementaryMaterial: '',
};

describe('Given the component WorkoutListThree', () => {
    describe('When calling it', () => {
        test('Then it should render', () => {
            const preloadedState = {
                workouts: [
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
                ],
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
                    <Filter properties={properties}></Filter>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );

            const result = screen.getByTitle(/ListImageFilter/);
            expect(result).toBeInTheDocument();
        });
    });
});
