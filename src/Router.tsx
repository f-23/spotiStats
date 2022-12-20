import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home';
import { ConnectCallback } from './routes/ConnectCallback';
import { DashboardSong } from './routes/DashboardSong';
import { DashboardArtist } from './routes/DashboardArtist';

export function Router(): React.ReactElement {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/connect/callback',
      element: <ConnectCallback />,
    },
    {
      path: '/dashboard',
      element: <DashboardSong />,
    },
    {
      path: '/dashboard/artist',
      element: <DashboardArtist />,
    },
  ]);

  return <RouterProvider router={router} />;
}
