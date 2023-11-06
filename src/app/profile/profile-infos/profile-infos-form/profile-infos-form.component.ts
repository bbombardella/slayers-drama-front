import {Component, DestroyRef, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {AuthService as AuthWebService} from "../../../api/services/auth.service";
import {UserEntity} from "../../../api/models/user-entity";
import {MicrosoftLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {MatSnackBar} from "@angular/material/snack-bar";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {filter, of, switchMap, take} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent, ConfirmDialogConfig} from "../../../shared/ui/confirm-dialog/confirm-dialog.component";
import {ProviderEnum} from "../../../shared/models/provider.enum";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-infos-form',
  templateUrl: './profile-infos-form.component.html',
  styleUrls: ['./profile-infos-form.component.scss']
})
export class ProfileInfosFormComponent implements OnInit {

  infosForm: FormGroup | undefined;
  passwordForm: FormGroup | undefined;

  constructor(private readonly authService: AuthService,
              private readonly authWebService: AuthWebService,
              private readonly socialAuthService: SocialAuthService,
              private readonly snackBar: MatSnackBar,
              private readonly destroyRef: DestroyRef,
              private readonly matDialog: MatDialog) {
  }

  get currentUser(): UserEntity | undefined {
    return this.authService.currentUser;
  }

  ngOnInit(): void {
    this.socialAuthService.authState
      .pipe(takeUntilDestroyed(this.destroyRef), filter(user => !!user && user.provider === ProviderEnum.GOOGLE))
      .subscribe(v => {
        this.googleAttach(v.id);

        this.socialAuthService.signOut();
      });

    this.initInfosForm();
    this.initPasswordForm();
  }

  private checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    if (group.get('password')?.value === group.get('confirmPassword')?.value) {
      return null;
    }

    return {notSame: 'Les mots de passes doivent être identiques'};
  }

  private initPasswordForm(): void {
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }, [this.checkPasswords]);
  }

  private initInfosForm(): void {
    this.infosForm = new FormGroup({
      firstName: new FormControl(this.currentUser?.firstName, Validators.required),
      lastName: new FormControl(this.currentUser?.lastName, Validators.required),
      email: new FormControl(this.currentUser?.email, [Validators.required, Validators.email]),
    });
  }

  async microsoftLogin(): Promise<void> {
    if (!this.currentUser) {
      this.handleOAuthError('Microsoft');
      return;
    }

    if (this.currentUser.microsoftId) {
      this.microsoftDetach();
      return;
    }

    await this.microsoftAttach();
  }

  private async microsoftAttach(): Promise<void> {
    if (!this.currentUser) {
      this.handleOAuthError('Microsoft');
      return;
    }

    const result: SocialUser = await this.socialAuthService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
    await this.socialAuthService.signOut();
    const uniqueId: string | undefined = result?.response?.uniqueId;

    if (!uniqueId) {
      this.handleOAuthError('Microsoft');
      return;
    }

    this.authWebService.authControllerUpdate({
      id: this.currentUser.id,
      body: {
        microsoftId: uniqueId
      }
    }).pipe(
      take(1),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(user => {
      this.authService.updateUser(user);
    });
  }

  private microsoftDetach(): void {
    const dialogRef = this.matDialog.open<ConfirmDialogComponent, ConfirmDialogConfig>(ConfirmDialogComponent, {
      data: {
        title: 'Détachement Microsoft',
        content: `Voulez-vous détacher votre compte Microsoft ?`,
        confirmLabel: 'Détacher'
      }
    });

    dialogRef.afterClosed()
      .pipe(
        take(1),
        filter(v => v === true),
        switchMap(_ => {
          if (!this.currentUser) {
            this.handleOAuthError('Microsoft');
            return of(undefined);
          }

          return this.authWebService.authControllerUpdate({
            id: this.currentUser.id,
            body: {
              microsoftId: null
            }
          });
        })
      )
      .subscribe(v => {
        if (v) {
          this.authService.updateUser(v);
        }
      });
  }

  googleAttach(uniqueId: string): void {
    if (!this.currentUser || !uniqueId) {
      this.handleOAuthError('Google');
      return;
    }

    this.authWebService.authControllerUpdate({
      id: this.currentUser.id,
      body: {
        googleId: uniqueId
      }
    }).pipe(
      take(1),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(user => {
      this.authService.updateUser(user);
    });
  }

  googleDetach(): void {
    const dialogRef = this.matDialog.open<ConfirmDialogComponent, ConfirmDialogConfig>(ConfirmDialogComponent, {
      data: {
        title: 'Détachement Google',
        content: `Voulez-vous détacher votre compte Google ?`,
        confirmLabel: 'Détacher'
      }
    });

    dialogRef.afterClosed()
      .pipe(
        take(1),
        filter(v => v === true),
        switchMap(_ => {
          if (!this.currentUser) {
            this.handleOAuthError('Google');
            return of(undefined);
          }

          return this.authWebService.authControllerUpdate({
            id: this.currentUser.id,
            body: {
              googleId: null
            }
          });
        })
      )
      .subscribe(v => {
        if (v) {
          this.authService.updateUser(v);
        }
      });
  }

  private handleOAuthError(accountType: 'Microsoft' | 'Google'): void {
    this.snackBar.open(
      `Impossible d'attacher un compte ${accountType}. Veuillez réessayer plus tard`,
      'OK',
      {duration: 5 * 1000}
    );
  }

  updateInfos(): void {
    this.update(this.infosForm, this.initInfosForm.bind(this));
  }

  updatePassword(): void {
    this.update(this.passwordForm, this.initPasswordForm.bind(this));
  }

  private update(formGroup: FormGroup | undefined, fn: Function): void {
    if (!formGroup
      || formGroup.invalid
      || !formGroup.dirty
      || !this.currentUser) {
      return;
    }

    this.authWebService.authControllerUpdate({
      id: this.currentUser.id,
      body: formGroup.getRawValue()
    }).pipe(
      take(1),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(user => this.handleUpdate(user, fn));
  }

  private handleUpdate(user: UserEntity, fn: Function): void {
    if (!user) {
      return;
    }

    this.authService.updateUser(user);
    this.snackBar.open('Mise à jour effectuée', 'OK', {duration: 5 * 1000});
    fn();
  }
}
