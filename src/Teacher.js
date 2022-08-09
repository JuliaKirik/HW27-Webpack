import {Person} from './Person';

export class Teacher extends Person {
    constructor(name, age, gendor, interests, subject) {
        super(name, age, gendor, interests);
        this.subject = subject;
    }
}
