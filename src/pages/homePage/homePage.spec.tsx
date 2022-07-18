import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../../utils/testutils';
import { iState } from '../../store/store';
import HomePage from './homePage';
import { iWorkout } from '../../models/workout.model';
import { iUser } from '../../models/user.model';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';

const mockWorkout: Array<iWorkout> = [
    {
        _id: '62c3fa970a6339f727766546',
        title: 'ABDOMEN & GLÚTEOS con softball',
        image: 'totalbodysoftball.png',
        video: 'https://www.youtube.com/embed/wdqQmD874Fo',
        description:
            'Entrenamiento total body con intensidad alta enfocado en glúteo y fuerza abdominal.',
        category: 'Total body',
        complementaryMaterial: 'Sin material',
        favorite: false,
        duration: 10,
        intensity: 'Alta',
        comments: [],
    },
    {
        _id: '62c3fae50a6339f727766548',
        title: 'TOTAL BODY con banda',
        image: 'totalbodybanda.png',
        video: 'https://www.youtube.com/embed/jVioyqKb4kY',
        description:
            'Entrenamiento total body con intensidad baja enfocado en el trabajo de alargamiento y estiramiento del cuerpo con una breve secuencia de pierna y glúteo en cuadrupedia, ideal para running después de una buena carrera.',
        category: 'Total body',
        complementaryMaterial: 'Banda',
        favorite: false,
        duration: 16,
        intensity: 'Baja',
        comments: [],
    },
];

describe('Given the component Home', () => {
    describe('When calling it', () => {
        test('Then it should render', () => {
            const reducer = {
                workouts: workoutReducer,
                users: userReducer,
            };
            const preloadedState: iState = {
                workouts: [mockWorkout[0]] as Array<iWorkout>,
                user: {} as iUser,
            };
            render(
                <BrowserRouter>
                    <HomePage></HomePage>
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const newResult = screen.getByText(
                /Diseña tu propio entrenamiento/i
            );
            expect(newResult).toBeInTheDocument();
        });
    });
});
