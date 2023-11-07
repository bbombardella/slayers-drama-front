import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MovieEntity} from "../../../api/models/movie-entity";
import {ScreeningEntity} from "../../../api/models/screening-entity";
import {ChipComponent} from "../chip/chip.component";
import {CartModalComponent} from "../cart-modal/cart-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {CartManagerService} from "../../services/cart-manager.service";
import {CinemaManagerService} from "../../services/cinema-manager.service";

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss'],
  standalone: true,
  imports: [CommonModule, ChipComponent],
})
export class ScreeningComponent implements OnInit {

  @Input()
  public movie!: MovieEntity;

  public orderedScreening: Array<orderedScreening> = [];

  constructor(
    public dialog: MatDialog,
    private readonly cartManager: CartManagerService,
    private readonly cinemaManager: CinemaManagerService,
  ) {
  }

  public ngOnInit(): void {
    console.log('screening : ', this.screening)
    this.orderedScreening = this.updateOrderedScreening();
    this.cinemaManager.cinemaUpdated$.subscribe(() => {
      this.orderedScreening = this.updateOrderedScreening();
    });
    console.log('orderedScreening : ', this.orderedScreening)
  }

  get screening(): Array<ScreeningEntity> {
    return this.movie.screenings;
  }

  get cinemaId(): number {
    return this.cinemaManager.getCinema()?.id ?? -1;
  }

  public updateOrderedScreening(): Array<orderedScreening> {
    this.orderedScreening = [];
    if (!this.screening) return this.orderedScreening;
    //\\
    this.screening
      .filter((s: ScreeningEntity) =>
        //if cinema is not selected, show all screenings
        this.cinemaManager.getCinema() === undefined || s.cinema?.id === this.cinemaId
      )
      .forEach((screening: ScreeningEntity) => {
        if (this.orderedScreening.find((os: orderedScreening) =>
          os.date.getDay() === new Date(Date.parse(screening.start)).getDay()) == null) {
          this.orderedScreening.push({
            date: new Date(Date.parse(screening.start)),
            screenings: [screening]
          });
        } else {
          this.orderedScreening.find((os: orderedScreening) =>
            os.date.getDay() === new Date(Date.parse(screening.start)).getDay())?.screenings.push(screening);
        }
      });
    return this.orderedScreening;
  }

  public chipClicked(screening: ScreeningEntity): void {
    if (!screening.active) return;
    console.log('chipClicked : ', screening)
    this.cartManager.addScreeningToCart(screening);
    const dialogRef = this.dialog.open(CartModalComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

/**
 * flemme d'y foutre ailleurs
 * */
export interface orderedScreening {
  date: Date;
  screenings: Array<ScreeningEntity>;
}
