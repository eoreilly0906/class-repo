const studentList = ['Matt', 'Amy', 'Shane', 'Josh', 'Pria'];

const checkStudentRoster = (arr: string[]): void => {
  arr.forEach((student: string) => {
    console.log(`${student} is present!`);
  });
};

// Why does this function not fail?
studentList.forEach((student) => {
  console.log(`${student} is here!`);
});

checkStudentRoster(studentList);
