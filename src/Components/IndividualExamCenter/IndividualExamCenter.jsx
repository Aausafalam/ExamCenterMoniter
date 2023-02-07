import React from 'react'
import { useNavigate } from 'react-router'
import { HeadLine } from '../Overview/Overview'
import "./IndividualExamCenter.css"
import { IndividualExamData } from './IndividualExamCenterData'


const ClassContainer = ({name,setNavigationData,data}) => {
  const navigate= useNavigate()
  return <div className="class_comp_main_container">
       <div className="class_comp_heading">
        <h2>{data?.name?.toUpperCase()}</h2>
        <p>Exam Date : 23 Jan 2023</p>
       </div>
       <div className="class_comp_details">
        <p className="total_registered_student">Total Registered Students : {data?.totalRegiteredStudent}</p>
        <p className="total_active_student">
        Total Active Students : {data?.totalActiveStudent}
        </p>
        <p className="total_inactive_student">
        Total Inactive Students : {data?.totalInActiveStudent}
        </p>
        <p className="total_malicious_student">
        Total Malicious Students : {data?.totalMaliciousStudent}
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