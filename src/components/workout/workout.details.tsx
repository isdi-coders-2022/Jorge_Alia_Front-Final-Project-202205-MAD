import { iWorkout } from '../../models/workout.model';

export function DetailsWorkout({ workout }: { workout: iWorkout }) {
    const template = (
        <div className="containerDetails">
            <div className="containerDetails__video">
                <p>{workout.title}</p>
                <iframe
                    width="560"
                    height="315"
                    src={workout.video + '?showinfo=0&rel=0&'}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="containerDetails__description">
                <p>{workout.description}</p>
                <p>Intensidad: {workout.intensity}</p>
            </div>
        </div>
    );
    return template;
}
