const currentDate = new Date(); 
const year = currentDate.getFullYear(); 
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
const day = String(currentDate.getDate()).padStart(2, '0'); 
const formattedDate = `${year}-${month}-${day}`;

export const  ExamCenterListData = [{
   examCenter:"EC1",
   examDate:formattedDate,
   activeStudents:"52",
   maleciousStudents:"02"
},
// {
//     examCenter:"EC2",
//     examDate:"24 jan 2023",
//     activeStudents:"65",
//     maleciousStudents:"00"
//  },
//  {
//     examCenter:"EC3",
//     examDate:"25 jan 2023",
//     activeStudents:"45",
//     maleciousStudents:"00"
//  },
//  {
//     examCenter:"EC4",
//     examDate:"26 jan 2023",
//     activeStudents:"203",
//     maleciousStudents:"40"
//  },{
//     examCenter:"EC5",
//     examDate:"30 jan 2023",
//     activeStudents:"100",
//     maleciousStudents:"05"
//  },{
//     examCenter:"EC6",
//     examDate:"27 jan 2023",
//     activeStudents:"20",
//     maleciousStudents:"02"
//  },{
//     examCenter:"EC7",
//     examDate:"21 jan 2023",
//     activeStudents:"52",
//     maleciousStudents:"02"
//  },
//  {
//     examCenter:"EC8",
//     examDate:"23 jan 2023",
//     activeStudents:"52",
//     maleciousStudents:"02"
//  },
//  {
//      examCenter:"EC9",
//      examDate:"24 jan 2023",
//      activeStudents:"65",
//      maleciousStudents:"00"
//   },
//   {
//      examCenter:"EC10",
//      examDate:"25 jan 2023",
//      activeStudents:"45",
//      maleciousStudents:"00"
//   },
//   {
//      examCenter:"EC11",
//      examDate:"26 jan 2023",
//      activeStudents:"203",
//      maleciousStudents:"40"
//   },{
//      examCenter:"EC12",
//      examDate:"30 jan 2023",
//      activeStudents:"100",
//      maleciousStudents:"05"
//   },{
//      examCenter:"EC13",
//      examDate:"27 jan 2023",
//      activeStudents:"20",
//      maleciousStudents:"02"
//   },{
//      examCenter:"EC14",
//      examDate:"21 jan 2023",
//      activeStudents:"52",
//      maleciousStudents:"02"
//   },
//   {
//     examCenter:"EC15",
//     examDate:"23 jan 2023",
//     activeStudents:"52",
//     maleciousStudents:"02"
//  },
//  {
//      examCenter:"EC16",
//      examDate:"24 jan 2023",
//      activeStudents:"65",
//      maleciousStudents:"00"
//   },
//   {
//      examCenter:"EC17",
//      examDate:"25 jan 2023",
//      activeStudents:"45",
//      maleciousStudents:"00"
//   },
//   {
//      examCenter:"EC18",
//      examDate:"26 jan 2023",
//      activeStudents:"203",
//      maleciousStudents:"40"
//   },{
//      examCenter:"EC19",
//      examDate:"30 jan 2023",
//      activeStudents:"100",
//      maleciousStudents:"05"
//   },{
//      examCenter:"EC20",
//      examDate:"27 jan 2023",
//      activeStudents:"20",
//      maleciousStudents:"02"
//   },{
//      examCenter:"EC21",
//      examDate:"21 jan 2023",
//      activeStudents:"52",
//      maleciousStudents:"02"
//   }
]