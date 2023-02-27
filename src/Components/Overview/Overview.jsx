import React from 'react'
import { useEffect } from 'react'
import { useUserContext } from '../../ApiIntegration/LoginContext'
import "./Overview.css"
import { overviewContainerData } from './OverviewData'



const OverViewBody = ({color,icon,title,value}) => {

    const {totalMalicious,totalActive,totalInActive} = useUserContext()


    return <div  className="overview_body_comp_contianer">
        <div style={{
          background:color
        }} className="overview_body_comp_logo">
          {icon}
        </div>
        <div className="overview_body_comp_title">
         <h3>{title}</h3>
        </div>
        <div className="overview_body_comp_value">
         <h2>
          {
            title== "Total Malicious Students" ? totalMalicious>9 ? totalMalicious:"0"+totalMalicious : title=="Total Active Students" ?  (totalActive>9)?totalActive:"0"+totalActive :
            title=="Total Inactive Students"?totalInActive: title == "Highest Malicious Examination Center"? (totalMalicious>0)? "EC1" : "No" :value
          }
          
          
          </h2>
        </div>
    </div>
}


export const HeadLine = ({value}) =>{
    return  <div className="overview_comp_header">
    <h1>{value}</h1>
    <div className="header_border">
       
    </div>
  </div>
} 

const Overview = () => {

 

  const {getTotalMaliciousCount,getTotalActiveCount,getTotalInActiveCount} = useUserContext()

 useEffect(()=>{
 setInterval(() => {
  getTotalMaliciousCount()
  getTotalActiveCount()
  getTotalInActiveCount()
 }, 1000);
 },[])

  return (<div className="overview_comp_main_container">
         <HeadLine value="Overview" />
       <div className="overview_item_list">
          {
            overviewContainerData.map((data, index) =>{
                return <OverViewBody color={data.color} title={data.title} value= {data.value} icon = {data.icon}/>
            })
          }

       </div>
  </div>
  )
}

export default Overview