import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CityList from './pages/CityList';
import Life from './pages/Life';
import Index from './pages/Index';
import HouseList from './pages/HouseList';
import Profile from './pages/Profile';
import Collect from './pages/Collect';
import Detail from './pages/Detail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Navigate to='/home'/>} />
                <Route path='/home' element={<Home/>}>
                    <Route path='' element={<Index/>}/>
                    <Route path='houselist' element={<HouseList/>}/>
                    <Route path='life' element={<Life/>}/>
                    <Route path='profile' element={<Profile/>}/>
                </Route>
                <Route path='/citylist' element={<CityList/>} />
                <Route path='/collect' element={<Collect/>} />
                <Route path='/detail/:id' element={<Detail/>} />
            </Routes>
        </Router>
        // <div>根组件<Button>按钮</Button> </div>
    )
}
export default App