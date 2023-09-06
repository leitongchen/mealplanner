import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  nameInput: string;
  amountInput: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddClick() {
    const ingredient: Ingredient = {
      name: this.nameInput,
      amount: this.amountInput,
    };
    this.shoppingListService.addIngredient(ingredient);
    this.clearInputs();
  }

  clearInputs() {
    this.nameInput = '';
    this.amountInput = 0;
  }
}
