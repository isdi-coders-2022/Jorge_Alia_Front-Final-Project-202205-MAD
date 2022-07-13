import { useDispatch } from 'react-redux';
import { iWorkout } from '../../models/workout.model';
import { updateUserAction } from '../../redurcers/user.reducer/user.action.creators';
import { HttpStoreUser } from '../../services/repository.users';
import './workoutDetails.css';
export function DetailsWorkout({ workout }: { workout: iWorkout }) {
    const dispatcher = useDispatch();

    function handleSubmit() {
        new HttpStoreUser()
            .addToFavorites(workout._id as string)
            .then((data) => dispatcher(updateUserAction(data)));
    }
    const template = (
        <>
            <p className="titleDescription">Entrenamiento de {workout.title}</p>
            <div className="containerDetails">
                <div className="containerDetails__video">
                    <iframe
                        width="560"
                        height="315"
                        src={workout.video + '?showinfo=0&rel=0&'}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="containerDetails__description">
                    <p>Intensidad: {workout.intensity}</p>
                    <p>Duración: {workout.duration}</p>
                    <p>Material necesario: {workout.complementaryMaterial}</p>
                    <div className="wrapperButtonAdd">
                        <button
                            className="buttonAddFavorite"
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            AÑADIR A MI RUTINA
                        </button>
                    </div>

                    <p>{workout.description}</p>
                </div>
            </div>
        </>
    );
    return template;
}
