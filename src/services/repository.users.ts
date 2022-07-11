import { iUser } from '../models/user.model';
import { iWorkout } from '../models/workout.model';

export class HttpStoreUser {
    url: string;
    constructor() {
        this.url = 'http://localhost:3500/user';
    }
    getUsers(): Promise<iUser[]> {
        return fetch(this.url).then((resp) => resp.json());
    }

    getUser(user: iUser): Promise<iUser> {
        return fetch(this.url + `/${user._id}`).then((resp) => resp.json());
    }

    registerUser(user: iUser): Promise<iUser> {
        return fetch(this.url + '/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'content-type': 'application/json' },
        }).then((resp) => resp.json());
    }

    loginUser(user: Partial<iUser>): Promise<iUser> {
        return fetch(this.url + '/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'content-type': 'application/json' },
        }).then((resp) => resp.json());
    }
    //COMPROBAR QUE ESTOS MÉTODOS ESTÁN BIEN

    addToFavorites(id: string) {
        return fetch(this.url + `/addtofavorites/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
        }).then((resp) => resp.json());
    }
    deleteFavorites(workout: iWorkout) {
        return fetch(this.url + `/deletefromfavorites/${workout._id}`, {
            method: 'PATCH',
            body: JSON.stringify(workout),
            headers: { 'content-type': 'application/json' },
        }).then((resp) => resp.json());
    }

    addToDone(workout: iWorkout) {
        return fetch(this.url + `/addtofavorites/${workout._id}`, {
            method: 'PATCH',
            body: JSON.stringify(workout),
            headers: { 'content-type': 'application/json' },
        }).then((resp) => resp.json());
    }
    deleteFromDone(workout: iWorkout) {
        return fetch(this.url + `/deletefromfavorites/${workout._id}`, {
            method: 'PATCH',
            body: JSON.stringify(workout),
            headers: { 'content-type': 'application/json' },
        }).then((resp) => resp.json());
    }

    updateUser(user: iUser): Promise<iUser> {
        return fetch(this.url + `/${user._id}`, {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: { 'content-type': 'application/json' },
        }).then((resp) => resp.json());
    }

    deleteUser(user: iUser): Promise<number> {
        return fetch(this.url + `/${user._id}`, {
            method: 'DELETE',
        }).then((resp) => resp.status);
    }
}
