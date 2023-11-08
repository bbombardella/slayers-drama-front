import {Component, DestroyRef} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MovieService} from "../../../api/services/movie.service";
import {take} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.scss']
})
export class AddMovieModalComponent {

  tmdbId: number | undefined;
  tmdbUrl: string | undefined;

  get invalid(): boolean {
    return isNaN(Number(this.tmdbId));
  }

  constructor(private readonly dialogRef: MatDialogRef<AddMovieModalComponent>,
              private readonly movieService: MovieService,
              private readonly destroyRef: DestroyRef,
              private readonly snackBar: MatSnackBar) {
  }

  urlChange(value: string | undefined): void {
    const id = value?.match(/https:\/\/www\.themoviedb\.org\/movie\/(\d+)/);

    if (id && id[1]) {
      this.tmdbId = Number(id[1]);
    } else {
      this.tmdbId = undefined;
    }
  }

  addMovie(): void {
    if (this.invalid) {
      return;
    }

    this.movieService.movieControllerCreate({
      id: this.tmdbId!
    }).pipe(
      take(1),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(value => {
      if (value) {
        this.snackBar.open('Film créé !', 'OK', {duration: 5 * 1000});
      }
      this.dialogRef.close();
    })
  }
}
