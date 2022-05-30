import React from 'react';
//import { Button } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import Home from './pages/Home';
import CityList from './pages/CityList';
import News from './pages/News';

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/home'>首页</Link></li>
                    <li><Link to='/citylist'>城市选择</Link></li>
                </ul>
            <Routes>
                <Route path='/home' exact element={<Home/>}>
                    <Route path='news' exact element={<News/>}/>
                </Route>
                <Route path='/citylist' exact element={<CityList/>} />
            </Routes>
            </div>
        </Router>
        // <div>根组件<Button>按钮</Button> </div>
    )
}
export default App