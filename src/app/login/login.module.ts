import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoogleSigninButtonModule, SocialLoginModule} from "@abacritt/angularx-social-login";
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MicrosoftSocialButtonComponent} from "../shared/ui/microsoft-social-button/microsoft-social-button.component";
import {CredentialsContainerComponent} from "../shared/ui/credentials-container/credentials-container.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoginRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    FormsModule,
    CredentialsContainerComponent,
    MicrosoftSocialButtonComponent,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule {
}
