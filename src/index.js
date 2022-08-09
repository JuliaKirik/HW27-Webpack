import {Teacher} from './Teacher';
import {Student} from './Student';

const student = new Student('Victor', 20, 'male', 'Guitar, footbal, games...');
const teacher = new Teacher('John', 55, 'male', 'Guns, cars, teach, etc.', student);

console.log(teacher);
console.log(student);
