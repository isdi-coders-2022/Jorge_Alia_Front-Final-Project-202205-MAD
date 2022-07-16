import { useSelector } from 'react-redux';
import { iWorkout } from '../../../models/workout.model';
import { iState } from '../../../store/store';
import { WorkoutMySelection } from '../workoutMySelection/workoutMySelection';

export function WorkoutList() {
    const user = useSelector((store: iState) => store.users);
    const template = (
        <ul className="workoutsList">
            {user.user.workouts.map((workout: iWorkout, index) => (
                <li className="workoutsList__workout" key={workout._id}>
                    <WorkoutMySelection workout={workout}></WorkoutMySelection>
                </li>
            ))}
        </ul>
    );

    return template;
}
