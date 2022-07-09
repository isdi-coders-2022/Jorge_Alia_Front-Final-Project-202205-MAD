import { useSelector } from 'react-redux';
import { WorkoutList } from '../components/app/workout/listWorkouts';

import { iState } from '../store/store';

export function HomePage() {
    const workouts = useSelector((store: iState) => store.workouts);
    const template = (
        <>
            <main>
                <div className="wrapper__image">
                    <img className="image__mar" src="./img/mar.jpg" alt="" />
                    <img
                        className="image__ana"
                        src="./img/portada.jpg"
                        alt=""
                    />
                </div>
                <div className="wrapper__text">
                    <div className="wrapper__h2">
                        <p>Entrena, disfruta, vive.</p>
                        <h2>Diseña tu propio entrenamiento</h2>
                    </div>
                    <p>
                        Si quieres transformar la manera de comunicarte con tu
                        cuerpo y empezar a escucharlo de una forma más
                        consciente. Si te gustaría fortalecer o tonificar la
                        musculatura de forma analítica, respetando los límites
                        de tu cuerpo. Si sufres dolores de espalda y te gustaría
                        equilibrar tu postura a través del pilates, este espacio
                        es para ti.
                    </p>
                </div>
                <WorkoutList workouts={workouts}></WorkoutList>
            </main>
        </>
    );

    return template;
}

export default HomePage;
