import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';
import {RecipesService} from './recipes.service';



@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers: [RecipesService]
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  constructor(private recipeService: RecipesService) { }


      ngOnInit() {
          this.recipeService.getRecipeSelectedListener()
              .subscribe(
              (recipe: Recipe) => {
                  this.selectedRecipe = recipe;
              }
          );

      }

      ngOnDestroy() {
          this.recipeService.getRecipeSelectedListener()
              .unsubscribe();

      }
  }


