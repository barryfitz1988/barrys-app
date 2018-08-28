import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    private ingredient: Ingredient[] = [];
    private ingredientUpdated = new Subject<Ingredient[]>();


    getIngredient() {
        return [...this.ingredient];
    }


    getIngredientUpdateListener() {
        return this.ingredientUpdated.asObservable();
    }


    setIngredient(name: string, amount: number) {
        const ingredient: Ingredient = {name: name, amount: amount};
        this.ingredient.push(ingredient);
        this.ingredientUpdated.next([...this.ingredient]);

    }
}
