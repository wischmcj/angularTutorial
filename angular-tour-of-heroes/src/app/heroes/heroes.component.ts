import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../the-real-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  selectedHero?: Hero;

  heroes: Hero[] = [];
  
  hero: Hero = {
    id:1,
    name: 'Windstrom'
  };
  
  constructor(private heroService:HeroService, private messageService:MessageService) {

  }
ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
    this .messageService.add(`HeroesComponent : Selected hero id=${hero.id}`)
  }



  getHeros() : void{
    this.heroService.getHeroes()
                    .subscribe(heroes => this.heroes = heroes);
  }

  

}
