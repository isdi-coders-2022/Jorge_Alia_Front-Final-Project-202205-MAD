import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { iWorkout } from '../../models/workout.model';
import { HttpStoreUser } from '../../services/repository.users';
import { updateUserAction } from '../../redurcers/user.reducer/user.action.creators';
import './workoutHome.css';

export function WorkoutMySelection({ workout }: { workout: iWorkout }) {
    const dispatcher = useDispatch();
    function handleSubmit() {
        new HttpStoreUser()
            .deleteFavorites(workout._id as string)
            .then((data) => dispatcher(updateUserAction(data)));
    }
    const template = (
        <>
            <Link to={'/details/' + workout._id}>
                <img
                    className="image"
                    src={workout.image}
                    alt="Imagen entrenamiento"
                />
            </Link>
            <button onClick={() => handleSubmit()}>Eliminar</button>
        </>
    );
    return template;
}
