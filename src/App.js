import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { useEffect } from 'react';
import $ from 'jquery';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
const router = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {path:'',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<div className='vh-100 d-flex justify-content-center align-items-center bg-info'>Error 4 0 4</div>},
  ]}
]);

function App() {
  useEffect(function(){

  console.log('hello');


  },[])
  return <>
    <RouterProvider router={router}/>
  </>
}

export default App;
