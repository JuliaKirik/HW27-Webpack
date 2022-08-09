import {Teacher} from './Teacher';
import {Student} from './Student';

const student = new Student('Julia', 28, 'female', 'music, JS, games...');
const teacher = new Teacher('Vany', 59, 'male', 'cars, music, sport...', student);

console.log(teacher);
console.log(student);
