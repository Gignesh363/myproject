import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentSubmitComponent } from
"../student-submit/student-submit.component";
import { StudentService } from '../student-service/student-service.service';
@Component({
    selector: 'app-student',
    standalone: true,
    templateUrl: './student.component.html',
    styleUrl: './student.component.css',
    imports: [
        RouterModule,
        FormsModule, StudentSubmitComponent]
})
export class StudentComponent implements OnInit{
  dataToTransfer: any;
  formData = {
    firstName: '',
    lastName: '',
    domain: '',
    experience: '',
    ctc: '',
    address: ''
  }
  constructor(private router: Router, private studentService: StudentService) { }
  ngOnInit(): void { }


  onBtnClick(){
    this.studentService.formData = this.formData;
    this.router.navigate(['/submit']);
  }
}
