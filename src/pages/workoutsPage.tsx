import './workoutsPage.css';

export function WorkoutPage() {
    const template = (
        <>
            <h2>Selecciona modalidad</h2>
            <section className="firstFilter">
                <div role="button">
                    <img
                        className="image"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fbrazoyab.jpg?alt=media&token=8f2198be-f494-447c-b632-f95213a5c499"
                        alt=""
                    />
                </div>

                <div role="button">
                    <img
                        className="image"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fgluteoypiernas.jpg?alt=media&token=153fcc95-5d98-410e-8f97-6d900df00b04"
                        alt=""
                    />
                </div>
                <div role="button">
                    <img
                        className="image"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Ftotalbody.JPG?alt=media&token=b62698b7-25d6-4295-b288-a9c0b6225ef5"
                        alt=""
                    />
                </div>
            </section>

            <h2>Selecciona uso de material</h2>
            <div className="secondFilter1">
                <div role="button">
                    <img
                        className="image"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fsinmaterial.JPG?alt=media&token=b32c59d5-47e8-46e5-afa6-e1794538a807"
                        alt=""
                    />
                </div>
                <div role="button">
                    <img
                        className="image"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fgoma.jpg?alt=media&token=f91d57f6-a2cb-43d2-b915-998ecb8acb07"
                        alt=""
                    />
                </div>
            </div>
            <div className="secondFilter2">
                <div role="button">
                    <img
                        className="image"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fmancuernas.jpg?alt=media&token=406da4bc-e6d6-4588-bfdc-fecd60d58299"
                        alt=""
                    />
                </div>
                <div role="button">
                    <img
                        className="image"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/filtros%2Fsoftball.JPG?alt=media&token=315d53cd-71af-4df1-aea4-b3da3e5f1c79"
                        alt=""
                    />
                </div>
            </div>

            <p>!! Busca y añade a tu rutina de ejercicos !!</p>
            <button>BUSCAR</button>
        </>
    );

    return template;
}

export default WorkoutPage;
