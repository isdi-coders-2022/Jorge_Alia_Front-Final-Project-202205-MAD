import { iUser, iUserWithToken } from '../models/user.model';
import { getToken } from '../utils/token';

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

    loginUser(user: Partial<iUser>): Promise<iUserWithToken> {
        return fetch(this.url + '/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'content-type': 'application/json' },
        }).then((resp) => resp.json());
    }

    addToFavorites(id: string) {
        return fetch(this.url + `/addtofavorites/${id}`, {
            method: 'PATCH',
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((resp) => resp.json());
    }

    deleteFavorites(id: string) {
        return fetch(this.url + `/deletefromfavorites/${id}`, {
            method: 'PATCH',
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((resp) => resp.json());
    }

    addToDone(id: string) {
        return fetch(this.url + `/addtofavorites/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
        }).then((resp) => resp.json());
    }
    deleteFromDone(id: string) {
        return fetch(this.url + `/deletefromfavorites/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
        }).then((resp) => resp.json());
    }

    updateUser(user: Partial<iUser>, id: string): Promise<iUser> {
        return fetch(this.url + `/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${getToken()}`,
            },
        }).then((resp) => resp.json());
    }

    deleteUser(id: string): Promise<number> {
        return fetch(this.url + `/delete/${id}`, {
            method: 'DELETE',
            headers: { authorization: `Bearer ${getToken()}` },
        }).then((resp) => resp.json());
    }
}
