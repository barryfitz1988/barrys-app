import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Subscription} from 'rxjs';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit, OnDestroy {

    ingredients: Ingredient[] = [];
    private ingredientSub: Subscription;

    constructor(public ingredientService: ShoppingListService) {}

    ngOnInit() {
        this.ingredients = this.ingredientService.getIngredient();
        this.ingredientSub = this.ingredientService.getIngredientUpdateListener()
            .subscribe((ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            });
    }

    ngOnDestroy() {
        this.ingredientSub.unsubscribe();

    }

}
