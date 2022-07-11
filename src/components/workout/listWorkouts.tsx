import { iWorkout } from '../../models/workout.model';
import { Workout } from './workout';
import './listWorkouts.css';

export function WorkoutList({ workouts }: { workouts: Array<iWorkout> }) {
    const template = (
        <ul className="workoutsList">
            {workouts.map((workout: iWorkout, index) => (
                <li className="workoutsList__workout" key={workout._id}>
                    <Workout workout={workout}></Workout>
                </li>
            ))}
        </ul>
    );

    return template;
}
