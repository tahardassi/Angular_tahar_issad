import { Injectable, Component, OnInit } from '@angular/core';
import { BehaviorSubject,  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { STUDENTS_MOCKED } from 'src/mocks/student.mock';
import { Student } from 'src/models/student';



@Injectable({
    providedIn: 'root'
})

export class StudentService implements OnInit{
    
    private studentList: Student[]= STUDENTS_MOCKED;


    /*
    * Observable which contains the list
    */
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
    
    private studentUrl  = 'http://localhost:9428/api/students';

    constructor(private http: HttpClient) {
        (this.http.get<Student[]>(this.studentUrl)).subscribe(
            (students: Student[]) => {
              /*
              * Mettre à jour la liste des étudiants/ pour utiliser que la liste fournie par le serveur 
              * il faut juste assigner la liste retourné par getStudent() à this.studentListe
              */
              //this.studentList = students;//decommenter cette ligne 
              this.studentList = this.studentList.concat( students);//et supprimer celle-ci

          
              // Mettre à jour le BehaviorSubject avec la nouvelle liste
              this.students$.next(this.studentList);
            },
            (error: any) => {
              console.error(error);
            }
          );
    }
    ngOnInit() {
    }
   //renvoie un tableau de type Student
    getStudent(): Observable<Student[]> {
        return this.http.get(this.studentUrl, { responseType: 'json' }).pipe(
            map((response: any) => response as Student[])
        );
    }
      
}