import { iWorkout } from '../models/workout.model';

export class HttpStoreWorkouts {
    url: string;
    constructor() {
        this.url = 'http://localhost:3500/workouts/';
    }
    getWorkouts() {
        return fetch(this.url).then((resp) => {
            return resp.json();
        });
    }
    getWorkout(id: string): Promise<iWorkout> {
        return fetch(this.url + `/${id}`).then((resp) => resp.json());
    }
    //PREGUNTAR SI ME HACE FALTA EL MÉTODO
    setWorkout(workout: iWorkout): Promise<iWorkout> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    //COMPORBAR QUE ESTOS MÉTODOS DE COMENTARIOS ESTÁN BIEN HECHOS
    addComment(workout: iWorkout): Promise<iWorkout> {
        return fetch(this.url + `/addcomment/${workout._id}`, {
            method: 'PATCH',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    deleteComment(workout: iWorkout): Promise<iWorkout> {
        return fetch(this.url + `/deletecomment/${workout._id}`, {
            method: 'PATCH',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
}
