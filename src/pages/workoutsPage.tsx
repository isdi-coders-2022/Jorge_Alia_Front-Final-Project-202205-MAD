import './workoutsPage.css';

export function WorkoutPage() {
    const template = (
        <>
            <h2>Selecciona modalidad</h2>
            <section className="firstFilter">
                <div role="button">
                    <img className="image" src="./img/brazoyab.jpg" alt="" />
                </div>

                <div role="button">
                    <img
                        className="image"
                        src="./img/gluteoypiernas.jpg"
                        alt=""
                    />
                </div>
                <div role="button">
                    <img className="image" src="./img/totalbody.jpg" alt="" />
                </div>
            </section>

            <h2>Selecciona uso de material</h2>
            <div className="secondFilter1">
                <div role="button">
                    <img className="image" src="./img/sinmaterial.jpg" alt="" />
                </div>
                <div role="button">
                    <img className="image" src="./img/goma.jpg" alt="" />
                </div>
            </div>
            <div className="secondFilter2">
                <div role="button">
                    <img className="image" src="./img/mancuernas.jpg" alt="" />
                </div>
                <div role="button">
                    <img className="image" src="./img/softball.jpg" alt="" />
                </div>
            </div>

            <p>!! Busca y añade a tu rutina de ejercicos !!</p>
            <button></button>
        </>
    );

    return template;
}

export default WorkoutPage;
