const currentDate = new Date();
const year = currentDate.getFullYear(); 
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
const day = String(currentDate.getDate()).padStart(2, '0'); 
const formattedDate = `${year}-${month}-${day}`;


export const IndividualExamData = [{
    name:"ls 1",
    examDate:formattedDate,
    totalRegiteredStudent:"100",
    totalActiveStudent:"90",
    totalInActiveStudent:"15",
    totalMaliciousStudent:"5",

},
// {
//     name:"ls 2",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"92",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },
// {
//     name:"ls 3",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"30",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },
// {
//     name:"ls 4",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"120",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 5",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"140",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 6",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 7",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"120",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 8",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 9",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 10",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 11",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 12",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 13",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 14",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 15",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },{
//     name:"ls 16",
//     examData:"23 Jan 2023",
//     totalRegiteredStudent:"100",
//     totalActiveStudent:"90",
//     totalInActiveStudent:"15",
//     totalMaliciousStudent:"5"
// },
// ] 
]