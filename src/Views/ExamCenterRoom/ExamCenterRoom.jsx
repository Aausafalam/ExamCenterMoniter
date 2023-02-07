import React from 'react'
import { useParams } from 'react-router'
import IndividualExamCenterRoom from '../../Components/IndividualExamCenterRoom/IndividualExamCenterRoom'
import Navbar from '../../Components/Navbar/Navbar'
import "./ExamCenterRoom.css"
const ExamCenterRoom = ({navigationData}) => {
    const {name,id} = useParams()
  return (<div className="exam_center_room_page_main_container">
        <Navbar/>
         <IndividualExamCenterRoom id={id} name={name} navigationData={navigationData}/>
  </div>
  )
}

export default ExamCenterRoom