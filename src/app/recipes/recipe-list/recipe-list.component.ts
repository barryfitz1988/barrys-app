import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Cake', 'Tasty', 'https://img.taste.com.au/decVmkuu/taste/2017/03/chocolate-meringue-layer-cake-124699-1.jpg')
    ];
  constructor() { }

  ngOnInit() {
  }

}
