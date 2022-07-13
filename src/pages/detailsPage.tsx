import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailsWorkout } from '../components/workout/workoutDetails';
import { iWorkout } from '../models/workout.model';

import { iState } from '../store/store';

export function DetailsPage() {
    const workouts = useSelector((store: iState) => store.workouts);
    const params = useParams();

    const template = (
        <>
            <DetailsWorkout
                workout={
                    workouts.find((item) => item._id === params.id!) as iWorkout
                }
            />
        </>
    );

    return template;
}

export default DetailsPage;
