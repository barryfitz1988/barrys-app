import {EventEmitter, Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {Recipe} from './recipes.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable({providedIn: 'root'})
export class RecipesService {
    //  private recipe: Recipe[] = [];
    private recipeSelected = new EventEmitter<Recipe>();
    private recipeUpdated = new Subject<Recipe[]>();

    private recipe: Recipe[] = [
        new Recipe(
            'The Grocers Daughter Special',
            'https://img.taste.com.au/decVmkuu/taste/2017/03/chocolate-meringue-layer-cake-124699-1.jpg',
            'This is so yummy',
            [
                new Ingredient('egg', 5),
                new Ingredient('milk', 500),
                new Ingredient('flour', 200)
            ]),
        new Recipe(
            'Barrys Burger',
            'https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg',
            'This is also yummydd',
            [
                new Ingredient('buns', 2),
                new Ingredient('steak meat', 1)
            ]),
    ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipe() {
        return [...this.recipe];
    }


    getRecipeUpdateListener() {
        return this.recipeUpdated.asObservable();
    }

    getRecipeSelectedListener() {
        return this.recipeSelected;
    }


    setRecipe(name: string, imagePath: string,  description: string, ingredients: Ingredient[]) {
        const recipe: Recipe = {name: name,  imagePath: imagePath, description: description, ingredients: ingredients};
        this.recipe.push(recipe);
        this.recipeUpdated.next([...this.recipe]);

    }

    addIngredientsToShoppingList(ingredient: Ingredient[]) {

        this.slService.addIngredientsToList(ingredient);
    }

    getRecipeById(id: number) {
        return this.recipe[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipe.push(recipe);
        this.recipeUpdated.next(this.recipe.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipe[index] = newRecipe;
        this.recipeUpdated.next(this.recipe.slice());
    }

    deleteRecipe(index: number) {
        this.recipe.splice(index, 1);
        this.recipeUpdated.next(this.recipe.slice());
    }


}
