export interface iUser {
    _id?: string;
    name: string;
    email: string;
    passwd: string;
    workouts: Array<string>;
    done: Array<string>;
    rol: string;
}