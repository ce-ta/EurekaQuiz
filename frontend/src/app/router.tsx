import { createBrowserRouter } from 'react-router-dom';
import { UnchikuCreatePage } from '@/features/unchiku';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UnchikuCreatePage />,
  },
  {
    path: '/trivia/new',
    element: <UnchikuCreatePage />,
  },
]);