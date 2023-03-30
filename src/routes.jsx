import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/home';
import { List } from './pages/list';
import { Create } from './pages/create';

export const router = createBrowserRouter([
    {
        path: "",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <List />,
            },
            {
                path: "/add",
                element: <Create />,
            },
        ]
    },
])
