import React from 'react';
import Services from '../components/Services'

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Services /> },
      { path: '/services', element: <Services /> },
      // { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
