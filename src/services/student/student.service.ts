import { Injectable } from '@angular/core';
import { STUDENTS_MOCKED } from 'src/mocks/student.mock';
import { Student } from 'src/models/student';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class StudentService{
    
    private studentList: Student[]= STUDENTS_MOCKED;


    /*
    * Observable which contains the list
    */
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
    
    constructor() {
    }
}