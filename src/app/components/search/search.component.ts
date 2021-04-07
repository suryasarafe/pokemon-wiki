import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonName } from 'src/app/interfaces/default.interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  keyword: string = 'name'
  pokemonName: PokemonName[] = []
  constructor(
    private commonService: CommonService,
    private router: Router
  ) {
    this.pokemonName = this.commonService.pokemonNameList
  }

  async searching(keyword: PokemonName) {
    this.router.navigate([`/pokemon/${keyword.name.toLowerCase()}`])
  }
}
