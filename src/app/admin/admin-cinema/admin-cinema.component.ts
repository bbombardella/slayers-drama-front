import {Component, Inject, LOCALE_ID} from '@angular/core';
import {CinemaService} from "../../api/services/cinema.service";
import {TableColumns} from "../../shared/ui/table-paginated/table-paginated.component";
import {DatePipe} from "@angular/common";
import {CinemaEntity} from "../../api/models/cinema-entity";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-cinema',
  templateUrl: './admin-cinema.component.html',
  styleUrls: ['./admin-cinema.component.scss']
})
export class AdminCinemaComponent {

  readonly columns: TableColumns[] = [
    {
      name: 'ID',
      field: 'id'
    },
    {
      name: 'Nom',
      field: 'name'
    },
    {
      name: 'Ville',
      field: 'city'
    },
    {
      name: 'Date de création',
      field: 'createdAt',
      pipe: new DatePipe(this.locale)
    }
  ]

  get fetchMethod() {
    return this.cinemaService.cinemaControllerFindAll.bind(this.cinemaService);
  }

  constructor(private readonly cinemaService: CinemaService,
              @Inject(LOCALE_ID) private readonly locale: string,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
  }

  handleClick(cinema: CinemaEntity): void {
    this.router.navigate([cinema.id], {relativeTo: this.activatedRoute});
  }
}
