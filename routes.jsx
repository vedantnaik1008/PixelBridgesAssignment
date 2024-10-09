import Error from './src/Pages/Error';
import Discover from './src/Pages/Discover';
import Layout from './src/Pages/Layout';

export const routes = [
    {
        path: '/',
        element: <Layout />
    },
    {
        path: '/discover/:id',
        element: <Discover />
    },
    {
        path: '*',
        element: <Error />
    }
];
