import { HttpStoreWorkouts } from './repository.workouts';

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
    });
});
