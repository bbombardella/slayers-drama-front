import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileInfosComponent } from './profile-infos/profile-infos.component';
import { ProfileOrdersComponent } from './profile-orders/profile-orders.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import { ProfileInfosFormComponent } from './profile-infos/profile-infos-form/profile-infos-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MicrosoftSocialButtonComponent} from "../shared/ui/microsoft-social-button/microsoft-social-button.component";
import {GoogleSigninButtonModule, SocialLoginModule} from "@abacritt/angularx-social-login";
import {TablePaginatedComponent} from "../shared/ui/table-paginated/table-paginated.component";


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInfosComponent,
    ProfileOrdersComponent,
    ProfileInfosFormComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        SocialLoginModule,
        MicrosoftSocialButtonComponent,
        GoogleSigninButtonModule,
        TablePaginatedComponent
    ]
})
export class ProfileModule { }
