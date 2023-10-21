import {Component, DestroyRef, OnInit} from '@angular/core';
import {MicrosoftLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {filter} from "rxjs";
import {AuthService} from "../shared/services/auth.service";
import {ProviderEnum} from "../shared/models/provider.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private readonly socialAuthService: SocialAuthService,
              private readonly destroyRef: DestroyRef,
              private readonly authService: AuthService) {
  }

  ngOnInit(): void {
    this.socialAuthService.authState
      .pipe(takeUntilDestroyed(this.destroyRef), filter(user => !!user))
      .subscribe(v => {
        this.authService.userSubject.next({
          provider: v.provider as ProviderEnum,
          payload: {
            token: v.idToken
          }
        })
      });
  }

  localLogin(): void {
    if (this.username && this.password) {
      this.authService.userSubject.next({
        provider: ProviderEnum.LOCAL,
        payload: {
          username: this.username,
          password: this.password
        }
      });
    }
  }

  microsoftLogin(): void {
    this.socialAuthService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
  }
}
