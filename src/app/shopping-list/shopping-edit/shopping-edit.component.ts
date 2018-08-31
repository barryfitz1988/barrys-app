import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ShoppingListService} from '../shopping-list.service';
import { Subscription } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy  {
    subscription: Subscription;

    constructor( public shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this.shoppingListService.ingredientEdited.subscribe();
    }

    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.shoppingListService.setIngredient(form.value.name, form.value.amount);
        form.resetForm();
    }


}
