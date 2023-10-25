import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {authGuard} from "../shared/guards/auth.guard";
import {RoleEnum} from "../shared/models/role.enum";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "cinema"
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [authGuard],
    data: {
      roles: [RoleEnum.ADMIN]
    },
    children: [
      {
        path: 'cinema',
        loadChildren: () => import('./admin-cinema/admin-cinema-routing.module').then(m => m.AdminCinemaRoutingModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('./admin-movies/admin-movies.module').then(m => m.AdminMoviesModule)
      },
      {
        path: 'screenings',
        loadChildren: () => import('./admin-screenings/admin-screenings-routing.module').then(m => m.AdminScreeningsRoutingModule)
      },
      {
        path: 'genres',
        loadChildren: () => import('./admin-genres/admin-genres.module').then(m => m.AdminGenresModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
