import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {
  private _store$: Subject<string> = new ReplaySubject(1);
  constructor() { }

  public addData(data: string) {
    this._store$.next(data);
  }

  public getData(): Observable<string> {
    return this._store$.asObservable();
  }
}
