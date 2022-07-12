import { iUser } from '../models/user.model';
import { HttpStoreUser } from './repository.users';

describe('Given HttpStoreUser', () => {
    const mockUser: iUser = {
        _id: 'dj87dj4nsl8sd',
        name: 'sergio',
        email: 'sergio@gmail.com',
        passwd: '12345',
        workouts: [],
        done: [],
        rol: 'user',
    };
    describe('When we instantiate', () => {
        describe('And we use method getUsers', () => {
            test('Result.length to be 2', async () => {
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
                const result = await new HttpStoreUser().getUsers();
                expect(fetch).toBeCalled();
                expect(result.length).toBe(2);
            });
        });
        describe('And we use method getWorkout', () => {
            test('Then it should result.id to be dj87dj4nsl8sd', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({ ...mockUser }),
                });
                const result = await new HttpStoreUser().getUser(mockUser);
                expect(fetch).toBeCalled();
                expect(result._id).toBe('dj87dj4nsl8sd');
            });
        });
        describe('And we use method registerUser', () => {
            test('Then it should result to Equal to new User', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({ ...mockUser }),
                });
                const result = await new HttpStoreUser().registerUser(mockUser);
                expect(fetch).toBeCalled();
                expect(result).toEqual(mockUser);
            });
        });
        describe('And we use method loginUser', () => {
            test('Then it should result to Equal to login User', async () => {
                const mockLoginUser = {
                    email: 'sergio@gmail.com',
                    passwd: '12345',
                };
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({ ...mockLoginUser }),
                });
                const result = await new HttpStoreUser().loginUser(
                    mockLoginUser
                );
                expect(fetch).toBeCalled();
                expect(result).toEqual(mockLoginUser);
            });
        });
        describe('And we use method addToFavorites', () => {
            test('Then it should result to equal to mockUser with the favorite workout', async () => {
                const mockWorkoutForFavorite = {
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
                    favorite: false,
                };

                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        ...mockUser,
                        workouts: [mockWorkoutForFavorite],
                    }),
                });
                const result = await new HttpStoreUser().addToFavorites(
                    mockWorkoutForFavorite._id
                );
                expect(fetch).toBeCalled();
                expect(result).toEqual({
                    ...mockUser,
                    workouts: [mockWorkoutForFavorite],
                });
            });
        });
        describe('And we use method deleteFavorites', () => {
            test('Then it should result.workouts to be 0', async () => {
                const mockUserForDeleteWorkout: iUser = {
                    _id: 'dj87dj4nsl8sd',
                    name: 'sergio',
                    email: 'sergio@gmail.com',
                    passwd: '12345',
                    workouts: [
                        {
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
                            favorite: false,
                        },
                    ],
                    done: [],
                    rol: 'user',
                };

                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        ...mockUserForDeleteWorkout,
                        workouts: [],
                    }),
                });
                const result = await new HttpStoreUser().deleteFavorites(
                    mockUserForDeleteWorkout.workouts[0]._id as string
                );
                expect(fetch).toBeCalled();
                expect(result.workouts).toHaveLength(0);
            });
        });
        describe('And we use method addToDone', () => {
            test('Then it should result to equal to mockUser with the done workout', async () => {
                const mockWorkoutForFavorite = {
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
                    favorite: false,
                };

                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        ...mockUser,
                        done: [mockWorkoutForFavorite],
                    }),
                });
                const result = await new HttpStoreUser().addToDone(
                    mockWorkoutForFavorite._id
                );
                expect(fetch).toBeCalled();
                expect(result).toEqual({
                    ...mockUser,
                    done: [mockWorkoutForFavorite],
                });
            });
        });
        describe('And we use method deleteFromDone', () => {
            test('Then it should result.done to be 0', async () => {
                const mockUserForDeleteDone: iUser = {
                    _id: 'dj87dj4nsl8sd',
                    name: 'sergio',
                    email: 'sergio@gmail.com',
                    passwd: '12345',
                    workouts: [],
                    done: [
                        {
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
                            favorite: false,
                        },
                    ],
                    rol: 'user',
                };

                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        ...mockUserForDeleteDone,
                        done: [],
                    }),
                });
                const result = await new HttpStoreUser().deleteFromDone(
                    mockUserForDeleteDone.done[0]._id as string
                );
                expect(fetch).toBeCalled();
                expect(result.done).toHaveLength(0);
            });
        });
        describe('And we use method updateUser', () => {
            test('should first', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue({ ...mockUser, name: 'test' }),
                });
                const result = await new HttpStoreUser().updateUser({
                    ...mockUser,
                    name: 'test',
                });
                expect(fetch).toBeCalled();
                expect(result).toEqual({ ...mockUser, name: 'test' });
            });
        });
        describe('And we use method deleteUser', () => {
            test('should first', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({}),
                });
                const result = await new HttpStoreUser().deleteUser(
                    mockUser._id as string
                );
                console.log(result, 'ESTOY AQUIIIIII');
                expect(fetch).toBeCalled();
                expect(result).toEqual({});
            });
        });
    });
});
