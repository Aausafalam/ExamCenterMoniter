import React from 'react'
import { useNavigate } from 'react-router'
import { useUserContext } from '../../ApiIntegration/LoginContext'
import { HeadLine } from '../Overview/Overview'
import "./ExamCenterList.css"
import { ExamCenterListData } from './ExamCenterListData'

const ExamCenterContainer = ({data}) => {
  const {totalActive,totalMalicious} = useUserContext()
  const navigate= useNavigate()
    return <div  className="exam_center_box_container">
      <div className="exam_center_box_header">
       <h2>{data.examCenter}</h2>
      </div>
      <div className="exam_center_exam_date">
        <p>Exam Date : {data.examDate}</p>
      </div>
      <div className="total_active_student_div">
        <p>Total Active Students</p>
        <h3>{totalActive<10?"0"+totalActive:totalActive}</h3>
      </div>
      <div className="total_malecious_student_div">
        <p>Total Malecious Students</p>
        <h3>{totalMalicious<10?"0"+totalMalicious:totalMalicious}</h3>
      </div>
      <div className="view_details">
        <button onClick={()=>{
       navigate(`/examcenter/${data.examCenter}`)
    }} >view details</button>
      </div>
    </div>
}



const ExamCenterList = () => {
  return (<div className="exam_center_comp_main_container">
     
         <HeadLine  value="Examination Center"/>
     
      <div className="exam_center_comp_list">
          {
            ExamCenterListData.map((data,index)=>{
                return <ExamCenterContainer  data={data}/>
            })
          }
        


      </div>
  </div>
  )
}

export default ExamCenterList