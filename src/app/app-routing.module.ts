import {Injectable, NgModule} from '@angular/core';
import {
  provideRouter,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
  withComponentInputBinding
} from '@angular/router';
import {Title} from "@angular/platform-browser";
import {titleTemplate} from "./shared/models/title-template.model";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule),
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
  }
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(titleTemplate(title));
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
    }
  )],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
