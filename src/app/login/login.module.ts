import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  MicrosoftLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";
import {environment} from "../../environments/environment";
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
    ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.providers.google.clientId)
          },
          {
            id: MicrosoftLoginProvider.PROVIDER_ID,
            provider: new MicrosoftLoginProvider(environment.providers.microsoft.clientId)
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ]
})
export class LoginModule {
}
