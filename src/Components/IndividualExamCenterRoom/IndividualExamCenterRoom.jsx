import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { NavigationIcon, PCIcon, PCIcons } from '../../SVG/ExamCenterRoom'
import { HeadLine } from '../Overview/Overview'
import "./IndividualExamCenterRoom.css"
import { IndividualRoomData } from './IndividualExamCenterRoomData'

const Navigation = ({data,name,id}) => {
    const navigate= useNavigate()
    return <div className="navigation_br">
      <div className="navigation_inner_container">
       {
     <>
            <h3 onClick={()=>{
                 navigate(`/examcenter/${name}`)
            }}>{id}</h3> 
        
      </>
    
       }
      </div>
    </div>
}

const IndividualPcBox = ({data,name,id}) =>{
    const navigate = useNavigate()
    return <div className="individual_pc_main_container">
          <div className="individual_pc_heading">
                {PCIcons(data.status.toLowerCase() == "malicious" ? "#DA4D4D" : "#353535")}
                <h2 style={{color:data.status.toLowerCase() == "malicious" ? "#DA4D4D" : "",
            textTransform:"capitalize"}}>{data?.name}</h2>
                <button className={data.status.toLowerCase() == "active" ?'active_button' :data.status.toLowerCase() == "inactive" ? "inactive_button" :"malicious_button" }>{data?.status}</button>
          </div>
          <div className="individual_pc_body">
            <h4>IP Address : <span>{data?.ip}</span></h4>
            <button onClick={()=>{
                navigate(`/examcenter/${name}/${id}/${data?.name}`)
            }}>view ip details</button>
          </div>
    </div>
}

const IndividualExamCenterRoom = ({navigationData,name,id}) => {

   const [roomData,setRoomData] = useState()
    

   const handleRoomData = (roomData) =>
   {
      let newData = []
      roomData.forEach((data)=>{
           if(data?.status?.toLowerCase() == "malicious")
           {
            newData.push(data)
           }
      })
      roomData.forEach((data)=>{
        if(data?.status?.toLowerCase() != "malicious")
        {
         newData.push(data)
        }

        setRoomData(newData)
   })
      
   }

   useEffect(()=>{
       handleRoomData(IndividualRoomData)
   },[])


    const data = [{
        name:"GF1"
    }]
  return (<div className="individual_exam_center_room_com_main_container">
          <div  className="header_exam_center">  <HeadLine value="Examination Center 1"/> </div>  
     <Navigation id={id} name={name} data={navigationData}/>
     <div className="individual_room_pc_list">
       {
        roomData?.map((data)=>{
            return <IndividualPcBox id={id} name={name}data={data}/>
        })
       }
     </div>
  </div>
  )
}

export default IndividualExamCenterRoom