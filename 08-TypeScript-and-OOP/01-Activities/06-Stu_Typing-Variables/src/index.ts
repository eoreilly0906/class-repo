const firstName: string = 'Eddie';
const lastName: string = 'OReilly';
const age: number = 36;
const jobTitle: string = 'Software Engineer';
const salary: number = 100000;
const remoteStatus: unknown = true;

const employeeName: string = `${firstName} ${lastName}`;

console.log(firstName, lastName, age, jobTitle, salary,);



if (remoteStatus === true) {
    console.log(`${employeeName} is working remotely today`);
} else {
    console.log(`${employeeName} is working from the office today`);
}

function promotion (jobTitle: string, salary: number) {
    jobTitle = 'Senior Software Engineer';
    salary += 10000;
    return salary;
}

