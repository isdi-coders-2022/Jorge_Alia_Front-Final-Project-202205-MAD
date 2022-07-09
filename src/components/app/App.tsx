import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../../core/layout';
import { aMenuItems } from '../../models/menu.model';
import { loadWorkoutsAction } from '../../redurcers/workout.reducer/workout.action.creators';

import { HttpStoreWorkouts } from '../../services/store.workouts';
import './App.css';

function App() {
    const dispatcher = useDispatch();
    const apiWorkout = useMemo(() => new HttpStoreWorkouts(), []);

    useEffect(() => {
        apiWorkout
            .getWorkouts()
            .then((workouts) => dispatcher(loadWorkoutsAction(workouts)));
    }, [apiWorkout, dispatcher]);

    const HomePage = React.lazy(() => import('../../pages/homePage'));
    const DetailsPage = React.lazy(() => import('../../pages/detailsPage'));
    const WorkoutsPage = React.lazy(() => import('../../pages/workoutsPage'));

    const options: aMenuItems = [
        { path: '', label: '', page: <HomePage /> },
        {
            path: 'details/:id',
            label: '',
            page: <DetailsPage />,
            title: '',
        },
        {
            path: 'workouts',
            label: 'workouts',
            page: <WorkoutsPage />,
            title: 'workouts',
        },
    ];

    return (
        <Router>
            <Layout options={options}>
                <React.Suspense>
                    <React.StrictMode>
                        <Routes>
                            {options.map((item) => (
                                <Route
                                    key={item.label}
                                    path={item.path}
                                    element={item.page}
                                ></Route>
                            ))}
                        </Routes>
                    </React.StrictMode>
                </React.Suspense>
            </Layout>
        </Router>
    );
}

export default App;
