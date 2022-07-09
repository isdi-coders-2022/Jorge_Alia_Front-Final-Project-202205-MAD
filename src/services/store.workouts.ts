export class HttpStoreWorkouts {
    url: string;
    constructor() {
        this.url = 'http://localhost:3500/workouts/';
    }
    getWorkouts() {
        //GET
        return fetch(this.url).then((resp) => {
            return resp.json();
        });
    }
}
