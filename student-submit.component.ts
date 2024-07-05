import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-submit',
  standalone: true,
  imports: [],
  templateUrl: './student-submit.component.html',
  styleUrl: './student-submit.component.css'
})
export class StudentSubmitComponent  {
  @Input() name: string | undefined;
  @Output() changeName = new EventEmitter();
    transferredData: string = '';
  route: any;


}