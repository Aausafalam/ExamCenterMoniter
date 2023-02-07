import React, { useEffect, useState } from "react";
import "./StudentGraph.css";
import CytoscapeComponent from "react-cytoscapejs";
import pcIcon from "../../Accets/Group 118.png"
import pcIcon2 from "../../Accets/Group 129.png"


export default function StudentGraph({studentGraphData}) {
  const [width, setWith] = useState("100%");
  const [height, setHeight] = useState("60vh");
  const [graphData, setGraphData] = useState({
    nodes: [
          { data: { id: "1", label: "IP 1", type: "ip" } },
          { data: { id: "2", label: "Device 1", type: "device" } },
          { data: { id: "3", label: "IP 2", type: "ip" } },
          { data: { id: "4", label: "Device 2", type: "device" } },
          { data: { id: "5", label: "Device 3", type: "device" } },
          { data: { id: "6", label: "IP 3", type: "ip" } },
          { data: { id: "7", label: "Device 5", type: "device" } },
          { data: { id: "8", label: "Device 6", type: "device" } },
          { data: { id: "9", label: "Device 7", type: "device" } },
          { data: { id: "10", label: "Device 8", type: "device" } },
          { data: { id: "11", label: "Device 9", type: "device" } },
          { data: { id: "12", label: "IP 3", type: "ip" } },
          { data: { id: "13", label: "Device 10", type: "device" } },
          { data: { id: "14", label: "Device 11", type: "device" } },
          { data: { id: "15", label: "Device 12", type: "device" } },
          { data: { id: "16", label: "Device 13", type: "device" } },
          { data: { id: "17", label: "IP 4", type: "ip" } },
          { data: { id: "18", label: "IP 5", type: "ip" } },
          { data: { id: "19", label: "Device 14", type: "device" } },
          { data: { id: "20", label: "Device 15", type: "device" } },
          { data: { id: "21", label: "Device 16", type: "device" } },
          { data: { id: "22", label: "IP 6", type: "ip" } },
          { data: { id: "23", label: "Device 17", type: "device" } },
          { data: { id: "24", label: "Device 18", type: "device" } },
          { data: { id: "25", label: "Device 19", type: "device" } },
        ],
  edges: [
      {
          data: {
              source: "1",
              target: "2",
              label: "ip",
          }
      },
      {
          data: {
              source: "1",
              target: "3",
              label: "ip",
          }
      },
      {
          data: {
              source: "1",
              target: "4",
              label: "ip",
          }
      }
  ]
});



const getGraphData = async(data)=>{
  let nodes = []
  nodes.push({
    data:{
       id:(nodes.length+1).toString(),
       label: data?.Ip?.split(".")[data.Ip.split(".").length-1],
       type:"ip"
    }

  })
  data?.connected?.forEach((ele)=>{
    nodes.push({
      data:{
         id:(nodes.length+1).toString(),
         label: ele?.Ip?.split(".")[ele?.Ip?.split(".").length-1],
         type:"device"
      }
  
    })
  })


  let edges = []
 
  data?.connected?.forEach((ele,index)=>{
    edges.push({
      data:{
         source:"1",
         target: nodes[index+1].data.id.toString(),
         label: "6 -> 5"
      }
  
    })
  })
 await setGraphData({
  nodes :nodes,
  edges : edges
 })
 localStorage.setItem('graphData', JSON.stringify({
  nodes :nodes,
  edges : edges
 }))
  
}
// console.log(graphData)

useEffect(()=>{
   if(studentGraphData?.connected)
   {
    // console.log("function")
getGraphData(studentGraphData)

   }
   else if (localStorage.getItem("graphData"))
   {
    let data = JSON.parse(localStorage.getItem("graphData"))
//  console.log(data)
//  console.log("JDSO")
 setGraphData(data)

   }
 
},[])


// {
//   nodes: [
//     { data: { id: "1", label: "IP 1", type: "ip" } },
//     { data: { id: "2", label: "Device 1", type: "device" } },
//     { data: { id: "3", label: "IP 2", type: "ip" } },
//     { data: { id: "4", label: "Device 2", type: "device" } },
//     { data: { id: "5", label: "Device 3", type: "device" } },
//     { data: { id: "6", label: "IP 3", type: "ip" } },
//     { data: { id: "7", label: "Device 5", type: "device" } },
//     { data: { id: "8", label: "Device 6", type: "device" } },
//     { data: { id: "9", label: "Device 7", type: "device" } },
//     { data: { id: "10", label: "Device 8", type: "device" } },
//     { data: { id: "11", label: "Device 9", type: "device" } },
//     { data: { id: "12", label: "IP 3", type: "ip" } },
//     { data: { id: "13", label: "Device 10", type: "device" } },
//     { data: { id: "14", label: "Device 11", type: "device" } },
//     { data: { id: "15", label: "Device 12", type: "device" } },
//     { data: { id: "16", label: "Device 13", type: "device" } },
//     { data: { id: "17", label: "IP 4", type: "ip" } },
//     { data: { id: "18", label: "IP 5", type: "ip" } },
//     { data: { id: "19", label: "Device 14", type: "device" } },
//     { data: { id: "20", label: "Device 15", type: "device" } },
//     { data: { id: "21", label: "Device 16", type: "device" } },
//     { data: { id: "22", label: "IP 6", type: "ip" } },
//     { data: { id: "23", label: "Device 17", type: "device" } },
//     { data: { id: "24", label: "Device 18", type: "device" } },
//     { data: { id: "25", label: "Device 19", type: "device" } },
//   ],
//   edges: [
//     {
//       data: { source: "1", target: "2", label: "Node2" }
//     },
//     {
//       data: { source: "3", target: "4", label: "Node4" }
//     },
//     {
//       data: { source: "3", target: "5", label: "Node5" }
//     },
//     {
//       data: { source: "6", target: "5", label: " 6 -> 5" }
//     },
//     {
//       data: { source: "6", target: "7", label: " 6 -> 7" }
//     },
//     {
//       data: { source: "6", target: "8", label: " 6 -> 8" }
//     },
//     {
//       data: { source: "6", target: "9", label: " 6 -> 9" }
//     },
//     {
//       data: { source: "3", target: "13", label: " 3 -> 13" }
//     },
//     {
//       data: { source: "17", target: "16", label: " 17 -> 16" }
//     },
//     {
//       data: { source: "17", target: "15", label: " 17 -> 15" }
//     },
//     {
//       data: { source: "17", target: "14", label: " 17 -> 14" }
//     },
//     {
//       data: { source: "18", target: "19", label: " 18 -> 19" }
//     },
//     {
//       data: { source: "18", target: "20", label: " 18 -> 20" }
//     },
//     {
//       data: { source: "18", target: "21", label: " 18 -> 21" }
//     },
//     {
//       data: { source: "22", target: "23", label: " 18 -> 19" }
//     },
//     {
//       data: { source: "18", target: "24", label: " 18 -> 20" }
//     },
//     {
//       data: { source: "18", target: "25", label: " 18 -> 21" }
//     },
//     {
//       data: { source: "22", target: "24", label: " 18 -> 20" }
//     },
//     {
//       data: { source: "22", target: "25", label: " 18 -> 21" }
//     },

//   ]
// }




  const layout = {
    name: "breadthfirst",
    fit: true,
     circle: true,
     directed: true,
      padding: 50,
    marginLeft:-10,
     spacingFactor: 1.5,
    animate: true,
    animationDuration: 1000,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: true,
    width:1000
  };
  // console.log(studentGraphData)
  const styleSheet = [
    {
      selector: "node",
      style: {
        backgroundColor: "#194fc5",
        width: 30,
        height: 30,
        label: "data(label)",
          'background-image': `url(${pcIcon})`,
          'background-fit': 'contain',
          'background-clip': 'none',
          'background-width': '35px',
          'background-height': '35px',
          'border-width': '1px',
          'border-color': 'black',
          'border-style': 'solid',
          'width': '100px',
          'height': '100px',
           
        
        // "width": "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // "height": "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // "text-valign": "center",
        // "text-halign": "center",
        "overlay-padding": "6px",
        "z-index": "10",
        //text props
        "text-outline-color": "#4a56a6",
        "text-outline-width": "2px",
        color: "white",
        fontSize: 25
      }
    },
    {
      selector: "node:selected",
      style: {
        backgroundColor: "red",
        width: 30,
        height: 30,
        label: "data(label)",
          'background-image': `url(${pcIcon2})`,
          'background-fit': 'contain',
          'background-clip': 'none',
          'background-width': '35px',
          'background-height': '35px',
          'width': '100px',
          'height': '100px',
          border:"1px solid red",
           
        
        // "width": "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // "height": "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // "text-valign": "center",
        // "text-halign": "center",
        "overlay-padding": "6px",
        "z-index": "10",
        //text props
        "text-outline-color": "#4a56a6",
        "text-outline-width": "2px",
        color: "white",
        fontSize: 25
      }
    },
    {
      selector: "node[type='device']",
      style: {
        backgroundColor: "red",
        width: 30,
        height: 30,
        label: "data(label)",
          'background-image': `url(${pcIcon2})`,
          'background-fit': 'contain',
          'background-clip': 'none',
          'background-width': '35px',
          'background-height': '35px',
          'width': '75px',
          'height': '75px',
        
        // "width": "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // "height": "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // "text-valign": "center",
        // "text-halign": "center",
        "overlay-padding": "6px",
        "z-index": "10",
        //text props
        "text-outline-color": "#4a56a6",
        "text-outline-width": "2px",
        color: "white",
        fontSize: 25
      }
    },
    {
      selector: "edge",
      style: {
        width: 4,
        // "line-color": "#6774cb",
        "line-color": "red",
        "target-arrow-color": "red",
        "target-arrow-shape": "circle",
        "curve-style": "bezier"
      }
    }
  ];

  let myCyRef;

  return (
    <div  style={{
      // border: "1px solid",
     
      height: "100vh",
      width: "100%",
      color:"white"
    }}
    className="student_graph_main_container">
       
        

        <div
          style={{
            // border: "1px solid",
         
            height: "100%",
            width: "100%",
          
          }}
        >
          <CytoscapeComponent
            elements={CytoscapeComponent.normalizeElements(graphData)}
            //  pan={{ x: "100%", y: "100%" }}
             style={{ width: width, height: height ,
            marginTop:"7rem"}}
             zoomingEnabled={true}
           maxZoom={3}
            minZoom={0.1}
             autounselectify={true}
            boxSelectionEnabled={false}  
            layout={layout}
             stylesheet={styleSheet}
            cy={cy => {
              myCyRef = cy;

              console.log("EVT", cy);

              cy.on("tap", "node", evt => {
                var node = evt.target;
                // console.log("EVT", evt);
                // console.log("TARGET", node.data());
                // console.log("TARGET TYPE", typeof node[0]);
              });
            }}
            abc={console.log("myCyRef", myCyRef)}
          />
        </div>
      
    </div>
  );
}
