const employees = [
  {
    name: 'Victoria',
    gender: 'Female',
    roles: 'CEO',
    salary: 195,
    background: 'Commander of United States Naval Navy in Pacific',
    capability: ['JIRA', 'EXCEL', 'POWERPOINT', 'WORD'],
  },
  {
    name: 'Stefan',
    gender: 'Male',
    roles: 'Project Manager',
    salary: 45,
    background: 'English Literature',
    capability: ['JIRA', 'EXCEL', 'WORD'],
  },
  {
    name: 'Paisley',
    gender: 'Female',
    roles: 'Senior Business Analyst',
    salary: 30,
    background: 'Military',
    capability: ['JIRA', 'EXCEL'],
  },
  {
    name: 'Theo',
    gender: 'Male',
    roles: 'Technical Lead',
    salary: 30,
    background: 'Information Technology',
    capability: ['JIRA', 'JAVA', 'JAVASCRIPT', 'SPRINGBOOT', 'VUE'],
  },
  {
    name: 'Clarine',
    gender: 'Female',
    roles: 'Senior Backend Developer',
    salary: 40,
    background: 'Japanese Literature',
    capability: ['JIRA', 'JAVA', 'SPRINGBOOT'],
  },
  {
    name: 'Kelly',
    gender: 'Female',
    roles: 'Junior Backend Developer',
    salary: 12,
    background: 'Japanese Literature',
    capability: ['JIRA', 'JAVA', 'SPRINGBOOT'],
  },
  {
    name: 'Charlotte',
    gender: 'Female',
    roles: 'Junior Backend Developer',
    salary: 9,
    background: 'Marketing Communication',
    capability: ['JIRA', 'JAVA', 'SPRINGBOOT'],
  },
  {
    name: 'Isabella',
    gender: 'Female',
    roles: 'Junior Backend Developer',
    salary: 14,
    background: 'Accountant',
    capability: ['JIRA', 'JAVA', 'SPRINGBOOT'],
  },
  {
    name: 'Emily',
    gender: 'Female',
    roles: 'Senior Frontend Developer',
    salary: 35,
    background: 'High School',
    capability: ['JIRA', 'JAVASCRIPT', 'VUE'],
  },
  {
    name: 'Aurora',
    gender: 'Female',
    roles: 'Associate Frontend Developer',
    salary: 20,
    background: 'Management',
    capability: ['JIRA', 'JAVASCRIPT', 'VUE'],
  },
  {
    name: 'Billy',
    gender: 'Male',
    roles: 'Associate Frontend Developer',
    salary: 14,
    background: 'Information Technology',
    capability: ['JIRA', 'JAVASCRIPT', 'VUE'],
  },
  {
    name: 'Rizky',
    gender: 'Male',
    roles: 'Senior Quality Assurance',
    salary: 25,
    background: 'Information Technology',
    capability: ['JIRA', 'JAVASCRIPT', 'VUE'],
  },
  {
    name: 'William',
    gender: 'Male',
    roles: 'Junior Quality Assurance',
    salary: 5,
    background: 'Mathematician',
    capability: ['JIRA', 'JAVASCRIPT', 'VUE'],
  },
  {
    name: 'Mostafa',
    gender: 'Male',
    roles: 'Product Designer',
    salary: 120,
    background: 'Graphic Design',
    capability: ['JIRA', 'CANVAS'],
  },
  {
    name: 'Wong',
    gender: 'Male',
    roles: 'Senior UI UX Designer',
    salary: 8,
    background: 'Graphic Design',
    capability: ['JIRA', 'FIGMA', 'CANVAS'],
  },
];


