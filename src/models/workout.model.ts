import { iComment } from './comment.model';

export interface iWorkout {
    _id?: string;
    title: string;
    image: string;
    video: string;
    description: string;
    category: string;
    complementaryMaterial: string;
    favorite: boolean;
    duration: number;
    intensity: string;
    comments: Array<iComment>;
}
