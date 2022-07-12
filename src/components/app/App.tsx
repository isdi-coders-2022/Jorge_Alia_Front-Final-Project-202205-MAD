import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../../core/layout';
import { aMenuItems } from '../../models/menu.model';
import { loadUsersAction } from '../../redurcers/user.reducer/user.action.creators';
import { loadWorkoutsAction } from '../../redurcers/workout.reducer/workout.action.creators';

import { HttpStoreWorkouts } from '../../services/repository.workouts';
import './App.css';

function App() {
    const dispatcher = useDispatch();
    const apiWorkout = useMemo(() => new HttpStoreWorkouts(), []);

    useEffect(() => {
        apiWorkout
            .getWorkouts()
            .then((workouts) => dispatcher(loadWorkoutsAction(workouts)));
        const user = localStorage.getItem('loginUser');
        if (user) {
            dispatcher(loadUsersAction(JSON.parse(user)));
        }
    }, [apiWorkout, dispatcher]);

    const HomePage = React.lazy(() => import('../../pages/homePage'));
    const DetailsPage = React.lazy(() => import('../../pages/detailsPage'));
    const WorkoutsPage = React.lazy(() => import('../../pages/workoutsPage'));
    const MySelectionPage = React.lazy(
        () => import('../../pages/mySelectionPage')
    );
    const AboutMePage = React.lazy(() => import('../../pages/aboutMePage'));
    const ContactPage = React.lazy(() => import('../../pages/contactPage'));
    const LoginPage = React.lazy(() => import('../../pages/loginPage'));

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
        {
            path: 'mis selecciones',
            label: 'mis selecciones',
            page: <MySelectionPage />,
            title: 'Mis selecciones',
        },
        {
            path: 'sobre mí',
            label: 'sobre mí',
            page: <AboutMePage />,
            title: 'Sobre mí',
        },
        {
            path: 'contacto',
            label: 'contacto',
            page: <ContactPage />,
            title: 'Contacto',
        },
        {
            path: 'Login',
            label: 'Login',
            page: <LoginPage />,
            title: 'Login',
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
