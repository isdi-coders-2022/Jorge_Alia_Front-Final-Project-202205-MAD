import { HttpStoreWorkouts } from './store.workouts';

describe('Given HttpStoreWorkouts', () => {
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
        describe('And we use method setWorkout', () => {
            test('should first', async () => {
                const workout = {
                    _id: '62c3fa970a6339f727766546',
                    title: 'ABDOMEN & GLÚTEOS con softball',
                    image: 'totalbodysoftball.png',
                    video: 'https://www.youtube.com/embed/wdqQmD874Fo',
                    description:
                        'Entrenamiento total body con intensidad alta enfocado en glúteo y fuerza abdominal.',
                    category: 'Total body',
                    complementaryMaterial: 'Sin material',
                    favorite: false,
                    duration: 10,
                    intensity: 'Alta',
                    comments: [],
                };
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        _id: '62c3fa970a6339f727766546',
                        title: 'ABDOMEN & GLÚTEOS con softball',
                        image: 'totalbodysoftball.png',
                        video: 'https://www.youtube.com/embed/wdqQmD874Fo',
                        description:
                            'Entrenamiento total body con intensidad alta enfocado en glúteo y fuerza abdominal.',
                        category: 'Total body',
                        complementaryMaterial: 'Sin material',
                        favorite: false,
                        duration: 10,
                        intensity: 'Alta',
                        comments: [],
                    }),
                });
                const result = await new HttpStoreWorkouts().setWorkout(
                    workout
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result._id).toBe('62c3fa970a6339f727766546');
            });
        });
    });
});
