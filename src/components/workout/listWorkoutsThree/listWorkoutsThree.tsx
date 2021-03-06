import { iWorkout } from '../../../models/workout.model';
import { WorkoutHome } from '../workoutHome/workouthome';
import { useState } from 'react';
import './listWorkoutsThree.css';

export function WorkoutListThree({ workouts }: { workouts: Array<iWorkout> }) {
    const [indexMarker, setIndexMarker] = useState(0);
    function handleOnClickNext() {
        if (indexMarker === 9) {
            setIndexMarker(indexMarker - 9);
        }
        if (indexMarker !== 9) {
            setIndexMarker(indexMarker + 3);
        }
    }

    function handleOnClickPrev() {
        if (indexMarker === 0) {
            setIndexMarker(indexMarker + 9);
        }
        if (indexMarker !== 0) {
            setIndexMarker(indexMarker - 3);
        }
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
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Ficonopicoparantesisreves.png?alt=media&token=bd2a346c-8c7a-4a8d-9fe4-9de462af9ad7"
                        alt="Icono anterior"
                        title="Icono anterior"
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
                                    <WorkoutHome
                                        workout={workout}
                                    ></WorkoutHome>
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
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Ficonopicoparantesisreves.png?alt=media&token=bd2a346c-8c7a-4a8d-9fe4-9de462af9ad7"
                        alt="Icono siguiente"
                    />
                </div>
            </section>
        </>
    );
}
