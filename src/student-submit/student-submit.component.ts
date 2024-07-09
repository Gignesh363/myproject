import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StudentService } from '../student-service/student-service.service';
@Component({
  selector: 'app-student-submit',
  standalone: true,
  imports: [],
  templateUrl: './student-submit.component.html',
  styleUrl: './student-submit.component.css'
})
export class StudentSubmitComponent implements OnInit {
  
  formData = {
    firstName: '',
    lastName: '',
    domain: '',
    experience: '',
    ctc: '',
    address: ''
  };
  constructor(private studentService: StudentService) { }
  ngOnInit(): void { 
    this.formData = this.studentService.formData;
  }
}