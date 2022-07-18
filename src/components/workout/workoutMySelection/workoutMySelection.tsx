import { Link } from 'react-router-dom';
import { iWorkout } from '../../../models/workout.model';
import './workoutMySelection.css';
import { ButtonRemoveToMyWorkout } from '../../buttons/buttonRemoveToMyWorkout';

export function WorkoutMySelection({ workout }: { workout: iWorkout }) {
    const template = (
        <>
            <Link to={'/details/' + workout._id}>
                <img
                    className="image"
                    src={workout.image}
                    alt="Imagen entrenamiento"
                />
            </Link>
            <ButtonRemoveToMyWorkout
                workout={workout}
            ></ButtonRemoveToMyWorkout>
        </>
    );
    return template;
}
