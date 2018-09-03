import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ShoppingListService} from '../shopping-list.service';
import { Subscription } from '../../../../node_modules/rxjs';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit   {
    subscription: Subscription;
    editMode = false;
    editItemIndex: number;
    editedItem: Ingredient;
    @ViewChild('postForm') shoppingListForm: NgForm;

    constructor( public shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this.shoppingListService.ingredientEdited
        .subscribe(
            (index: number) => {
                this.editItemIndex = index;
                this.editMode = true;
                this.editedItem = this.shoppingListService.getIngredientByIndex(index);
                this.shoppingListForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                });
            }
        );
    }

    onChange(form: NgForm) {
        const newIngredient = new Ingredient(form.value.name, form.value.amount);

        if (form.invalid) {
            return;
        }
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient );
        } else {
            this.shoppingListService.setIngredient(form.value.name, form.value.amount);
        }
        this.editMode = false;
        form.resetForm();
    }

    onClear() {
        this.shoppingListForm.reset();
        this.editMode = false;
    }


    onDelete() {
        this.shoppingListService.deleteIngredient(this.editItemIndex);
        this.shoppingListForm.reset();
    }

}
