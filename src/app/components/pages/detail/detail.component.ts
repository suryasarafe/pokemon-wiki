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
    // console.log(result)
    this.data = result
  }

  getClass(type: string) {
    switch (type) {
      case 'grass': return 'badge-success'
      case 'poison': return 'badge-purple'
      case 'fire': return 'badge-danger'
      case 'water': return 'badge-primary'
      case 'normal': return 'badge-secondary'
      case 'flying': return 'badge-info'
      case 'ground': return 'badge-brown'
      case 'bug': return 'badge-brown'

      default: return 'badge-danger'
    }
  }
  getKeyObject(data: any = {}) {
    return Object.keys(data)
  }
  isUrl(data: any) {
    if (typeof data == 'string') {
      return true
    } else {
      return false
    }
  }
}
