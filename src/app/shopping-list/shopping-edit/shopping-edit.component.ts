import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ShoppingListService} from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent  {

    constructor( public shoppingListService: ShoppingListService) {}

    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.shoppingListService.setIngredient(form.value.name, form.value.amount);
        form.resetForm();
    }


}
