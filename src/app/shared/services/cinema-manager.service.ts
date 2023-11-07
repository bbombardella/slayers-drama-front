import {Injectable} from '@angular/core';
import {CinemaService} from "../../api/services/cinema.service";
import {CinemaEntity} from "../../api/models/cinema-entity";
import {Storage} from "@ionic/storage-angular";
import {from, Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CinemaManagerService {

  private subject: Subject<void> = new Subject<void>();

  constructor(
    private readonly cinemaService: CinemaService,
  ) {
  }

  public setCinema(c: CinemaEntity): void {
    localStorage.setItem('cinema', JSON.stringify(c));
    this.subject.next();
  }

  public getCinema(): CinemaEntity | undefined {
    return localStorage.getItem('cinema') ? JSON.parse(localStorage.getItem('cinema') as string) : undefined;
  }

  get cinemaUpdated$(): Subject<void> {
    return this.subject;
  }
}
