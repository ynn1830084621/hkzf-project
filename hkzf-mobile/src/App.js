import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CityList from './pages/CityList';
import Life from './pages/Life';
import Index from './pages/Index';
import HouseList from './pages/HouseList';
import Profile from './pages/Profile';
import Collect from './pages/Collect';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Login from './pages/Login';
import AddComment from './pages/AddComment';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Login/>} />
                <Route path='/home' element={<Home/>}>
                    <Route path='index' element={<Index/>}/>
                    <Route path='houselist' element={<HouseList/>}/>
                    <Route path='life' element={<Life/>}/>
                    <Route path='profile' element={<Profile/>}/>
                </Route>
                <Route path='/citylist' element={<CityList/>} />
                <Route path='/collect' element={<Collect/>} />
                <Route path='/detail' element={<Detail/>} />
                <Route path='/search' element={<Search/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/addcomment' element={<AddComment/>} />
            </Routes>
        </Router>
    )
}
export default App