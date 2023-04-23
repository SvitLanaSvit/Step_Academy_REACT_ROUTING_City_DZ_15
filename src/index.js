import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import CityInfo from './components/CityInfo';
import FamousAttraction from './components/FamousAttraction';
import OtherAttractions from './components/OtherAttractions';
import CityPhoto from './components/CityPhoto';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/city-info",
        element: <CityInfo></CityInfo>
      },
      {
        path: "/famous-attraction",
        element: <FamousAttraction></FamousAttraction>
      },
      {
        path: "/other-attractions",
        element: <OtherAttractions></OtherAttractions>
      },
      {
        path: "/city-photo",
        element: <CityPhoto></CityPhoto>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
