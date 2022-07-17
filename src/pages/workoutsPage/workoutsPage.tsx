import { useSelector } from 'react-redux';
import { useState } from 'react';
import { iState } from '../../store/store';
import { Link } from 'react-router-dom';
import './workoutsPage.css';
import { AddFilter } from './helperAddFilterCategory';
import { AddFilterMaterial } from './helperAddFilterMaterial';
import Filter from '../../components/workout/workoutFilter/workoutFilter';

export function WorkoutPage() {
    const user = useSelector((store: iState) => store.users);
    let template;
    const [properties, setProperties] = useState({
        category: '',
        complementaryMaterial: '',
    });
    if (user.token !== '') {
        template = (
            <>
                <main className="containerWorkoutPage">
                    <div className="wrapperTitleWorkout">
                        <h2 className="titleWorkout">
                            ¡ DISEÑA TU ENTRENAMIENTO !
                        </h2>
                        <h3 className="arrow">⬇</h3>
                    </div>
                    <div className="wrapperTitleModality">
                        <h3 className="titleModality">PASO 1 /</h3>
                        <div className="wrapper__titleModalitySecond">
                            <h3 className="titleModalitySecond">
                                Selecciona <i>modalidad</i>
                            </h3>
                        </div>
                    </div>

                    <section className="firstFilter">
                        <img
                            role="button"
                            className="imageFilter"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fbrazoyab.jpg?alt=media&token=8f2198be-f494-447c-b632-f95213a5c499"
                            alt="Brazos y Abs"
                            title="Brazos y Abs"
                            onClick={() => {
                                AddFilter(
                                    'Brazos y abs',
                                    'brazos-abs',
                                    setProperties,
                                    properties
                                );
                            }}
                            id="brazos-abs"
                        />
                        {/* <img
                        id="tik tikYes"
                        className="tik"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Ftik.png?alt=media&token=ac88817c-857f-4ca4-9127-233dd6e530e9"
                        alt=""
                    /> */}

                        <img
                            role="button"
                            className="imageFilter"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fgluteoypiernas.jpg?alt=media&token=153fcc95-5d98-410e-8f97-6d900df00b04"
                            alt="Glúteos & Piernas"
                            title="Glúteos & Piernas"
                            onClick={() => {
                                AddFilter(
                                    'Gluteos y piernas',
                                    'gluteos-piernas',
                                    setProperties,
                                    properties
                                );
                            }}
                            id="gluteos-piernas"
                        />

                        <img
                            role="button"
                            className="imageFilter"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Ftotalbody.JPG?alt=media&token=b62698b7-25d6-4295-b288-a9c0b6225ef5"
                            alt="Total body"
                            title="Total body"
                            onClick={() => {
                                AddFilter(
                                    'Total body',
                                    'total-body',
                                    setProperties,
                                    properties
                                );
                            }}
                            id="total-body"
                        />
                    </section>
                    <div className="wrapperTitleModality">
                        <h3 className="titleModality titleModality2">
                            PASO 2 /
                        </h3>
                        <div className="wrapper__titleModalitySecond">
                            <h3 className="titleModalitySecond">
                                Selecciona uso de <i>material</i>
                            </h3>
                        </div>
                    </div>

                    <div className="secondFilter1">
                        <img
                            role="button"
                            className="imageFilter2"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fsinmaterial.JPG?alt=media&token=b32c59d5-47e8-46e5-afa6-e1794538a807"
                            alt="Sin material"
                            title="Sin material"
                            onClick={() => {
                                AddFilterMaterial(
                                    'Sin material',
                                    'sin-material',
                                    setProperties,
                                    properties
                                );
                            }}
                            id="sin-material"
                        />
                        <img
                            role="button"
                            className="imageFilter2"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fgoma.jpg?alt=media&token=f91d57f6-a2cb-43d2-b915-998ecb8acb07"
                            alt="Goma"
                            title="Goma"
                            onClick={() => {
                                AddFilterMaterial(
                                    'Goma',
                                    'goma',
                                    setProperties,
                                    properties
                                );
                            }}
                            id="goma"
                        />
                    </div>
                    <div className="secondFilter2">
                        <img
                            role="button"
                            className="imageFilter2"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fmancuernas.jpg?alt=media&token=406da4bc-e6d6-4588-bfdc-fecd60d58299"
                            alt="Mancuernas"
                            title="Mancuernas"
                            onClick={() => {
                                AddFilterMaterial(
                                    'Mancuernas',
                                    'mancuernas',
                                    setProperties,
                                    properties
                                );
                            }}
                            id="mancuernas"
                        />

                        <img
                            role="button"
                            className="imageFilter2"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fsoftball.JPG?alt=media&token=315d53cd-71af-4df1-aea4-b3da3e5f1c79"
                            alt="Softball"
                            title="Sofball"
                            onClick={() => {
                                AddFilterMaterial(
                                    'Softball',
                                    'softball',
                                    setProperties,
                                    properties
                                );
                            }}
                            id="softball"
                        />
                    </div>
                    <div className="wrapperTitleModality">
                        <h3 className="titleModality3">PASO 3 /</h3>
                        <h3 className="titleModalitySecond">
                            Selecciona tu <i>workout</i> y . . . ¡A ENTRENAR!
                        </h3>
                    </div>
                    <Filter properties={properties}></Filter>
                </main>
            </>
        );
    } else {
        template = (
            <>
                <div className="wrapperInfo">
                    <p>! Únete para poder ver todos los entrenamientos !</p>

                    <Link to="/login">
                        <button className="buttonGoToRegister">
                            !REGÍSTRATE AQUÍ!
                        </button>
                    </Link>
                </div>
            </>
        );
    }

    return template;
}

export default WorkoutPage;
