import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../the-real-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  
  hero: Hero = {
    id:1,
    name: 'Windstrom'
  };
  
  selectedHero?: Hero;

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
    
  }

  constructor() { }


  ngOnInit(): void {
  }

}
