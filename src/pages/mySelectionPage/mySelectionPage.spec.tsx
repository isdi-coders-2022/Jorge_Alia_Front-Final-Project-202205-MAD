import { BrowserRouter } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { render, screen } from '../../utils/testutils';
import MySelectionPage from './mySelectionPage';

const reducer = {
    workouts: workoutReducer,
    user: userReducer,
};

describe('Given the component MySelectionPage', () => {
    describe('When calling it', () => {
        test('Then it should render if I am not logged', () => {
            const preloadedState = {
                workouts: [],
                user: {
                    _id: '',
                    name: '',
                    email: '',
                    passwd: '',
                    workouts: [{}],
                    done: [],
                    rol: '',
                },
            };
            render(
                <BrowserRouter>
                    <MySelectionPage></MySelectionPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const newResult = screen.getByText(/Únete/i);
            expect(newResult).toBeInTheDocument();
        });
        test('Then it should render if I am logged and workouts.length is 0', () => {
            const preloadedState = {
                workouts: [],
                user: {
                    _id: '',
                    name: 'test',
                    email: '',
                    passwd: '',
                    workouts: [],
                    done: [],
                    rol: '',
                },
            };
            render(
                <BrowserRouter>
                    <MySelectionPage></MySelectionPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const newResult = screen.getByText(/Ningún/i);
            expect(newResult).toBeInTheDocument();
        });
        test('Then it should render if I am logged and workouts.length is different to 0', () => {
            const preloadedState = {
                workouts: [],
                user: {
                    _id: '',
                    name: 'test',
                    email: '',
                    passwd: '',
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
                        },
                    ],
                    done: [],
                    rol: '',
                },
            };
            render(
                <BrowserRouter>
                    <MySelectionPage></MySelectionPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = screen.getByTitle(/main/i);
            expect(result).toBeInTheDocument();
        });
        test('Then it should render when the intensity is "media"', () => {
            const preloadedState = {
                workouts: [],
                user: {
                    _id: '',
                    name: 'test',
                    email: '',
                    passwd: '',
                    workouts: [
                        {
                            _id: 'h34h3n34n',
                            title: ' ',
                            image: ' ',
                            video: ' ',
                            description: '',
                            category: 'Gluteos y piernas',
                            complementaryMaterial: 'Softball',
                            duration: 12,
                            intensity: 'Media',
                            comments: [],
                        },
                    ],
                    done: [],
                    rol: '',
                },
            };
            render(
                <BrowserRouter>
                    <MySelectionPage></MySelectionPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = screen.getByTitle(/main/i);
            expect(result).toBeInTheDocument();
        });
        test('Then it should render when the intensity is "Baja"', () => {
            const preloadedState = {
                workouts: [],
                user: {
                    _id: '',
                    name: 'test',
                    email: '',
                    passwd: '',
                    workouts: [
                        {
                            _id: '',
                            title: ' ',
                            image: '',
                            video: ' ',
                            description: '',
                            category: 'Gluteos y piernas',
                            complementaryMaterial: 'Sin material',
                            duration: 12,
                            intensity: 'Baja',
                            comments: [],
                        },
                    ],
                    done: [],
                    rol: '',
                },
            };
            render(
                <BrowserRouter>
                    <MySelectionPage></MySelectionPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = screen.getByTitle(/main/i);
            expect(result).toBeInTheDocument();
        });
    });
});
