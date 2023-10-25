import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MovieEntity} from "../../../api/models/movie-entity";
import {ScreeningEntity} from "../../../api/models/screening-entity";
import {ChipComponent} from "../chip/chip.component";

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss'],
  standalone: true,
  imports: [CommonModule, ChipComponent],
})
export class ScreeningComponent {

  @Input()
  public movie!: MovieEntity;

  constructor() {
  }

  get screening(): Array<ScreeningEntity> {
    return this.movie.screenings;
  }

  get orderedScreening(): Array<orderedScreening> {
    let orderedScreening: Array<orderedScreening> = [];
    if (!this.screening) return orderedScreening;
    //\\
    this.screening.forEach((screening: ScreeningEntity) => {
      if (orderedScreening.find((os: orderedScreening) =>
        os.date.getDay() === new Date(Date.parse(screening.start)).getDay()) == null) {
        orderedScreening.push({
          date: new Date(Date.parse(screening.start)),
          screenings: [screening]
        });
      } else {
        orderedScreening.find((os: orderedScreening) =>
          os.date.getDay() === new Date(Date.parse(screening.start)).getDay())?.screenings.push(screening);
      }
    });
    return orderedScreening;
  }

  public chipClicked(screening: ScreeningEntity): void {
    console.log('chipClicked : ', screening)
  }
}

/**
 * flemme d'y foutre ailleurs
 * */
interface orderedScreening {
  date: Date;
  screenings: Array<ScreeningEntity>;
}
