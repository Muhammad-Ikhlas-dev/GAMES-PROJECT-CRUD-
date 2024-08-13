import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Error from './Components/Error';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './Components/Home_Page/Home_Page';
import LoginPage from './Components/Login_Page/LoginPage.jsx';
import SignupPage from './Components/Signup_page/SignupPage.jsx';
import GamePage from './Components/Game_Page/GamePage';
import WelcomePage from './Components/WelcomePage.jsx';

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>,
    errorElement:<Error/>
  },
  {
    path:'/login',
    element:<LoginPage/>,
  },
  {
    path:'/welcome',
    element:<WelcomePage/>
  },
  {
    path:'/signup',
    element:<SignupPage/>
  },
  {
    path:'/games',
    element:<GamePage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
