import { useSelector } from 'react-redux';
import { iWorkout } from '../../models/workout.model';
import { HttpStoreUser } from '../../services/repository.users';
import { iState } from '../../store/store';
import './workoutDetails.css';
export function DetailsWorkout({ workout }: { workout: iWorkout }) {
    const user = useSelector((store: iState) => store.users);

    function handleSubmit() {
        console.log(user, 'Antes');

        new HttpStoreUser().addToFavorites(workout._id as string);
        console.log(user, 'Después');
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
