import {Component} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {UserEntity} from "../../api/models/user-entity";

@Component({
  selector: 'app-profile-infos',
  templateUrl: './profile-infos.component.html',
  styleUrls: ['./profile-infos.component.scss']
})
export class ProfileInfosComponent {
  constructor(private readonly authService: AuthService) {
  }

  get currentUser(): UserEntity | undefined {
    return this.authService.currentUser;
  }

  protected readonly isSecureContext = isSecureContext;
}
