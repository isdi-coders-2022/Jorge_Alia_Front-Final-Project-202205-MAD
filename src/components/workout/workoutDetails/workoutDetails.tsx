import { useSelector } from 'react-redux';
import { iWorkout } from '../../../models/workout.model';
import { iState } from '../../../store/store';
import { ButtonAddToMyWorkout } from '../../buttons/buttonAddToMyWorkout';
import { ButtonRemoveToMyWorkout } from '../../buttons/buttonRemoveToMyWorkout';
import './workoutDetails.css';

export function DetailsWorkout({ workout }: { workout: iWorkout }) {
    const user = useSelector((store: iState) => store.user);
    return (
        <>
            <h2 className="titleDescription">
                Entrenamiento de {workout.title}
            </h2>
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
                    <p>Duración: {workout.duration} minutos</p>
                    <p>Material necesario: {workout.complementaryMaterial}</p>

                    <p className="paragraph__description">
                        {workout.description}
                    </p>
                    <div className="wrapperButtonAdd">
                        {user.workouts.some(
                            (item) => (item._id as string) === workout._id
                        ) ? (
                            <ButtonRemoveToMyWorkout
                                workout={workout}
                            ></ButtonRemoveToMyWorkout>
                        ) : (
                            <ButtonAddToMyWorkout
                                workout={workout}
                            ></ButtonAddToMyWorkout>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
