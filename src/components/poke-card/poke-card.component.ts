import { Component, Input } from '@angular/core';
import { IPokemon } from '../../interfaces/Ipokemon';

@Component({
  selector: 'app-poke-card',
  imports: [],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.css'
})
export class PokeCardComponent {

  // @Input() pokemon?: IPokemon
  @Input() pokemon: IPokemon | undefined

}
