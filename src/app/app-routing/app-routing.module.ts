import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationPageComponent } from '../confirmation-page/confirmation-page.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { SuccessComponent } from '../success/success.component';


const routes: Routes = [
  {path: 'reg-form', component: RegistrationFormComponent},
  {path: 'confirm-reg', component: ConfirmationPageComponent},
  {path: 'success', component: SuccessComponent },
  {path: '', redirectTo: '/reg-form', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }