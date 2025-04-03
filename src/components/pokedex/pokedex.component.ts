import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { error } from 'console';
import { IPokemon } from '../../interfaces/Ipokemon';
import { PokeCardComponent } from "../poke-card/poke-card.component";

@Component({
  selector: 'app-pokedex',
  imports: [PokeCardComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  constructor(private service: PokemonService) { }

  responseApi!: { pokemons: IPokemon[]; count: number; }

  totalPokemons: number = 0;

  limit = 20; // Nbr d'éléments par page
  offset = 0; // Décalage pour la pagination. Ce qui indique le premier élément récupéré
  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    this.service.getPokemons(this.limit, this.offset).subscribe({
      next: pokemons => {
        this.responseApi = pokemons
        this.totalPokemons = this.responseApi.count
      }
    })
  }

  nextPage(): void {
    this.offset += this.limit;
    this.loadPokemons();
  }

  previousPage(): void {
    this.offset -= this.limit;
    if (this.offset < 0) this.offset = 0
    this.loadPokemons();
  }

  get paginationInfo(): { currentPage: number, lastPage: number } {
    //La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
    const currentPage = Math.floor(this.offset / this.limit) + 1;
    // La fonction Math.ceil() retourne le plus petit entier supérieur ou égal au nombre donné
    const lastPage = Math.ceil(this.totalPokemons / this.limit);

    // return { currentPage: currentPage, lastPage: lastPage }  --> fait la mm chose que la ligne ci-dessous
    return { currentPage, lastPage }
  }

}
