import { BrowserRouter } from 'react-router-dom';
import { iComment } from '../../models/comment.model';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { HttpStoreWorkouts } from '../../services/repository.workouts';
import { fireEvent, render, screen } from '../../utils/testutils';
import { getId } from '../../utils/token';
import Comment from './comment';

jest.mock('../../utils/token');

const reducer = {
    workouts: workoutReducer,
    user: userReducer,
};

const mockComment: iComment = {
    text: 'asdfgasdgasdfdsfasdf',
    user: {
        _id: '62d12c8b177dca139940a29e',
        name: 'test',
    },
    score: 10,
    _id: '62d6fd1f155be3afc1110061',
};
describe('Given the component Comment', () => {
    describe('When it called it', () => {
        test('It should render', () => {
            (getId as jest.Mock).mockReturnValue('62d12c8b177dca139940a29e');
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

            const mockDelete = jest.fn().mockResolvedValue({
                commentId: '62d12c8b177dca139940a29e',
                id: '62d12c8b177dca139940a29e',
            });
            HttpStoreWorkouts.prototype.deleteComment = mockDelete;

            render(
                <BrowserRouter>
                    <Comment comment={mockComment} id={'23'}></Comment>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );

            getId();
            fireEvent.click(screen.getByRole('button'));

            expect(mockDelete).toHaveBeenCalled();
        });
    });
});
