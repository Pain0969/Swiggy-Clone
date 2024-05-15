import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import ErrorPage from './components/ErrorPage';
import RestaurantMenu from './components/RestaurantMenu';
import LoginPage from './components/LoginPage';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={appStore}>
      <div className='h-100vh w-100vw'>
        <Navbar></Navbar>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
      path:"/",
      errorElement:<ErrorPage/>,
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Body/>,
          
        },
        {
          path:"/About",
          element:<About/>
        },
        {
          path:"/ContactUs",
          element:<ContactUs/>
        },
        {
          path:"/restaurants/:resId",
          element:<RestaurantMenu/>,
        },
        {
          path:"/LoginPage",
          element:<LoginPage/>,
        },
        {
          path:"/cart",
          element:<Cart/>,
        },
      ]
  },
  
])
export default App;