function functionOne(arrayOfObject) {
  // your code here!
  // Male Counter
   let totalMale = 0;
   // Salary Counter
   let totalSalary = 0;
 
   for (let i = 0; i < arrayOfObject.length; i++) {
     if (arrayOfObject[i].gender === 'Male') {
       // Check if Male
       totalMale++;
       totalSalary += arrayOfObject[i].salary;
     }
   }
 
   // Get Average Salary
   let averageSalary = Math.round(totalSalary / totalMale);
 
   // Return Literal
   return `Ada ${totalMale} Orang pria dalam perusahaan dan gaji rata - rata mereka adalah ${averageSalary} juta rupiah`;
 }

function functionTwo(arrayOfObject) {
  // your code here!
   // Returned Result
   const result = [];

   for (let i = 0; i < arrayOfObject.length; i++) {
     if (
       arrayOfObject[i].gender === 'Female' &&
       arrayOfObject[i].roles === 'Junior Backend Developer'
     ) {
       // Detect Female Junior Backend Developer
       const name = arrayOfObject[i].name;
       const background = arrayOfObject[i].background;
 
       // Pushing Literal
       result.push(
         `Nama Karyawan : ${name}, dan backgroundnya adalah ${background}`
       );
     }
   }
 
   return result;
 }

function functionThree(arrayOfObject) {
 // Create Tech Object to List All Capablity
 const tech = {};

 // Looping Array Of Object
 for (let i = 0; i < arrayOfObject.length; i++) {
   // Looping Capability in Object
   for (let j = 0; j < arrayOfObject[i].capability.length; j++) {
     if (tech[arrayOfObject[i].capability[j]]) {
       // If Capability Exist >> Increment Value
       tech[arrayOfObject[i].capability[j]] += 1;
     } else {
       // If Caability Doesn't Exist >> Create New Key With Value 1
       tech[arrayOfObject[i].capability[j]] = 1;
     }
   }
 }

 // Searcher
 // Change Object to Array
 // Entries Mean Create Nested Array
 // Index 0 as a Key and Index 1 as a Value
 const arrTechs = Object.entries(tech);

 // Initial Max Value with Lowest Value
 let max = 0;
 // Initial Min Value with Highest Value
 let min = Infinity;

 // Tech Search Name
 let maxTech = '';
 let minTech = '';

 // Looping the new Array
 for (let i = 0; i < arrTechs.length; i++) {
   // To Get Most Used Tech
   if (arrTechs[i][1] > max) {
     // Check is Value at Key is more Than Max Value
     // ReAssign Max and This Tech Name
     max = arrTechs[i][1];
     maxTech = arrTechs[i][0];
   }

   // To Get Less Used Tech
   if (arrTechs[i][1] < min) {
     // Check is Value at Key is more Than Min Value
     // ReAssign Min and This Tech Name
     min = arrTechs[i][1];
     minTech = arrTechs[i][0];
   }
 }

 // Return Literal
 return `Tech yang paling jarang ditemui adalah ${minTech}, dan paling sering adalah ${maxTech}`;
}
// BERAPA JUMLAH KARYAWAN PRIA DAN HITUNG RATA2 GAJI MEREKA!
console.log(functionOne(employees));
// Ada 7 Orang pria dalam perusahaan dan gaji rata - rata mereka adalah 35 juta rupiah

// BERAPA JUMLAH JUNIOR BACKEND DEVELOPER WANITA DAN TAMPILKAN BACKGROUND MEREKA MASING2 DENGAN NAMANYA
console.log(functionTwo(employees));
// [
//   'Nama Karyawan : Kelly, dan backgroundnya adalah Japanese Literature',
//   'Nama Karyawan : Charlotte, dan backgroundnya adalah Marketing Communication',
//   'Nama Karyawan : Isabella, dan backgroundnya adalah Accountant',
// ];

// HITUNG BERAPA BANYAK JUMLAH CAPABILITY YANG PALING SERING SAMPAI PALING JARANG DIMILIKI KARYAWAN
console.log(functionThree(employees));
// Tech yang paling jarang ditemui adalah POWERPOINT, dan paling sering adalah JIRA

module.exports = {
  functionOne,
  functionTwo,
  functionThree,
  employees,
};
