import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormButtonComponent } from './form-button/form-button.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
            {
                path: '',
                component: FormButtonComponent
            },
            {
                path: 'form',
                component: FormComponent
            }
        ]
    }
];
