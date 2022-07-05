import React from 'react';
//import { Button } from 'antd';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CityList from './pages/CityList';
import Life from './pages/Life';
import Index from './pages/Index';
import HouseList from './pages/HouseList';
import Profile from './pages/Profile';


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
            </Routes>
        </Router>
        // <div>根组件<Button>按钮</Button> </div>
    )
}
export default App