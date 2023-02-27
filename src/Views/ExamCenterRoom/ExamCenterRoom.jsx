import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useUserContext } from '../../ApiIntegration/LoginContext'
import IndividualExamCenterRoom from '../../Components/IndividualExamCenterRoom/IndividualExamCenterRoom'
import Navbar from '../../Components/Navbar/Navbar'
import "./ExamCenterRoom.css"
const ExamCenterRoom = ({navigationData}) => {
    const {name,id} = useParams()
    const {getIpList,getTotalMaliciousCount,getTotalActiveCount,getTotalInActiveCount} = useUserContext()

   useEffect(()=>{
    getIpList()
    getTotalMaliciousCount()
    getTotalActiveCount()
    getTotalInActiveCount()
   },[])




  return (<div className="exam_center_room_page_main_container">
        <Navbar/>
         <IndividualExamCenterRoom id={id} name={name} navigationData={navigationData}/>
  </div>
  )
}

export default ExamCenterRoom