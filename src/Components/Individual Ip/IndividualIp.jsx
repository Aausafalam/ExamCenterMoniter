import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { NavigationIcon, PCIcons } from '../../SVG/ExamCenterRoom'
import { IndividualRoomData } from '../IndividualExamCenterRoom/IndividualExamCenterRoomData'
import StudentGraph from '../StudentGraph/StudentGraph'
import "./IndividualIp.css"
import pcIcon from "../../Accets/Group 118.png"
const Navigation = ({name,id,pc}) => {
    const navigate= useNavigate()
    return <div className="navigation_br">
      <div className="navigation_inner_container">
       {
     <>
            <h3 style={{
                textTransform:'uppercase'
              }} onClick={()=>{
                 navigate(`/examcenter/${name}`)
            }}>{id}</h3> 
            {NavigationIcon}
              <h3 style={{
                textTransform:'uppercase'
              }} onClick={()=>{
                 navigate(`/examcenter/${name}/${id}`)
            }}>{pc}</h3> 
        
      </>
    
       }
      </div>
    </div>
}

const IndividualIp = ({name,id,pc,data={
    name:"pc 1",status:"active"}}) => {
        const [lengthCytoscape,setLengthCytoscape] = useState(false)
    const [IpData,setIpData] = useState({})
     const [graphData,setGraphData] = useState({})
    useEffect(()=>{
        const IpDatas = IndividualRoomData.find((data) =>{
            return data?.name?.toLowerCase() === pc?.toLowerCase()
         })
         setIpData(IpDatas)
         const Data = {
            Ip:IpDatas?.ip,
            room:"",
            center:"",
            connected:IpDatas?.connected
         }
         setGraphData(Data)
        
    },[])

   

  return (<div className="individula_ip_comp_main_container">
         <Navigation name={name} id={id} pc={pc}/>
         <div className="ip_details_main_contianer">
            <div  style={{
                 display : lengthCytoscape?"none" : "",
                visibility:lengthCytoscape?"hidden":"",
                width:lengthCytoscape ? "0" : ""
            }} className="ip_text_info_box">
            <div className="individual_ip_heading">
                {PCIcons(IpData?.status?.toLowerCase() == "malicious" ? "#DA4D4D" : "#353535")}
                <h2 style={{color:IpData?.status?.toLowerCase() == "malicious" ? "#DA4D4D" : "",
            textTransform:"capitalize"}}>{pc}</h2>
                <button className={IpData?.status?.toLowerCase() == "active" ?'active_button' :IpData?.status?.toLowerCase() == "inactive" ? "inactive_button" :"malicious_button" }>{IpData?.status}</button>
          </div>
          <div className="main_ip_address">
            <h2>Main IP Address</h2>
            <h4>{IpData?.ip}</h4>
          </div>
          <div className="other_connection_ip_address">
             <h3>Other Connected IP Address </h3>
             <div className="list_of_other_connections">
                {
                    IpData?.connected?.length != 0 ? IpData?.connected?.map((data)=>{
                        return <div className="ip_list">
                            <p>{data?.ip}</p>
                        </div>
                    })
                    : <p>n/a</p>
                }
             </div>
          </div>
            </div>
            <div style={{
                    width: lengthCytoscape ? "100%":""
                }} className="ip_cytoscope_container">
                {
                    IpData?.status?.toLowerCase() == "malicious"?<StudentGraph studentGraphData = {graphData}/> : <div className="singleIp">
                        <img src={pcIcon} alt="" />
                    </div>
                }
                <div  onClick={()=>{
                   setLengthCytoscape(!lengthCytoscape)
                }} className="full_size_cytoscape">
                    {
                        lengthCytoscape?<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M9 9H0V12H12V0H9V9Z" fill="#353535"/>
                        <path d="M0 21H9V30H12V18H0V21Z" fill="#353535"/>
                        <path d="M18 30H21V21H30V18H18V30Z" fill="#353535"/>
                        <path d="M21 9V0H18V12H30V9H21Z" fill="#353535"/>
                        </svg>:
                    
                <svg  xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 30 30" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6666 26.6664H20V29.9999H30V19.9999H26.6666V26.6664ZM0 10H3.33344V3.33343H10V0H0V10ZM3.33344 20H0V30H10V26.6666H3.33344V20ZM30 0V10H26.6666V3.33343H20V0H30Z" fill="#353535"/>
</svg>
    }

                </div>
            </div>
         </div>
  </div>
  )
}

export default IndividualIp