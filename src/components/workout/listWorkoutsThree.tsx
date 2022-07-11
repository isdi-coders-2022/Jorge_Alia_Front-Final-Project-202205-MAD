import { iWorkout } from '../../models/workout.model';
import { Workout } from './workout';
import './listWorkouts.css';
import { useState } from 'react';
import './listWorkoutsThree.css';

export function WorkoutListThree({ workouts }: { workouts: Array<iWorkout> }) {
    const [indexMarker, setIndexMarker] = useState(0);
    function handleOnClickNext() {
        setIndexMarker(indexMarker + 3);
    }

    function handleOnClickPrev() {
        setIndexMarker(indexMarker - 3);
    }
    return (
        <>
            <section className="paginationWorkout">
                <div
                    role="button"
                    className="wrapperIconBack"
                    onClick={() => {
                        handleOnClickPrev();
                    }}
                >
                    <img
                        className="iconBack"
                        src="./img/iconopicoparantesis.png"
                        alt=""
                    />
                </div>

                <ul className="workoutsList">
                    {workouts.map(
                        (workout: iWorkout, index) =>
                            index >= indexMarker &&
                            index < indexMarker + 3 && (
                                <li
                                    className="workoutsList__workout"
                                    key={workout._id}
                                >
                                    <Workout workout={workout}></Workout>
                                </li>
                            )
                    )}
                </ul>
                <div
                    role="button"
                    className="wrapperIconBack"
                    onClick={() => {
                        handleOnClickNext();
                    }}
                >
                    <img
                        className="iconNext"
                        src="./img/iconopicoparantesis.png"
                        alt=""
                    />
                </div>
            </section>
        </>
    );
}
