import { useSelector } from 'react-redux';
import { useState } from 'react';
import Filter from '../components/workout/workoutFilter';
import { iState } from '../store/store';
import { Link } from 'react-router-dom';
import './workoutsPage.css';

export function WorkoutPage() {
    const user = useSelector((store: iState) => store.users);
    let template;
    const [properties, setProperties] = useState({
        category: '',
        complementaryMaterial: '',
    });

    function addFilter(filter: string, id: string) {
        setProperties({ ...properties, category: filter });
        const imgBlackType = document.getElementById(id);
        // const imgBlackMaterial = document.getElementById(id);
        const allImages = document.querySelectorAll('.imageFilter');
        allImages.forEach((item) => {
            if (item.classList.contains('mystyle')) {
                item.classList.remove('mystyle');
            }
        });

        (imgBlackType as HTMLElement).classList.toggle('mystyle');
    }

    function addFilterMaterial(filter: string, id: string) {
        setProperties({ ...properties, complementaryMaterial: filter });
        const imgBlackType = document.getElementById(id);
        const allImages = document.querySelectorAll('.imageFilter2');
        allImages.forEach((item) => {
            if (item.classList.contains('mystyle')) {
                item.classList.remove('mystyle');
            }
        });
        (imgBlackType as HTMLElement).classList.toggle('mystyle');
    }
    if (user.token !== '') {
        template = (
            <>
                <div className="wrapperTitleWorkout">
                    <h2 className="titleWorkout">DISEÑA TU WORKOUT</h2>
                </div>
                <div className="wrapperTitleModality">
                    <h3 className="titleModality">Selecciona modalidad</h3>
                </div>

                <section className="firstFilter">
                    <img
                        role="button"
                        className="imageFilter"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fbrazoyab.jpg?alt=media&token=8f2198be-f494-447c-b632-f95213a5c499"
                        alt="Brazos y Abs"
                        title="Brazos y Abs"
                        onClick={() => {
                            addFilter('Brazos y abs', 'brazos-abs');
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
                            addFilter('Gluteos y piernas', 'gluteos-piernas');
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
                            addFilter('Total body', 'total-body');
                        }}
                        id="total-body"
                    />
                </section>
                <div className="wrapperTitleModality">
                    <h3 className="titleModality">
                        Selecciona uso de material
                    </h3>
                </div>

                <div className="secondFilter1">
                    <img
                        role="button"
                        className="imageFilter2"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fsinmaterial.JPG?alt=media&token=b32c59d5-47e8-46e5-afa6-e1794538a807"
                        alt="Sin material"
                        title="Sin material"
                        onClick={() => {
                            addFilterMaterial('Sin material', 'sin-material');
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
                            addFilterMaterial('Goma', 'goma');
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
                            addFilterMaterial('Mancuernas', 'mancuernas');
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
                            addFilterMaterial('Sofball', 'softball');
                        }}
                        id="softball"
                    />
                </div>
                <div className="wrapperTitleModality">
                    <h3 className="titleModality">
                        !! Resultados de tu filtro !!
                    </h3>
                </div>
                <Filter properties={properties}></Filter>
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
