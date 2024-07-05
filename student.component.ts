import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentSubmitComponent } from
"../student-submit/student-submit.component";
@Component({
    selector: 'app-student',
    standalone: true,
    templateUrl: './student.component.html',
    styleUrl: './student.component.css',
    imports: [
        RouterModule,
        FormsModule, StudentSubmitComponent]
})
export class StudentComponent {
  dataToTransfer: any;
  constructor(private router: Router) { }
  ngOnInit(): void { }
  firstName : string = '';
  lastname :  string = '';
  class :  string = '';
  PASSEDOUT : String = '';


  onBtnClick(){
    this.router.navigate(['/submit']);
  }

  onkeyup(event:any){
    this.firstName = event.target.value;
    this.lastname = event.target.value;
    this.class = event.target.value;
    this.PASSEDOUT = event.target.value;
  }
}
