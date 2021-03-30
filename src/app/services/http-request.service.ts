import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GenHttpParams } from '../helpers/util.helper'
import { take, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService implements OnDestroy {
  private _destroyer = new Subject()
  constructor(
    private http: HttpClient
  ) { }

  get(url: string, params?): Promise<any> {
    const param = params ? GenHttpParams(params) : {}
    return new Promise((resolve, reject) => {
      this.http.get(url, param)
        .pipe(
          take(1),
          takeUntil(this._destroyer)
        )
        .subscribe((response) => {
          resolve(response)
        }, (err) => {
          reject(new Error(err.message))
        })
    })
  }

  ngOnDestroy() {
    this._destroyer.next()
    this._destroyer.complete()
  }
}
