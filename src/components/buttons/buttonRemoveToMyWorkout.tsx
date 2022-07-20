import { useDispatch } from 'react-redux';
import { iWorkout } from '../../models/workout.model';
import { updateUserAction } from '../../redurcers/user.reducer/user.action.creators';
import { HttpStoreUser } from '../../services/repository.users';

export function ButtonRemoveToMyWorkout({ workout }: { workout: iWorkout }) {
    const dispatcher = useDispatch();
    function handleSubmit() {
        new HttpStoreUser()
            .deleteFavorites(workout._id as string)
            .then((data) => {
                dispatcher(updateUserAction(data));
            });
    }

    return (
        <button className="buttonRemove" onClick={() => handleSubmit()}>
            Eliminar rutina
        </button>
    );
}
