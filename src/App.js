import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Views/Login/Login';
import Home from './Views/Home/Home';
import ExamCenterLogin from './Views/ExamCenterLogin/ExamCenterLogin';
import ExamCenterMain from './Views/ExamCenterMain/ExamCenterMain';
import ExamCenterRoom from './Views/ExamCenterRoom/ExamCenterRoom';
import { useState } from 'react';
import IpDetails from './Views/IpDetails/IpDetails';

function App() {

   const [navigationData,setNavigationData] = useState([])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home setNavigationData={setNavigationData} />}/>
        <Route path="/examcenterlogin" element={<ExamCenterLogin navigationData={navigationData} setNavigationData={setNavigationData}/>}/>
        <Route path="/examcenter/:name" element={<ExamCenterMain navigationData={navigationData} setNavigationData={setNavigationData}/>}/>
        <Route path="/examcenter/:name/:id" element={<ExamCenterRoom navigationData={navigationData} setNavigationData={setNavigationData}/>}/>
        <Route path="/examcenter/:name/:id/:pc" element={<IpDetails/>}/>
        </Routes> 
    </div>
  );
}

export default App;
