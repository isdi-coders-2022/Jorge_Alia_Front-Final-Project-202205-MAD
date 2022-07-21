import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iComment } from '../../models/comment.model';
import { iWorkout } from '../../models/workout.model';
import { updateWorkoutAction } from '../../redurcers/workout.reducer/workout.action.creators';
import { HttpStoreWorkouts } from '../../services/repository.workouts';
import { iState } from '../../store/store';
import Comment from './comment';
import './listComments.css';

export function ListComments({ workout }: { workout: iWorkout }) {
    const user = useSelector((store: iState) => store.user);
    const dispatcher = useDispatch();
    let template;
    const [formData, setFormData] = useState({
        text: '',
        score: 10,
    });
    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }
    function handleComment(ev: SyntheticEvent) {
        ev.preventDefault();
        new HttpStoreWorkouts()
            .addComment(formData, workout._id as string)
            .then((data) => {
                dispatcher(updateWorkoutAction(data));
            });
    }

    template = (
        <>
            <div className="container__comment">
                <h3> COMENTARIOS</h3>
                <div>
                    <ul>
                        {workout.comments.map((comment: iComment) => (
                            <li>
                                <Comment
                                    comment={comment}
                                    id={workout._id as string}
                                ></Comment>
                            </li>
                        ))}
                    </ul>
                </div>
                {user.name !== '' ? (
                    <form onSubmit={handleComment}>
                        <label>Comment</label>
                        <input
                            className="inputComment"
                            type="text"
                            name="text"
                            alt="text"
                            value={formData.text}
                            onChange={handleChange}
                        ></input>

                        <button className="buttonSend" type="submit">
                            Enviar
                        </button>
                    </form>
                ) : (
                    ''
                )}
            </div>
        </>
    );
    return template;
}

export default ListComments;
