import { Link } from 'react-router-dom';
import { iWorkout } from '../../../models/workout.model';
import './workoutHome.css';

export function WorkoutHome({ workout }: { workout: iWorkout }) {
    return (
        <>
            <Link to={'/details/' + workout._id}>
                <img className="image" src={workout.image} alt="" />
            </Link>
        </>
    );
}
