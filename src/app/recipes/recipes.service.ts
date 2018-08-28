import {EventEmitter, Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {Recipe} from './recipes.model';


@Injectable({providedIn: 'root'})
export class RecipesService {
    //  private recipe: Recipe[] = [];
    private recipeSelected = new EventEmitter<Recipe>();
    private recipeUpdated = new Subject<Recipe[]>();

    private recipe: Recipe[] = [
        new Recipe('Cake', 'Tasty', 'https://img.taste.com.au/decVmkuu/taste/2017/03/chocolate-meringue-layer-cake-124699-1.jpg')
    ];


    getRecipe() {
        return [...this.recipe];
    }


    getRecipeUpdateListener() {
        return this.recipeUpdated.asObservable();
    }

    getRecipeSelectedListener() {
        return this.recipeSelected;
    }


    setRecipe(name: string, description: string, imagePath: string) {
        const recipe: Recipe = {name: name, description: description, imagePath: imagePath};
        this.recipe.push(recipe);
        this.recipeUpdated.next([...this.recipe]);

    }
}
