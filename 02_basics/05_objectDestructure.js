const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh Choudary"
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course;
// console.log(courseInstructor);

const {courseInstructor: Instructor} = course;
console.log(Instructor);