export interface iComment {
    _id?: string;
    text: string;
    user?: {
        name: string;
        _id: string;
    };
    score: number;
}
