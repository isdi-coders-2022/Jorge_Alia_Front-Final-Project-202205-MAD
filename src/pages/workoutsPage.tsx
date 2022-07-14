import { useState } from 'react';
import Filter from '../components/workout/workoutFilter';
import './workoutsPage.css';
let changeFilter = false;
export function WorkoutPage() {
    const [properties, setProperties] = useState({
        category: '',
        complementaryMaterial: '',
    });

    function addFilter(filter: string) {
        setProperties({ ...properties, category: filter });
        const imgBlack = document.getElementById('img');

        if (changeFilter === false) {
            (imgBlack as HTMLElement).classList.add('mystyle');
            changeFilter = true;
        }
        // if (changeFilter === true) {
        //     (imgBlack as HTMLElement).classList.remove('mystyle');
        //     changeFilter = false;
        // }

        // let changeFilter = false;
        // if ((changeFilter = false)) {
        // }

        // const tik = document.getElementById('tikYes');

        // if ((changeFilter = false)) {

        // (tik as HTMLElement).classList.add('tikYes');
        // changeFilter = true;
        // }
        // if ((changeFilter = true)) {
        //     (imgBlack as HTMLElement).classList.remove('mystyle');
        //     (tik as HTMLElement).classList.add('tikYes');
        //     changeFilter = false;
        // }
    }

    function addFilterMaterial(filter: string) {
        setProperties({ ...properties, complementaryMaterial: filter });
        console.log(properties);
    }

    const template = (
        <>
            <div className="wrapperTitleWorkout">
                <h2 className="titleWorkout">DISEÑA TU WORKOUT</h2>
            </div>
            <div className="wrapperTitleModality">
                <h3 className="titleModality">Selecciona modalidad</h3>
            </div>

            <section className="firstFilter">
                <div className="wrapperFilter">
                    <img
                        role="button"
                        className="filterImage"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fbrazoyab.jpg?alt=media&token=8f2198be-f494-447c-b632-f95213a5c499"
                        alt="Brazos y Abs"
                        title="Brazos y Abs"
                        onClick={() => {
                            addFilter('Brazos y abs');
                        }}
                        id="img"
                    />
                    <img
                        id="tik tikYes"
                        className="tik"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Ftik.png?alt=media&token=ac88817c-857f-4ca4-9127-233dd6e530e9"
                        alt=""
                    />
                </div>

                <img
                    role="button"
                    className="imageFilter"
                    src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fgluteoypiernas.jpg?alt=media&token=153fcc95-5d98-410e-8f97-6d900df00b04"
                    alt="Glúteos & Piernas"
                    title="Glúteos & Piernas"
                    onClick={() => {
                        addFilter('Gluteos y piernas');
                    }}
                />

                <img
                    role="button"
                    className="imageFilter"
                    src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Ftotalbody.JPG?alt=media&token=b62698b7-25d6-4295-b288-a9c0b6225ef5"
                    alt="Total body"
                    title="Total body"
                    onClick={() => {
                        addFilter('Total body');
                    }}
                />
            </section>
            <div className="wrapperTitleModality">
                <h3 className="titleModality">Selecciona uso de material</h3>
            </div>

            <div className="secondFilter1">
                <img
                    role="button"
                    className="imageFilter2"
                    src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fsinmaterial.JPG?alt=media&token=b32c59d5-47e8-46e5-afa6-e1794538a807"
                    alt="Sin material"
                    title="Sin material"
                    onClick={() => {
                        addFilterMaterial('Sin material');
                    }}
                />
                <img
                    role="button"
                    className="imageFilter2"
                    src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fgoma.jpg?alt=media&token=f91d57f6-a2cb-43d2-b915-998ecb8acb07"
                    alt="Goma"
                    title="Goma"
                    onClick={() => {
                        addFilterMaterial('Goma');
                    }}
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
                        addFilterMaterial('Mancuernas');
                    }}
                />

                <img
                    role="button"
                    className="imageFilter2"
                    src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fsoftball.JPG?alt=media&token=315d53cd-71af-4df1-aea4-b3da3e5f1c79"
                    alt="Softball"
                    title="Sofball"
                    onClick={() => {
                        addFilterMaterial('Sofball');
                    }}
                />
            </div>
            <div className="wrapperTitleModality">
                <h3 className="titleModality">!! Resultados de tu filtro !!</h3>
            </div>
            <Filter properties={properties}></Filter>
        </>
    );

    return template;
}

export default WorkoutPage;
