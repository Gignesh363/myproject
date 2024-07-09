import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  formData = {
    firstName: '',
    lastName: '',
    domain: '',
    experience: '',
    ctc: '',
    address: ''
  }
  constructor() { }
}
