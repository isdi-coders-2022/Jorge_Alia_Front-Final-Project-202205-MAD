import { useSelector } from 'react-redux';
import { WorkoutList } from '../../components/workout/listWorkouts/listWorkouts';
import { iState } from '../../store/store';
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
        if (user.user.workouts.length === 0 && user.token !== '') {
            template = (
                <>
                    <main className="wrapperMain wrapperInfo">
                        <p>Ningún entrenamiento añadido</p>
                    </main>
                    ;
                </>
            );
        } else {
            template = (
                <>
                    <main className="wrapperMain" title="main">
                        <h3 className="titlePageMySelection">
                            Mi propuesta de entrenamiento
                        </h3>
                        {user.user.workouts && <WorkoutList></WorkoutList>}
                    </main>
                </>
            );
        }
    }

    return template;
}

export default MySelectionPage;
