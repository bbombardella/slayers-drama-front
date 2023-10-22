import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {CredentialsContainerComponent} from "../shared/ui/credentials-container/credentials-container.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    CredentialsContainerComponent
  ]
})
export class SignupModule { }
