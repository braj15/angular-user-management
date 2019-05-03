import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SuccessComponent } from './success/success.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, ConfirmationPageComponent, RegistrationFormComponent, SuccessComponent],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
