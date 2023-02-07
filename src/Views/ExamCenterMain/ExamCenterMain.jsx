import React from 'react'
import { useParams } from 'react-router'
import IndividualExamCenter from '../../Components/IndividualExamCenter/IndividualExamCenter'
import Navbar from '../../Components/Navbar/Navbar'
import "./ExamCenterMain.css"
const ExamCenterMain = ({navigationData,setNavigationData}) => {
    const {name} = useParams()
  return (<div className="exam_center_main_page_container">
        <Navbar/>
        <IndividualExamCenter name={name} setNavigationData={setNavigationData}/>
  </div>
  )
}

export default ExamCenterMain