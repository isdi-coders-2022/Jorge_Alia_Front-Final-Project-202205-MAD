import { HttpStoreWorkouts } from './repository.workouts';

describe('Given HttpStoreWorkouts', () => {
    const mockWorkout = {
        _id: 'h34h3n34n',
        title: ' SECUENCIA LATERAL DE PIERNAS con softball',
        image: ' piernasgluteossoftball.png',
        video: ' https://www.youtube.com/embed/gZghpARZK3Y',
        description:
            'Entrenamiento de pierna y glúteo con intensidad alta enfocada en el trabajo de pierna en postura lateral.',
        category: 'Gluteos y piernas',
        complementaryMaterial: 'Softball',
        duration: 12,
        intensity: 'Alta',
        comments: [],
    };

    describe('When we instantiate', () => {
        describe('And we use method getWorkouts', () => {
            test('Then it should return a array of two workouts', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue([
                        {
                            _id: 1,
                            name: 'Prueba 1',
                        },
                        {
                            _id: 2,
                            name: 'Prueba 2',
                        },
                    ]),
                });
                const result = await new HttpStoreWorkouts().getWorkouts();
                expect(fetch).toBeCalled();
                expect(result.length).toBe(2);
            });
        });
        describe('And we use method getWorkout', () => {
            test('Then it should return a workout', async () => {
                const workout_id = '1';
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue({ name: 'test', _id: workout_id }),
                });
                const result = await new HttpStoreWorkouts().getWorkout(
                    workout_id
                );
                expect(fetch).toBeCalled();
                expect(result._id).toBe('1');
            });
        });
        describe('And we use method addComment', () => {
            test('Then it should return a workout whit a comment', async () => {
                const mockComment = {
                    _id: '1',
                    text: 'Buen entrenamiento',
                    user: {
                        _id: '2',
                        name: 'Jorge',
                    },
                    score: 9,
                };

                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        ...mockWorkout,
                        comments: [mockComment],
                    }),
                });
                const result = await new HttpStoreWorkouts().addComment(
                    mockComment,
                    mockWorkout._id
                );
                expect(fetch).toBeCalled();
                expect(result).toEqual({
                    ...mockWorkout,
                    comments: [mockComment],
                });
            });
        });
        describe('And we use method deleteComment', () => {
            test('Then it should return a workout whit a comment deleted', async () => {
                const mockWorkoutFordelete = {
                    _id: 'h34h3n34n',
                    title: ' SECUENCIA LATERAL DE PIERNAS con softball',
                    image: ' piernasgluteossoftball.png',
                    video: ' https://www.youtube.com/embed/gZghpARZK3Y',
                    description:
                        'Entrenamiento de pierna y glúteo con intensidad alta enfocada en el trabajo de pierna en postura lateral.',
                    category: 'Gluteos y piernas',
                    complementaryMaterial: 'Softball',
                    duration: 12,
                    intensity: 'Alta',
                    comments: [
                        {
                            _id: '1',
                            text: 'Buen entrenamiento',
                            user: 'ds45dfs54gve45r',
                            score: 9,
                        },
                    ],
                };

                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        ...mockWorkoutFordelete,
                        comments: [],
                    }),
                });
                const result = await new HttpStoreWorkouts().deleteComment(
                    mockWorkoutFordelete.comments[0],
                    mockWorkoutFordelete._id
                );
                expect(fetch).toBeCalled();
                expect(result.comments).toHaveLength(0);
            });
        });
    });
});
