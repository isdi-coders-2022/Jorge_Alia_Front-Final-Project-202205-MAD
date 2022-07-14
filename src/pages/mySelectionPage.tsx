import { useSelector } from 'react-redux';
import { WorkoutList } from '../components/workout/listWorkouts';
import { iState } from '../store/store';
import { Link } from 'react-router-dom';
import './mySelectionPage.css';

export function MySelectionPage() {
    const user = useSelector((store: iState) => store.users);
    let template;
    if (user.token === '') {
        template = (
            <>
                <div className="wrapperInfo">
                    <p>! Únete para crear tu propio entrenamiento !</p>

                    <Link to="/login">
                        <button className="buttonGoToRegister">
                            !REGÍSTRATE AQUÍ!
                        </button>
                    </Link>
                </div>
            </>
        );
    } else {
        template = <>{user.user.workouts && <WorkoutList></WorkoutList>}</>;
    }

    return template;
}

export default MySelectionPage;
