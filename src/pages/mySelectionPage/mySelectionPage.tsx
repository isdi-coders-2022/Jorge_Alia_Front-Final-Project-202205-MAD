import { useSelector } from 'react-redux';
import { iState } from '../../store/store';
import { Link } from 'react-router-dom';
import { WorkoutList } from '../../components/workout/listWorkouts/listWorkouts';
import './mySelectionPage.css';
import { intensityObj } from '../../models/intensity.model';

export function MySelectionPage() {
    const materials = new Set();
    const user = useSelector((store: iState) => store.user);
    if (user.name === '') {
        return (
            <>
                <main>
                    <div className="wrapperInfo">
                        <p>¡ Únete para crear tu propio entrenamiento !</p>

                        <Link to="/login">
                            <button className="buttonGoToRegister">
                                ¡REGÍSTRATE AQUÍ!
                            </button>
                        </Link>
                    </div>
                </main>
            </>
        );
    } else {
        if (user.workouts.length === 0 && user) {
            return (
                <>
                    <main className="wrapperMain wrapperInfo">
                        <p>Ningún entrenamiento añadido</p>
                    </main>
                </>
            );
        } else {
            let time = 0;
            let material = '';

            user.workouts.forEach((item) => {
                if (item.complementaryMaterial !== 'Sin material')
                    materials.add(item.complementaryMaterial);
                time = item.duration + time;
            });
            const materialArray = Array.from(materials);
            materialArray.forEach((item) => {
                material = material + ' - ' + item;
            });
            let intensityArray: any = [];
            user.workouts.forEach((item) =>
                intensityArray.push(
                    intensityObj[item.intensity as 'Baja' | 'Media' | 'Alta']
                )
            );
            let intensity = 0;
            intensityArray.map(
                (item: number) => (intensity = item + intensity)
            );
            intensity = Math.round(intensity / intensityArray.length);
            let newIntensity = '';
            switch (intensity) {
                case (intensity = 0):
                    newIntensity = 'Baja';
                    break;
                case (intensity = 1):
                    newIntensity = 'Media';
                    break;
                case (intensity = 2):
                    newIntensity = 'Alta';
                    break;
            }

            return (
                <>
                    <main className="wrapperMain">
                        <h3 className="titlePageMySelection">
                            Mi propuesta de entrenamiento
                        </h3>
                        <div className="container__infoMySelection">
                            <p>
                                <b>Tiempo total ➜ </b> {time} minutos
                            </p>
                            <p>
                                <b> Material necesario ➜ </b>{' '}
                                {material ? material : 'Sin material'}
                            </p>
                            <p>
                                <b> Intensidad ➜ </b> {newIntensity}
                            </p>
                        </div>

                        {user.workouts && <WorkoutList></WorkoutList>}
                    </main>
                </>
            );
        }
    }
}

export default MySelectionPage;
