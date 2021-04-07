import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PokemonName } from 'src/app/interfaces/default.interface';
import { CommonService } from 'src/app/services/common.service';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit, OnDestroy {
  private _destroyer = new Subject()
  list: PokemonName[] = []
  limit: number = 8
  nextUrl: string = ''
  previousUrl: string = ''

  constructor(
    private http: HttpRequestService,
    private commonService: CommonService,
    private router: Router
  ) {
    this.commonService.pokemonList.pipe(
      takeUntil(this._destroyer)
    ).subscribe(list => {
      this.list = list
    })
  }

  ngOnInit() {
    this.getPokemonList(0, this.limit)
  }

  async getPokemonList(offset: number, limit: number) {
    const url = `${environment.baseUrl}pokemon?offset=${offset}&limit=${limit}`
    const result = await this.http.get(url)
    this.commonService.setPokemonList(result.results)
    this.nextUrl = result.next
    this.previousUrl = result.previous
  }

  async getPokemonListNext(url) {
    const result = await this.http.get(url)
    this.commonService.setPokemonList(result.results)
    this.nextUrl = result.next
    this.previousUrl = result.previous
  }

  async getDetail(data) {
    this.router.navigate([`/pokemon/${data.name}`])
  }

  source(url: string) {
    const split = url.split('/')
    if (split) {
      return `${environment.baseImg}sprites/master/sprites/pokemon/${split[6]}.png`
    } else {
      return ``
    }
  }

  ngOnDestroy() {
    this._destroyer.next()
    this._destroyer.complete()
  }
}
