import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ScreeningService} from "../../../api/services/screening.service";
import {ScreeningEntity} from "../../../api/models/screening-entity";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-screening-editor-modal',
  templateUrl: './screening-editor-modal.component.html',
  styleUrls: ['./screening-editor-modal.component.scss']
})
export class ScreeningEditorModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ScreeningEntity,
    private readonly screeningService: ScreeningService,
    private readonly dialogRef: MatDialogRef<ScreeningEditorModalComponent>,
  ) {}

  form: FormGroup = new FormGroup<any>({
    seats: new FormControl(this.data.initialAvailableSeats),
    start: new FormControl(this.data.start ?? 0),
    end: new FormControl(this.data.end ?? 0),
    movieId: new FormControl(this.data.movieId),
  });

  ngOnInit() {
  }

  public save(): void {
    this.screeningService.screeningControllerUpdate(
      {
        id: this.data.id,
        body: {
          initialAvailableSeats: this.form.get('seats')?.value ?? this.data.initialAvailableSeats,
          start: new Date(this.form.get('start')?.value).toDateString() ?? this.data.start,
          end: new Date(this.form.get('end')?.value).toDateString() ?? this.data.end,
          movieId: this.form.get('movieId')?.value ?? this.data.movieId,
          active: this.data.active ?? false,
          cinemaId: this.data.cinemaId ?? -1,
        }
      }
    ).subscribe(() => this.dialogRef.close());
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
