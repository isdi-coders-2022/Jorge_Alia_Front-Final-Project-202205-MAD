import { iWorkout } from '../../../models/workout.model';
import { Workout } from './workout';

export function WorkoutList({ workouts }: { workouts: Array<iWorkout> }) {
    const template = (
        <ul className="workoutsList">
            {workouts.map((workout: iWorkout) => (
                <li key={workout._id}>
                    <Workout workout={workout}></Workout>
                </li>
            ))}
        </ul>
    );

    return template;
}
