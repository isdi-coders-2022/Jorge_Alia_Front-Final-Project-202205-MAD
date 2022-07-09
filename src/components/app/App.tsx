import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../../core/layout';
import { aMenuItems } from '../../models/menu.model';
// import { loadWorkoutsAction } from '../../reducers/action.creators';
// import { HttpStoreWorkouts } from '../../services/store.workouts';
import './App.css';

function App() {
    // const dispatcher = useDispatch();
    // const apiWorkout = useMemo(() => new HttpStoreWorkouts(), []);

    // useEffect(() => {
    //     apiWorkout
    //         .getWorkouts()
    //         .then((workouts) => dispatcher(loadWorkoutsAction(workouts)));
    // }, [apiWorkout, dispatcher]);

    const HomePage = React.lazy(() => import('../../pages/homePage'));

    const options: aMenuItems = [
        { path: 'home', label: '', page: <HomePage /> },
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
