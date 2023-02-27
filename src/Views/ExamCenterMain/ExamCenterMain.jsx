import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useUserContext } from '../../ApiIntegration/LoginContext'
import IndividualExamCenter from '../../Components/IndividualExamCenter/IndividualExamCenter'
import Navbar from '../../Components/Navbar/Navbar'
import "./ExamCenterMain.css"
const ExamCenterMain = ({navigationData,setNavigationData}) => {
    const {name} = useParams()
   const {getTotalMaliciousCount,getTotalActiveCount,getTotalInActiveCount} = useUserContext()
    useEffect(()=>{
      getTotalMaliciousCount()
      getTotalActiveCount()
      getTotalInActiveCount()
    },[])
  return (<div className="exam_center_main_page_container">
        <Navbar/>
        <IndividualExamCenter name={name} setNavigationData={setNavigationData}/>
  </div>
  )
}

export default ExamCenterMain