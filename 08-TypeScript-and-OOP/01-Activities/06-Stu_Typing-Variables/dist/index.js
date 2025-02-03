const firstName = 'Eddie';
const lastName = 'OReilly';
const age = 36;
const jobTitle = 'Software Engineer';
const salary = 100000;
const remoteStatus = true;
const employeeName = `${firstName} ${lastName}`;
console.log(firstName, lastName, age, jobTitle, salary);
if (remoteStatus === true) {
    console.log(`${employeeName} is working remotely today`);
}
else {
    console.log(`${employeeName} is working from the office today`);
}
function promotion(jobTitle, salary) {
    jobTitle = 'Senior Software Engineer';
    salary += 10000;
    return salary;
}
