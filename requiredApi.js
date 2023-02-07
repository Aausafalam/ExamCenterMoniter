// // CENTRAL SERVER LOG IN 
// // post Api for Login 
// field : 
// {
//     username:"example",
//     password:"password"
// }
// response:
// {
//     token :"" //or 
//     // any validation things api key
// }
// //forgot password 
// //post Api 
// field:{
//     email:'aausafalam585@gmail.com'
// }
// reponse:
// // api will send a email to user a otp or somthing to vaidate

// // 2 . central server dashBord
// // get api 
// {
//     totalExamCenter:"",
//     highestmaleciousCenter:"",
//     totalMaliciousStudent:"",
//     totalActiveStudent:"",
//     totalInActiveStudent:""
// }
// // get Api for list of Examination Center
// // get api 
// // field :
// [{
//     ExamCentername:"EC1",
//     examDate:"",
//     totalActiveStudent:"",
//     totalMaliciousStudent:""

// },
// {
//     ExamCentername:"EC",
//     examDate:"",
//     totalActiveStudent:"",
//     totalMaliciousStudent:""

// },
// ]

// // 3 . exam Center Login 

// // post Api 
// // field :
//  {
//     username:"",
//     password:""
//  }
//  reponse:{
//     token:"",
//     // anyvalidation things like api key
//  }

// //  forgot pasword :  
// // post api : 
// // field :
// {
//      email:""
//  }




// // 4 perticular exam center
// // it will be a dynamic route like http://example.com/examCenter1
// // list of servers
// // get api
// // field :
// field : [{
//     name:"server1",
//     examDate:"",
//     totalRegisteredStudent:"",
//     totalActiveStudent:"",
//     totalInActiveStudent:"",
//     totalMaliciousStudent:"",
// },
// {
//     name:"server2",
//     examDate:"",
//     totalRegisteredStudent:"",
//     totalActiveStudent:"",
//     totalInActiveStudent:"",
//     totalMaliciousStudent:"",
// },


// ]

// // perticular Exam Center perticular server

// // list of pc 
// // it will be dynamic routes like http://localhost3000/:examcenter/:server
// filed :[
//     {
//        name:"pc1",
//        Ip:"",
//        status:"active/inactive/malicious",
//        connection:[{
//         Ip:""
//        },{
//         Ip:""
//        }]
//     },
//     {
//         name:"pc1",
//         Ip:"",
//         status:"active/inactive/malicious",
//         connection:[{
//          Ip:""
//         },{
//          Ip:""
//         }]
//      }
// ]