import React from 'react'
import ExamCenterList from '../../Components/ExamCenterList/ExamCenterList'
import Navbar from '../../Components/Navbar/Navbar'
import Overview from '../../Components/Overview/Overview'
import "./Home.css"
const Home = () => {
  return (<div className="overview_page_main_container">
       <Navbar/>
       <Overview/>
       <ExamCenterList/>
  </div>
  )
}

export default Home