import { iWorkout } from './workout.model';

export interface iUser {
    _id?: string;
    name: string;
    email: string;
    passwd: string;
    workouts: Array<iWorkout>;
    done: Array<iWorkout>;
    rol: string;
}
export interface iUserWithToken {
    token: string;
    user: iUser;
}
