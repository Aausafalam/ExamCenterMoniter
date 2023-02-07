import React from 'react'
import { useParams } from 'react-router'
import IndividualIp from '../../Components/Individual Ip/IndividualIp'
import { Navigation } from '../../Components/IndividualExamCenterRoom/IndividualExamCenterRoom'
import Navbar from '../../Components/Navbar/Navbar'
import "./IpDetails.css"
const IpDetails = () => {
    const {name,id,pc}= useParams()
  return (<div className="ip_details_page_main_container">
       <Navbar/>
       <IndividualIp name={name} id={id} pc={pc} />       
  </div>
  )
}

export default IpDetails