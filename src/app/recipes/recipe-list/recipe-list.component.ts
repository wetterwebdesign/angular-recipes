import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this is a test', 'https://www.gannett-cdn.com/-mm-/1fecae5856e58374cc9e1c0fd6dcc3c6aae79d4e/c=0-293-5760-3547/local/-/media/2018/07/17/IAGroup/DesMoines/636674359927753055-0717-NEW-STATEFAIR-FOODS-00029.jpg?width=3200&height=1680&fit=crop'),
    new Recipe('Another Test Recipe', 'this is another test', 'https://cdn.vox-cdn.com/thumbor/gcLdEduI29mEc9RhG7_l9GDaZb4=/0x0:844x844/1200x800/filters:focal(355x355:489x489)/cdn.vox-cdn.com/uploads/chorus_image/image/54896147/bud_and_marilyns.0.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
