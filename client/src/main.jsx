import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Error from './Components/Error';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import HomePage from './Components/Home_Page/Home_Page';
// import LoginPage from './Components/Login_Page/LoginPage.jsx';
// import SignupPage from './Components/Signup_page/SignupPage.jsx';
// import GamePage from './Components/Game_Page/GamePage';
// import WelcomePage from './Components/WelcomePage.jsx';

const HomePage = lazy(()=>import("./Components/Home_Page/Home_Page"))
const LoginPage = lazy(()=>import("./Components/Login_Page/LoginPage.jsx"))
const SignupPage = lazy(()=>import("./Components/Signup_page/SignupPage.jsx"))
const WelcomePage = lazy(()=>import("./Components/WelcomePage.jsx"))
const GamePage = lazy(()=>import("./Components/Game_Page/GamePage"))
const UsersPage=lazy(()=>import("./Components/Users/UsersPage.jsx"))


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <HomePage />
      </Suspense>
    ),
    errorElement: <Error />
  },
  {
    path: '/login',
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/welcome',
    element: (
      <Suspense>
        <WelcomePage />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    element: (
      <Suspense>
        <SignupPage />
      </Suspense>
    ),
  },
  {
    path: '/games',
    element: (
      <Suspense fallback={"i am loading please wait"}>
        <GamePage />
      </Suspense>
    ),
  },
  {
    path: '/users',
    element: (
      <Suspense fallback={"i am loading please wait"}>
        <UsersPage />
      </Suspense>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
