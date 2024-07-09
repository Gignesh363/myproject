import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    RouterOutlet,
    FormsModule,FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
}
)
export class AppComponent {
  title = 'route';
YearsExperience: any;
  #reset(arg0: any) {
    throw new Error('Method not implemented.');
  }

  user: any = { FIRSTNAME: '', LASTNAME:
'',Companyname:'',email:'',mobileno:'',YearsExperience:''};
  onGOOGLE() {
    console.log('FIRST NAME', this.user.FIRSTNAME);
    console.log('LAST NAME', this.user.LASTNAME );
    console.log('Company name.', this.user.Companyname);
    console.log('email', this.user.email);
    console.log('mobile no', this.user.mobileno);
    console.log('Years Experience', this.user.YearsExperience);
  }

  setGOOGLE() {
    this.user.FIRSTNAME = 'RAMESH';
    this.user.LASTNAME   = 'BABU';
    this.user.Companyname = 'TCS';
    this.user.email= 'TCSFAFAF@GMAIL.COM';
    this.user.mobileno = '8574961254';
    this.user.YearsExperience= '4';

}

}