import { Link } from 'react-router-dom';
import { iWorkout } from '../../models/workout.model';

export function Workout({ workout }: { workout: iWorkout }) {
    const template = (
        <>
            <Link to={'/details/' + workout._id}>
                <img className="image" src={`./img/` + workout.image} alt="" />
            </Link>
        </>
    );
    return template;
}
