// data structure
const students=[
    {
        studentId:1,
        name:"Jinetta",
        grade:10,
        courses:["Math","Social","Science"],
        attendance:{"2023-05-07":true,"2023-05-08":false},
        hobbies:{sports:["football","basketball"],art:["pencil drawing","potrait drawing"]},
        },
    
        {
            studentId:2,
            name:"Dona",
            grade:9,
            courses:["Math","Tamil","English"],
            attendance:{"2023-05-18":true,"2023-05-19":false},
            hobbies:{sports:["football","kho-kho"],cooking:["baking"]},
                },
           
        {
            studentId:3,
            name:"Ed",
            grade:11,
            courses:["Math","Chemistry","Biology"],
            attendance:{"2023-05-25":false,"2023-05-27":true},
            hobbies:{music:["melody","rap"],gaming:["vice city"]},
             },
    ];
    //display
    const displayStudentDetails=(student)=>{
        console.log("Student details");
        for(const key in student){
       if(key!=="courses"){
        console.log(`${key}: ${student[key]}`);
     } else {
       console.log(`courses: ${student.courses.join(", ")}`);
     }
   }
  };
     displayStudentDetails();
    /*filter
    const filterStudentByName=students.filter((student)=>{
        return student.courses ===3;
      });
     console.log(filterStudent);*/
//find
    const findStudentByName =(name)=>{
        return students.find((student)=>student.name===name);
     };
        console.log("\nStudent by name(2)\n");
        const student2=findStudentByName(2);
           if (student2) {
              displayStudentDetails(student2);
           }else{
              console.log("Student 2 not found:");
           }
//add course
     const addCourseToStudent=(studentName,course)=>{
      const student=findStudentByName(studentName)
        if(student){
        if(!student.courses.includes(course)){
        student.courses.push(course);
           console.log(`course${course}, student by name ${studentName}`);
        }else{
        console.log(`course${course} already existed in student by name${studentName}`);
        }}
      else{
        console.log(`student with name${studentName} not found`);
      }};
      console.log("\n Add course to student");
      addCourseToStudent("Ed","Physics");
      displayStudentDetails(findStudentByName("Ed"));
/*remove
      const removeStudent=(StudentByName)=>{
      const index=students.findIndex((s)=>s.studentName===studentName);
      if(index!== -1){
        products.splice(index,1);
        console.log(`student with name${studentName} is Removed`);
       }
       else{
        console.log(`student with name${studentName} not found`);
       }
      };
       console.log("\nRemove student:");
       removeStudent("Jinetta");
       console.log("after removing student");
       students.forEach((student) => displayStudentDetails(student));*/