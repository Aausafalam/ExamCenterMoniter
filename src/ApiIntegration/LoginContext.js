import axios from "axios";
import { createContext, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../env";
const UserContext =  createContext()
 
export function useUserContext ()
{
    return useContext(UserContext)
}








export function UserProvider({children})
{
  const [totalActiveUsersList, setTotalActiveUserList] = useState([]) 
  const [totalMaliciousUsersList, setTotalMaliciousUserList] = useState([]) 
  const [totalInactiveUsersList, setTotalInactiveUserList] = useState([]) 
  
   const [totalMalicious,setTotalMalicious] = useState(0)
   const [totalMaliciousError,setTotalMaliciousError] = useState({})
   const [totalActive,setTotalActive] = useState(0)
   const [totalActiveError,setTotalActiveError] = useState({})
  
   const [totalInActive,setTotalInActive] = useState(0)
   const [totalInActiveError,setTotalInActiveError] = useState({})
   const [listOfIp,setListOfIp] = useState([])
   const [perticularIpConnection,setperticularIpConnection] = useState([])




 const getTotalMaliciousCount = () => {

     axios.get(`${BASE_URL}/api/count/candidate?ec=iitk&lios=iitk_lios_1&verdict=malicious`)
     .then((response) =>{
        console.log(response.data)
        setTotalMaliciousUserList(response.data)
    setTotalMalicious(response.data.length)
}).catch((error) =>{
    console.log(error)
    setTotalMaliciousError(error.response.data)
});

 }



 const getTotalActiveCount = () => {

    axios.get(`${BASE_URL}/api/count/candidate?ec=iitk&lios=iitk_lios_1`)
    .then((response) =>{
       console.log(response.data)
       setTotalActiveUserList(response.data)
       setTotalActive(response.data.length)
}).catch((error) =>{
   console.log(error)
   setTotalActiveError(error.response.data)
});

}

const getTotalInActiveCount = () => {

    axios.get(`${BASE_URL}/api/count/candidate?ec=iitk&lios=iitk_lios_1?verdict=inactive`)
    .then((response) =>{
       console.log(response.data)
       setTotalInactiveUserList(response.data)
       setTotalInActive(response.data.length)
}).catch((error) =>{
   console.log(error)
   setTotalInActiveError(error.response.data)
});

}


const getIpList = () => {

    axios.get(`${BASE_URL}/classification/verdict?ec=iitk`)
    .then((response) =>{
       console.log(response.data)
       setListOfIp(response.data)
}).catch((error) =>{
   console.log(error)
//    setTotalInActiveError(error.response.data)
});

}


const getPerticularIpConnection = (id="192.168.1.1",status) => {

    axios.get(`${BASE_URL}/myip?field_sipv4_target_id=192.168.1.1&?_format=json`)
    .then((response) =>{
    //    console.log(response.data)
       let connected = []
       response?.data?.map((data)=>{
        let tem =  data?.field_dipv4?.split(">")[1].split("<")[0]
        connected.push({
            ip:tem
        })
       })
       let data = {
        ip : id,
         status: status,
         connected:connected
       }

     setperticularIpConnection(data)


}).catch((error) =>{
   console.log(error)
//    setTotalInActiveError(error.response.data)
});

}






  return <UserContext.Provider value={{
    getTotalMaliciousCount,
    totalMalicious,
    totalMaliciousError,
    getTotalActiveCount,
    totalActive,
    totalActiveError,
    getTotalInActiveCount,
    totalInActive,
    totalInActiveError,
    totalActiveUsersList,
    totalMaliciousUsersList,
    totalInactiveUsersList,
    getIpList,
    listOfIp,
    getPerticularIpConnection,
    perticularIpConnection

  }}>
    {children}
  </UserContext.Provider>


}

// http://172.29.234.136/api/count/candidate?ec=iitk&verdict=benign // perticular exam center IP
// http://172.29.234.136/api/count/candidate?ec=iitk&lios=iitk_lios_1&verdict=benign // perticular Lios




// http://172.29.234.136/api/count/candidate  // all candidates

// http://172.29.234.136/classification/status  // check for status

// http://172.29.234.136/api/count/candidate?ec=iitk&verdict=benign // check perticular exam center malicious count 

// http://172.29.234.136/api/count/candidate?ec=iitk // check perticular exam center count

// http://172.29.234.136/classification/status?ec=iitk  // status of ip in perticular exam center

// http://172.29.234.136/classification/status?ec=iitk&lios=iitk_lios_1 // perticular server student




