import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';
import {RecipesService} from './recipes.service';



@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  constructor() { }


      ngOnInit() {
          // this.recipeService.getRecipeSelectedListener()
          //     .subscribe(
          //     (recipe: Recipe) => {
          //         this.selectedRecipe = recipe;
          //     }
          // );

      }

      ngOnDestroy() {
          // this.recipeService.getRecipeSelectedListener()
          //     .unsubscribe();

      }
  }


