import { BrowserRouter } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { fireEvent, render, screen } from '../../utils/testutils';
import { ButtonAddToMyWorkout } from './buttonAddToMyWorkout';
import { HttpStoreUser } from '../../services/repository.users';

jest.mock('sweetalert2');

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

describe('Given the component ButtonAddToMyWorkout', () => {
    describe('When we called it', () => {
        test('Then it should render if I am logged', () => {
            const preloadedState = {
                workouts: [],
                user: {
                    _id: '',
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

            render(
                <BrowserRouter>
                    <ButtonAddToMyWorkout
                        workout={mockWorkout}
                    ></ButtonAddToMyWorkout>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = (HttpStoreUser.prototype.addToFavorites = jest
                .fn()
                .mockResolvedValue({ user: '' }));
            fireEvent.click(screen.getByRole('button'));

            expect(result).toHaveBeenCalled();
        });
        test('Then it should render if I am not logged', () => {
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
                    <ButtonAddToMyWorkout
                        workout={mockWorkout}
                    ></ButtonAddToMyWorkout>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = (HttpStoreUser.prototype.addToFavorites = jest
                .fn()
                .mockResolvedValue(Error));
            fireEvent.click(screen.getByRole('button'));

            expect(result).toHaveBeenCalled();
        });
    });
});
