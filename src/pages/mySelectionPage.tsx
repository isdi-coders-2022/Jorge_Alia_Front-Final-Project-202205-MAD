import { useSelector } from 'react-redux';
import { WorkoutList } from '../components/workout/listWorkouts';
import { iState } from '../store/store';

export function MySelectionPage() {
    const user = useSelector((store: iState) => store.users);
    const template = (
        <>
            {user.user.workouts && (
                <WorkoutList workouts={user.user.workouts}></WorkoutList>
            )}
        </>
    );
    return template;
}

export default MySelectionPage;
