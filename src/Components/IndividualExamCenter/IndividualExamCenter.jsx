import React from 'react'
import { useNavigate } from 'react-router'
import { useUserContext } from '../../ApiIntegration/LoginContext'
import { HeadLine } from '../Overview/Overview'
import "./IndividualExamCenter.css"
import { IndividualExamData } from './IndividualExamCenterData'


const ClassContainer = ({name,setNavigationData,data}) => {
  const {totalActive,totalMalicious,totalInActive} = useUserContext()
  const navigate= useNavigate()
  let totalRegiteredStudent = totalActive+totalInActive
  return <div className="class_comp_main_container">
       <div className="class_comp_heading">
        <h2>{data?.name?.toUpperCase()}</h2>
        <p>Exam Date : {data?.examDate}</p>
       </div>
       <div className="class_comp_details">
        <p className="total_registered_student">Total Registered Students : {totalRegiteredStudent<10?"0"+totalRegiteredStudent:totalRegiteredStudent}</p>
        <p className="total_active_student">
        Total Active Students : {totalActive<10?"0"+totalActive:totalActive}
        </p>
        <p className="total_inactive_student">
        Total Inactive Students : {totalInActive<10?"0"+totalInActive:totalInActive}
        </p>
        <p className="total_malicious_student">
        Total Malicious Students : {totalMalicious<10?"0"+totalMalicious:totalMalicious}
        </p>
       </div>
       <div className="class_comp_view_details">
        <button onClick={()=>{
          setNavigationData([{
            name:data?.name?.toUpperCase()
          }])
           navigate(`/examcenter/${name}/${data?.name?.toUpperCase()}`)
        }}>view details</button>
       </div>
  </div>
}




const IndividualExamCenter = ({setNavigationData,name}) => {

  return (<div className="individual_exam_center_comp_main_container">
     <div  className="header_exam_center">  <HeadLine value="Examination Center 1"/> </div>
       <div className="individual_exam_center_class_list">
         {
          IndividualExamData.map((individual)=>{
            return  <ClassContainer name={name} data={individual} setNavigationData={setNavigationData}/>
          })
         }

       </div>
  </div>
  )
}

export default IndividualExamCenter