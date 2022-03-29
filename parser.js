
/*Shulin Ji's YNCN Coding Challenge -------- First_ Part*/ 

const fs = require('fs');

let rawdata = fs.readFileSync('student_courses.json');
let student = JSON.parse(rawdata);      // get the whole data from json file 
let final_answer = [];

for (let num_course = 0, len = student.courses.length; num_course < len; num_course++) {

    let course_id = student.courses[num_course].id;         // get the course id
    console.log(student.courses[num_course].name);          // print out the course name 
    final_answer.push(student.courses[num_course].name);

    // For each student, look into their courses and find if they are taking the course with the corresponding course_id
    for (let num_students = 0; num_students < student.students.length; num_students++) {
        for (let student_course = 0; student_course < student.students[num_students].courses.length; student_course++) {
            if (student.students[num_students].courses[student_course] == course_id) {
                // If the student is taking this course, print his/her name out
                console.log(student.students[num_students].name);
                final_answer.push(student.students[num_students].name);
            }
        }
    }
}

// Output the final answer to a txt file 
let final_text = final_answer.toString();
fs.writeFile('output.txt', final_text, err => {
    if (err) {
        console.error(err);
    }
})
