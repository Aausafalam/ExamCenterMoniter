import React from 'react'
import "./Overview.css"
import { overviewContainerData } from './OverviewData'



const OverViewBody = ({color,icon,title,value}) => {
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
         <h2>{value}</h2>
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