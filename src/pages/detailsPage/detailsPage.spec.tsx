import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { render, screen } from '../../utils/testutils';
import { Route, Routes } from 'react-router-dom';
import DetailsPage from './detailsPage';
import { MemoryRouter } from 'react-router';

describe('Given the component DetailsPage', () => {
    describe('When calling it', () => {
        test('Then it should render', () => {
            const reducer = {
                workouts: workoutReducer,
                user: userReducer,
            };
            const preloadedState = {
                workouts: [
                    {
                        _id: '62c3fa970a6339f727766546',
                        title: 'BRAZOS con goma',
                        image: 'brazosabsbandas.png',
                        video: 'https://www.youtube.com/embed/RQ7O-kCR1V0',
                        description:
                            'Entrenamiento de brazos y abdomen con intensidad baja enfocada en el trabajo de brazos, fuerza abdominal y para terminar sumamos al trabajo de brazos, una pequeña secuencia en cuadrupedia de glúteos.',
                        category: 'Brazos y abs',
                        complementaryMaterial: 'Goma',
                        duration: 12,
                        intensity: 'Baja',
                        favorite: false,
                        comments: [],
                    },
                ],
                user: {
                    _id: '',
                    name: '',
                    email: '',
                    passwd: '',
                    workouts: [
                        {
                            _id: '62c3fa970a6339f727766546',
                            title: 'BRAZOS con goma',
                            image: 'brazosabsbandas.png',
                            video: 'https://www.youtube.com/embed/RQ7O-kCR1V0',
                            description:
                                'Entrenamiento de brazos y abdomen con intensidad baja enfocada en el trabajo de brazos, fuerza abdominal y para terminar sumamos al trabajo de brazos, una pequeña secuencia en cuadrupedia de glúteos.',
                            category: 'Brazos y abs',
                            complementaryMaterial: 'Goma',
                            duration: 12,
                            intensity: 'Baja',
                            favorite: false,
                            comments: [],
                        },
                    ],
                    done: [],
                    rol: '',
                },
            };
            render(
                <MemoryRouter
                    initialEntries={['/details/62c3fa970a6339f727766546']}
                >
                    <Routes
                        location={{
                            pathname: '/details/62c3fa970a6339f727766546',
                        }}
                    >
                        <Route path="/details/:id" element={<DetailsPage />} />
                    </Routes>
                </MemoryRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const newResult = screen.getByText(
                /Entrenamiento de brazos y abdomen/i
            );
            expect(newResult).toBeInTheDocument();
        });
    });
});
