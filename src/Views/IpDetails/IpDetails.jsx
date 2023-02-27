import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useUserContext } from '../../ApiIntegration/LoginContext'
import IndividualIp from '../../Components/Individual Ip/IndividualIp'
import { Navigation } from '../../Components/IndividualExamCenterRoom/IndividualExamCenterRoom'
import Navbar from '../../Components/Navbar/Navbar'
import "./IpDetails.css"
const IpDetails = () => {

  const {getPerticularIpConnection} = useUserContext()
    const {name,id,pc}= useParams()
    
    useEffect(()=>{
     setInterval(()=>{
      if(localStorage.getItem("ipDetails"))
      {
        let data = JSON.parse(localStorage.getItem("ipDetails"));
        getPerticularIpConnection(data.ip,data.status)

      }
     },1000)
    },[])



  return (<div className="ip_details_page_main_container">

       <Navbar/>

       <IndividualIp name={name} id={id} pc={pc} />       
       
  </div>
  )
}

export default IpDetails