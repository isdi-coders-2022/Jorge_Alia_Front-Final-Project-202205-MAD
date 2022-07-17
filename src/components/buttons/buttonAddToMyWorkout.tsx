import { useDispatch } from 'react-redux';
import { iWorkout } from '../../models/workout.model';
import { updateUserAction } from '../../redurcers/user.reducer/user.action.creators';
import { HttpStoreUser } from '../../services/repository.users';
import Swal from 'sweetalert2';

export function ButtonAddToMyWorkout({ workout }: { workout: iWorkout }) {
    const dispatcher = useDispatch();

    function handleFavorite() {
        new HttpStoreUser()
            .addToFavorites(workout._id as string)
            .then((data) => {
                dispatcher(updateUserAction(data));
                Swal.fire({
                    title: 'Hecho!',
                    text: 'Añadido a tu entrenamiento',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Regístrese',
                    text: 'No se pudo agregar',
                    icon: 'error',
                    confirmButtonText: 'Volver',
                });
            });
    }
    const template = (
        <>
            <button
                className="buttonAddFavorite"
                onClick={() => {
                    handleFavorite();
                }}
            >
                Añadir rutina
            </button>
        </>
    );
    return template;
}
