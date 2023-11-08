import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {CinemaManagerService} from "../../services/cinema-manager.service";
import {CinemaEntity} from "../../../api/models/cinema-entity";
import {CinemaService} from "../../../api/services/cinema.service";
import {MatListModule, MatSelectionList} from "@angular/material/list";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-cinema-modal',
  templateUrl: './cinema-modal.component.html',
  styleUrls: ['./cinema-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule
  ],
})
export class CinemaModalComponent implements AfterViewInit {

  private cinema: CinemaEntity | undefined;
  private selectedCinema: CinemaEntity | undefined;
  public cinemasAvailable: CinemaEntity[] = [];

  @ViewChild('cinemaList')
  public matList!: MatSelectionList;

  constructor(
    public readonly dialogRef: MatDialogRef<CinemaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private readonly cinemaManagerService: CinemaManagerService,
    private readonly cinemaService: CinemaService,
    private readonly snackBar: MatSnackBar,
  ) {
  }

  ngAfterViewInit(): void {
    this.cinema = this.cinemaManagerService.getCinema();

    this.cinemaService.cinemaControllerFindAll().subscribe(
      (r) => {
        this.cinemasAvailable = r.data as CinemaEntity[];
      });
  }

  public get currentCinema(): CinemaEntity {
    return this.cinema ?? this.defaultCinema;
  }

  public get defaultCinema(): CinemaEntity {
    return {
      id: -1,
      createdAt: '---',
      city: '---',
      name: '---',
      updatedAt: '---',
      active: true,
    }
  }

  cinemaSelected(cinema: CinemaEntity) {
    this.selectedCinema = cinema;
  }

  public ok(): void {
    if (this.selectedCinema) {
      this.cinemaManagerService.setCinema(this.selectedCinema);
      this.snackBar.open(`Cinéma selectionné ${this.selectedCinema.name}`, 'OK', {duration: 2000})
      this.dialogRef.close(this.currentCinema);
    } else {
      this.snackBar.open(`Cinéma invalide`, 'OK', {duration: 2000})
    }
  }

  public cancel(): void {
    this.dialogRef.close();
  }

}
