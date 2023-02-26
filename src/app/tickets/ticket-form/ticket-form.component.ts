import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { STUDENTS_MOCKED } from 'src/mocks/student.mock';
import { StudentService } from 'src/services/student/student.service';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public studentList: Student[] = [];
  public ticketForm: FormGroup;
  public studentID : number;
  public MAJOR_LIST : String[] = ['SI', 'GE', 'GB'];

  constructor(public formBuilder: FormBuilder, 
    public ticketService: TicketService,
    public studentService: StudentService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major:[''],
      studentID:-1
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation

      // Subscribe to students$ observable to get the list of students
      this.studentService.students$.subscribe((students : Student[]) => {
        this.studentList = students;
      });


  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();

    ticketToCreate.studentID = Number(ticketToCreate.studentID);  

    const findStudent : Student =  this.studentList.find(s => s.studentId == ticketToCreate.studentID);
    if(findStudent) ticketToCreate.student = findStudent;
    else console.log("Erreur student : Null");
 
    ticketToCreate.student = findStudent;
    ticketToCreate.archived = false;
    this.ticketService.addTicket(ticketToCreate);
  }
}
