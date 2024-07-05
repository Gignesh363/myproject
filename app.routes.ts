import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentSubmitComponent } from
'./student-submit/student-submit.component';


export const routes: Routes = [
    {

            path: 'form',
            component:StudentComponent
        },
        {
            path: 'submit',
            component:StudentSubmitComponent
        },
        {
            path: '',
            component:AppComponent
        }


];