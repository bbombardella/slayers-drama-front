import {Component, Inject, LOCALE_ID} from '@angular/core';
import {TableColumns} from "../../shared/ui/table-paginated/table-paginated.component";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ScreeningEntity} from "../../api/models/screening-entity";
import {ScreeningService} from "../../api/services/screening.service";

@Component({
  selector: 'app-admin-screenings',
  templateUrl: './admin-screenings.component.html',
  styleUrls: ['./admin-screenings.component.scss']
})
export class AdminScreeningsComponent {

  readonly columns: TableColumns[] = [
    {
      name: 'ID',
      field: 'id'
    },
    {
      name: 'Cinema',
      field: 'cinema.name'
    },
    {
      name: 'Film',
      field: 'movie.title'
    },
    {
      name: 'Nombre de place',
      field: 'initialAvailableSeats'
    },
    {
      name: 'Début',
      field: 'start',
      pipe: new DatePipe(
        this.locale,
        undefined,
        {
          dateFormat: 'shortTime',
          timezone: ''
        }
      )
    },
    {
      name: 'Fin',
      field: 'end',
      pipe: new DatePipe(
        this.locale,
        undefined,
        {
          dateFormat: 'shortTime',
          timezone: ''
        }
      )
    },
    {
      name: 'Date de création',
      field: 'createdAt',
      pipe: new DatePipe(this.locale)
    }
  ]

  get fetchMethod() {
    return this.screeningService.screeningControllerFindAll.bind(this.screeningService);
  }

  constructor(private readonly screeningService: ScreeningService,
              @Inject(LOCALE_ID) private readonly locale: string,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
  }

  handleClick(screening: ScreeningEntity): void {
    this.router.navigate([screening.id], {relativeTo: this.activatedRoute});
  }
}
