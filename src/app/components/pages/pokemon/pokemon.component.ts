import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {
  list: [] = []
  limit: number = 8

  constructor(
    private http: HttpRequestService
  ) { }

  ngOnInit() {
    this.getPokemonList(0, this.limit)
  }

  async getPokemonList(offset: number, limit: number) {
    const url = `${environment.baseUrl}pokemon?offset=${offset}&limit=${limit}`
    const result = await this.http.get(url)
    this.list = result.results
    console.log(this.list)
  }

  async getDetail(url) {
    const result = await this.http.get(url)
    console.log(result)
  }

  source(url: string) {
    const split = url.split('/')
    if (split) {
      return `${environment.baseImg}sprites/master/sprites/pokemon/${split[6]}.png`
    } else {
      return ``
    }
  }
}
