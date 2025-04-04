import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { IPokemon } from '../interfaces/Ipokemon';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  private getResumePokemons(limit: number, offset: number): Observable<{ count: number, results: { name: string, count: number }[] }> {
    return this.http.get<{ count: number, results: { name: string, count: number }[] }>(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  private getPokemonByName(name: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.baseUrl}/pokemon/${name}`)
  }

  public getPokemons(limit: number, offset: number): Observable<{ pokemons: IPokemon[], count: number }> {
    return this.getResumePokemons(limit, offset).pipe(
      switchMap(data => {
        const pokemonRequests = data.results.map(pokemon => this.getPokemonByName(pokemon.name));

        return forkJoin(pokemonRequests).pipe(
          map(pokemons => { return { pokemons: pokemons, count: data.count } })
        )
      })
    )
  }
}
