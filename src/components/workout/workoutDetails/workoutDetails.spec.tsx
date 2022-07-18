import { BrowserRouter } from 'react-router-dom';
import { DetailsWorkout } from './workoutDetails';
import { render, screen } from '../../../utils/testutils';
import { workoutReducer } from '../../../redurcers/workout.reducer/workout.reducer';
import { userReducer } from '../../../redurcers/user.reducer/user.reducer';
import { HttpStoreUser } from '../../../services/repository.users';

const reducer = {
    workouts: workoutReducer,
    user: userReducer,
};
const mockWorkout = {
    _id: '62c3fa970a6339f727766546',
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

jest.mock('sweetalert2', () => ({
    fire: jest
        .fn()
        .mockResolvedValue({ params: { title: 'User or password invalid' } }),
}));
describe('Given the component DetailsWorkout', () => {
    describe('When calling it', () => {
        test('Then it should render', () => {
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
            render(
                <BrowserRouter>
                    <DetailsWorkout workout={mockWorkout}></DetailsWorkout>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = screen.getByText(/Entrenamiento de pierna/i);
            expect(result).toBeInTheDocument();
        });
        test('Then it should render when click in the button favorite and response is ok', () => {
            const preloadedState = {
                workouts: [],
                user: {
                    _id: '',
                    name: '',
                    email: '',
                    passwd: '',
                    workouts: [
                        {
                            _id: '62c3fa970a6339f727766546',
                        },
                    ],
                    done: [],
                    rol: '',
                },
            };
            HttpStoreUser.prototype.addToFavorites = jest
                .fn()
                .mockResolvedValue({});
            render(
                <BrowserRouter>
                    <DetailsWorkout workout={mockWorkout}></DetailsWorkout>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = screen.getByText(/Entrenamiento de pierna/i);
            expect(result).toBeInTheDocument();
        });
        test('Then it should render when click in the button favorite and response is not ok', () => {
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
            HttpStoreUser.prototype.addToFavorites = jest
                .fn()
                .mockResolvedValue(Error);
            render(
                <BrowserRouter>
                    <DetailsWorkout workout={mockWorkout}></DetailsWorkout>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = screen.getByText(/Entrenamiento de pierna/i);
            expect(result).toBeInTheDocument();
        });
    });
});
