import React from 'react';
import Home from './components/Home';
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import MovieDetail from './MovieDetail/MovieDetail.js';
import Layout from './components/Layout.js';
import Footer from './components/Footer/Footer.js'
import './App.css';

const router=createBrowserRouter(createRoutesFromElements(

<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}></Route>
<Route path="/movie/:imdbID" element={<MovieDetail/>}></Route>
<Route path="*" element={<PageNotFound/>}></Route>
</Route>

));

function App() {
  return (
    <div id="root">
    <div className="main-content">
        <RouterProvider router={router}></RouterProvider>
    </div>
    <Footer />
</div>
  );
}

export default App;
