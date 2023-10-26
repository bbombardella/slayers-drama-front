import {Component, DestroyRef, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../api/services/movie.service";
import {MovieEntity} from "../api/models/movie-entity";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  public movie: MovieEntity | undefined;

  private readonly _cancelationToken: Subject<void> = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService,
    private readonly destroyRef: DestroyRef
  ) {
  }

  @Input()
  set id(movieId: string) {
    if (isNaN(+movieId)) {
      this.handleError();
      return;
    }

    this._cancelationToken.next();

    this.movieService
      .movieControllerFindOne({id: +movieId})
      .pipe(
        takeUntil(this._cancelationToken),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (r) => this.movie = r,
        error: () => this.handleError()
      });
  }

  private handleError(): void {
    this.router.navigate(['/home']);
  }
}
