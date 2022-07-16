import { fireEvent, render, screen } from '../../utils/testutils';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './header';
import { store } from '../../store/store';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';

const reducer = {
    workouts: workoutReducer,
    users: userReducer,
};

describe('Given the component header', () => {
    describe('When calling it', () => {
        test('Render header when I am not Logged in', () => {
            const preloadedState = {
                workouts: [],
                users: {
                    token: '',
                    user: {
                        _id: '',
                        name: '',
                        email: '',
                        passwd: '',
                        workouts: [],
                        done: [],
                        rol: '',
                    },
                },
            };
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <Header></Header>
                    </Provider>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = screen.getByRole('img');
            expect(result).toBeInTheDocument();
        });
        test('Render header when I am Logged in', () => {
            const preloadedState = {
                workouts: [],
                users: {
                    token: 'test',
                    user: {
                        _id: '',
                        name: '',
                        email: '',
                        passwd: '',
                        workouts: [],
                        done: [],
                        rol: '',
                    },
                },
            };
            render(
                <BrowserRouter>
                    <Header></Header>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            fireEvent.click(screen.getByRole('button'));
            const result = screen.getByRole('img');
            expect(result).toBeInTheDocument();
        });
    });
});
