import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MovieEntity} from "../../../api/models/movie-entity";
import {Form, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators} from "@angular/forms";
import {MovieService} from "../../../api/services/movie.service";

@Component({
  selector: 'app-movie-editor-modal',
  templateUrl: './movie-editor-modal.component.html',
  styleUrls: ['./movie-editor-modal.component.scss']
})
export class MovieEditorModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MovieEntity,
    private readonly movieService: MovieService,
    private readonly dialogRef: MatDialogRef<MovieEditorModalComponent>,
  ) {
  }

  form: FormGroup = new FormGroup<any>({
    title: new FormControl(this.data.title),
    voteAverage: new FormControl(Number(this.data.voteAverage) ?? 0),
    tagline: new FormControl(this.data.tagline),
    releaseDate: new FormControl(this.data.releaseDate),
    overview: new FormControl(this.data.overview),
    duration: new FormControl(this.data.duration),
  });


  ngOnInit(): void {
    this.form
  }

  public save(): void {
    this.movieService.movieControllerUpdate(
      {
        id: this.data.id,
        body: {
          title: this.form.get('title')?.value ?? this.data.title,
          voteAverage: this.form.get('voteAverage')?.value ?? this.data.voteAverage ?? -1,
          tagline: this.form.get('tagline')?.value ?? this.data.tagline,
          releaseDate: new Date(this.form.get('releaseDate')?.value).toDateString() ?? this.data.releaseDate,
          overview: this.form.get('overview')?.value ?? this.data.overview,
          duration: this.form.get('duration')?.value ?? this.data.duration,
          popularity: this.data.popularity ?? -1,
          published: this.data.published,
          budget: this.data.budget ?? -1,
        }
      }
    ).subscribe(() => this.dialogRef.close());
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
