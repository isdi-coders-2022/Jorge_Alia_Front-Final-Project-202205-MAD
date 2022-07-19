import { iComment } from '../models/comment.model';
import { iWorkout } from '../models/workout.model';
import { getToken } from '../utils/token';

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

    addComment(comment: iComment, id: string): Promise<iWorkout> {
        return fetch(this.url + `/addcomment/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${getToken()}`,
            },
        }).then((resp) => resp.json());
    }
    deleteComment(commentsID: object, id: string): Promise<iWorkout> {
        return fetch(this.url + `/deletecomment/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(commentsID),
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${getToken()}`,
            },
        }).then((resp) => resp.json());
    }
}
