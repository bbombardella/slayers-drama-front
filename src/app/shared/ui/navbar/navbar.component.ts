import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {JsonPipe, NgIf} from "@angular/common";
import {LogoComponent} from "../logo/logo.component";
import {AutocompleteLibModule} from "angular-ng-autocomplete";
import {MovieEntity} from "../../../api/models/movie-entity";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {MovieService} from "../../../api/services";

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    RouterLink,
    NgIf,
    LogoComponent,
    AutocompleteLibModule,
    JsonPipe
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    public readonly authService: AuthService,
    private readonly movieService: MovieService,
    private readonly router: Router,
  ) {
  }

  public autocompleteData: MovieEntity[] = [];
  public keyword = 'title';

  public searchSub$ = new Subject();

  async autocompleteSelected(movie: MovieEntity) {
    await this.router.navigate(['/movie'], {queryParams: {movie: movie.id}});
  }

  public autocompleteChanged(text: string) {
    this.searchSub$.next(text);
  }

  ngOnInit(): void {
    this.searchSub$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((text) => {
      this.movieService.movieControllerSearch({query: text as string}).subscribe((r) => {
        this.autocompleteData = r.data as MovieEntity[];
      });
    });
  }
}
