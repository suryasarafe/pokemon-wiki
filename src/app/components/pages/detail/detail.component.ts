import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit, OnDestroy {
  private _destroyer = new Subject()
  data = {}
  constructor(
    private route: ActivatedRoute,
    private http: HttpRequestService,
  ) {
    this.route.params.pipe(
      take(1),
      takeUntil(this._destroyer)
    ).subscribe(params => {
      console.log(params)
      this.getDetail(params['name'])
    })
  }

  ngOnInit() { }

  ngOnDestroy() {
    this._destroyer.next()
    this._destroyer.complete()
  }

  async getDetail(name: string) {
    const url = `${environment.baseUrl}pokemon/${name}`
    const result = await this.http.get(url).catch(e => { return {} })
    console.log(result)
    this.data = result
  }

}
