import {EventEmitter, Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
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

    // this is only added because of the course section 10 lecture 111
    // not 100% if he will use this but I will leave it here for completion sake

    addIngredient(ingredient: Ingredient) {
        this.ingredient.push(ingredient);
        this.ingredientsChanged.emit(this.ingredient.slice());

    }

    addIngredientsToList(ingredient: Ingredient[]) {
        this.ingredient.push(...ingredient);
        this.ingredientsChanged.emit(this.ingredient.slice());

    }
}
