import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    {
      name: 'banana',
      amount: 2,
    },
    {
      name: 'kiwi',
      amount: 10,
    },
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsList(ingredients: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...ingredients];
  }
}
