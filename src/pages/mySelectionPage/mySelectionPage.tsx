import { useSelector } from 'react-redux';
import { iState } from '../../store/store';
import { Link } from 'react-router-dom';
import { WorkoutList } from '../../components/workout/listWorkouts/listWorkouts';
import './mySelectionPage.css';
import { timeLog } from 'console';

export function MySelectionPage() {
    const user = useSelector((store: iState) => store.users);
    let template;
    if (user.token === '') {
        template = (
            <>
                <main>
                    <div className="wrapperInfo">
                        <p>! Únete para crear tu propio entrenamiento !</p>

                        <Link to="/login">
                            <button className="buttonGoToRegister">
                                !REGÍSTRATE AQUÍ!
                            </button>
                        </Link>
                    </div>
                </main>
            </>
        );
    } else {
        if (user.user.workouts.length === 0 && user.token !== '') {
            template = (
                <>
                    <main className="wrapperMain wrapperInfo">
                        <p>Ningún entrenamiento añadido</p>
                    </main>
                </>
            );
        } else {
            let time = 0;
            let material = '';
            user.user.workouts.forEach((item) => {
                time = item.duration + time;
                material = item.complementaryMaterial + ' y ' + material;
            });
            template = (
                <>
                    <main className="wrapperMain" title="main">
                        <h3 className="titlePageMySelection">
                            MI PROPUESTA DE ENTRENAMIENTO
                        </h3>
                        <div className="container__infoMySelection">
                            <p>Tiempo total = {time} minutos</p>
                            <p>Material necesario = {material}</p>
                            <p>Intensidad media = </p>
                        </div>

                        {user.user.workouts && <WorkoutList></WorkoutList>}
                    </main>
                </>
            );
        }
    }

    return template;
}

export default MySelectionPage;
