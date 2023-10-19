import {Injectable} from '@angular/core';
import {CinemaService} from "../../api/services/cinema.service";
import {CinemaEntity} from "../../api/models/cinema-entity";

@Injectable({
  providedIn: 'root'
})
export class CinemaManagerService {

  constructor(
    private readonly cinemaService: CinemaService,
    private readonly localStorage: Storage,
  ) {
  }

  public setCinema(c: CinemaEntity): void {
    this.localStorage.setItem('cinema', JSON.stringify(c));
  }

  public getCinema(): CinemaEntity {
    return JSON.parse(this.localStorage.getItem('cinema') ?? '{}');
  }
}
