import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipesBook: Recipe[] = [
    {
      name: 'Lasagne',
      desc: 'Deliziosa lasagna alla bolognese, strati di pasta, ragù di carne e formaggio fuso, un classico piatto italiano che conquista ogni palato.',
      imagePath: 'https://pinchandswirl.com/wp-content/uploads/2021/05/Lasagna-with-Cottage-Cheese_.jpg',
      ingredients: [
        {
          name: 'Lasagne Barilla',
          amount: 1,
        },
        {
          name: 'Cipolla',
          amount: 1,
        },
        {
          name: 'Sedano',
          amount: 0.5,
        },
        {
          name: 'Carota',
          amount: 1,
        },
      ],
    },
    {
      name: 'Pizza',
      desc: 'Pizza fragrante con crosta croccante, salsa di pomodoro, formaggio filante e una varietà di gustosi ingredienti, una gioia per il gusto e gli occhi.',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      ingredients: [
        {
          name: 'Farina 00',
          amount: 10,
        },
        {
          name: 'Lievito',
          amount: 1,
        },
        {
          name: 'Mozzarella',
          amount: 1,
        },
        {
          name: 'Passata di pomodoro',
          amount: 1,
        },
        {
          name: 'Foglie di basilico',
          amount: 10,
        },
      ],
    },
    {
      name: 'Spaghetti al pesto',
      desc: 'Deliziosi spaghetti conditi con un pesto fragrante e cremoso. Un piatto italiano classico che conquista il palato con ogni boccone.',
      imagePath: 'https://www.gutekueche.at/storage/media/recipe/103390/conv/spaghetti-al-pesto-default.jpg',
      ingredients: [
        {
          name: 'Spaghetti',
          amount: 10,
        },
        {
          name: 'Basilico',
          amount: 10,
        },
        {
          name: 'Pinoli',
          amount: 10,
        },
        {
          name: 'Parmigiano Reggiano',
          amount: 1,
        },
      ],
    },
  ];

  getRecipes() {
    return this.recipesBook.slice();
  }
}
