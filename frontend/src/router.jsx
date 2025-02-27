import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import MealPlans from './pages/MealPlans';
import Nutrition from './pages/Nutrition';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'meal-plans',
        element: <MealPlans />
      },
      {
        path: 'nutrition',
        element: <Nutrition />
      }
    ]
  }
]);