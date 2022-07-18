import { useSelector } from 'react-redux';
import { iState } from '../../store/store';
import { Link } from 'react-router-dom';
import { WorkoutList } from '../../components/workout/listWorkouts/listWorkouts';
import './mySelectionPage.css';

export function MySelectionPage() {
    const materials = new Set();
    const user = useSelector((store: iState) => store.user);
    let template;
    if (user.name === '') {
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
        if (user.workouts.length === 0 && user) {
            template = (
                <>
                    <main className="wrapperMain wrapperInfo">
                        <p>Ningún entrenamiento añadido</p>
                    </main>
                </>
            );
        } else {
            let time = 0;
            let material = '  ';

            user.workouts.forEach((item) => {
                if (item.complementaryMaterial !== 'Sin material')
                    materials.add(item.complementaryMaterial);
                time = item.duration + time;
            });
            const materialArray = Array.from(materials);
            materialArray.forEach((item) => {
                material = material + ' - ' + item;
            });
            let intensity: any = [];
            user.workouts.map((item) => {
                intensity.push(item.intensity);
            });
            console.log(intensity);
            template = (
                <>
                    <main className="wrapperMain" title="main">
                        <h3 className="titlePageMySelection">
                            Mi propuesta de entrenamiento
                        </h3>
                        <div className="container__infoMySelection">
                            <p>Tiempo total: {time} minutos</p>
                            <p>
                                Material necesario:{' '}
                                {material ? material : 'Sin material'}
                            </p>
                            <p>Intensidad media: Alta</p>
                        </div>

                        {user.workouts && <WorkoutList></WorkoutList>}
                    </main>
                </>
            );
        }
    }

    return template;
}

export default MySelectionPage;
