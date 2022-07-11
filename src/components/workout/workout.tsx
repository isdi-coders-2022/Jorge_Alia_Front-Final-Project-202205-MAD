import { Link } from 'react-router-dom';
import { iWorkout } from '../../models/workout.model';
import './workout.css';

export function Workout({ workout }: { workout: iWorkout }) {
    const template = (
        <>
            <Link to={'/details/' + workout._id}>
                <img className="image" src={workout.image} alt="" />
            </Link>
        </>
    );
    return template;
}
