import { useSelector } from 'react-redux';
import { iWorkout } from '../../../models/workout.model';
import { iState } from '../../../store/store';
import { WorkoutMySelection } from '../workoutMySelection/workoutMySelection';
import './listWorkouts.css';

export function WorkoutList() {
    const user = useSelector((store: iState) => store.user);
    return (
        <ul className="wrapper__workoutsListWorkout">
            {user.workouts.map((workout: iWorkout, index) => (
                <li className="workoutsListWorkout" key={workout._id}>
                    <WorkoutMySelection workout={workout}></WorkoutMySelection>
                </li>
            ))}
        </ul>
    );
}
