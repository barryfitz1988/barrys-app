import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
        private route: ActivatedRoute,
        private recipeService: RecipesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log(this.editMode);
          this.initForm();

        }
    );
  }

  private initForm() {
     let recipeName = '';
     let recipeImagePath = '';
     let recipeDescription = '';
     let recipeIngredients = new FormArray([]);

     if (this.editMode) {
         const recipe = this.recipeService.getRecipeById(this.id);
         recipeName = recipe.name;
         recipeDescription = recipe.description;
         recipeImagePath = recipe.imagePath;

     }
      this.recipeForm = new FormGroup({
         'name': new FormControl(recipeName),
          'imagePath': new FormControl(recipeImagePath),
          'description': new FormControl(recipeDescription)
      });

  }

  onSubmit() {
      console.log(this.recipeForm);
  }

}
