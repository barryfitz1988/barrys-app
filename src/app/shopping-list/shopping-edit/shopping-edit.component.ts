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

    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.shoppingListService.setIngredient(form.value.name, form.value.amount);
        form.resetForm();
    }


}
