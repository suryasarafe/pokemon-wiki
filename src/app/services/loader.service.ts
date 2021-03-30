import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public counter: number = 0
  public loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  setLoader() {
    this.counter++
    this.loader.next(true)
  }

  removeLoader() {
    this.counter--
    if (this.counter < 1) {
      this.loader.next(false)
    }
  }
}
