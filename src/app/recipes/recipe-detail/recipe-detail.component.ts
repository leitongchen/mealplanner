import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input('displayedRecipe') recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddToShoppingList(): void {
    this.shoppingListService.addIngredientsList(this.recipe.ingredients);
  }
}
