import {Injectable} from '@angular/core';
import {CinemaService} from "../../api/services/cinema.service";
import {CinemaEntity} from "../../api/models/cinema-entity";
import {Storage} from "@ionic/storage-angular";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CinemaManagerService {

  constructor(
    private readonly cinemaService: CinemaService,
    private readonly localStorage: Storage,
    private readonly snackBar: MatSnackBar,
  ) {
    this.localStorage.create();
  }

  public setCinema(c: CinemaEntity): void {
    this.localStorage.set('cinema', JSON.stringify(c));
  }

  public getCinema(): Observable<CinemaEntity> {
    return from(this.localStorage.get('cinema') ?? '{}').pipe(
      map((c) => JSON.parse(c) as CinemaEntity),
    );
  }
}
