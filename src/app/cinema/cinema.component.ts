import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CinemaManagerService} from "../shared/services/cinema-manager.service";
import {CinemaEntity} from "../api/models/cinema-entity";
import {CinemaService} from "../api/services/cinema.service";
import {MatSelectionList} from "@angular/material/list";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements AfterViewInit {

  private cinema: CinemaEntity | undefined;
  private selectedCinema: CinemaEntity | undefined;
  public cinemasAvailable: CinemaEntity[] = [];

  @ViewChild('cinemaList')
  public matList!: MatSelectionList;

  constructor(
    public readonly dialogRef: MatDialogRef<CinemaComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private readonly cinemaManagerService: CinemaManagerService,
    private readonly cinemaService: CinemaService,
    private readonly snackBar: MatSnackBar,
  ) {
  }

  ngAfterViewInit(): void {
    this.cinemaManagerService.getCinema().subscribe(
      (c) => {
        this.cinema = c;
      });

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
