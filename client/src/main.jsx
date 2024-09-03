import React,{lazy,Suspense,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Error from './Components/Error';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import useFindToken from './CustomHooks/useFindToken.js';
import store from './Redux/store/store.js';
import { Provider } from 'react-redux';
import {authInfoSetter} from './Redux/slice/AuthSlice.js';
import { useAppDispatch} from './Redux/hooks/useReduxHelperHooks.js';
// import HomePage from './Components/Home_Page/Home_Page';
// import LoginPage from './Components/Login_Page/LoginPage.jsx';
// import SignupPage from './Components/Signup_page/SignupPage.jsx';
// import GamePage from './Components/Game_Page/GamePage';
// import WelcomePage from './Components/WelcomePage.jsx';

const HomePage = lazy(()=>import("./Components/Home_Page/Home_Page"))
const LoginPage = lazy(()=>import("./Components/Login_Page/LoginPage.jsx"))
const SignupPage = lazy(()=>import("./Components/Signup_page/SignupPage.jsx"))
const WelcomePage = lazy(()=>import("./Components/WelcomePage.jsx"))
const GamePage = lazy(()=>import("./Components/Game_Page/GamePage.jsx"))
const UsersPage=lazy(()=>import("./Components/Users/UsersPage.jsx"))


// destructure data from customHook (which should contain setToken also so that we can
//change the value of setToken on loginRightPage )
// put in value={} of contextProvider
// then use those values any where in application

function Root() {
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
  const {userData, setUserData} = useFindToken();

  const dispatch=useAppDispatch()
  dispatch(authInfoSetter({...userData,setUserData}));
  return (
<RouterProvider router={appRouter} />
  ); 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
    <Root/>
</Provider>
  </React.StrictMode>,
)
