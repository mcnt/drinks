import { Drink } from "@/interfaces/drink";
import { defineStore } from "pinia";

export const useDrinksStore = defineStore("drinks", {
  state: (): {
    drink: {} | Drink;
  } => ({
    drink: () => {},
  }),

  actions: {
    async fetchDrink(drinkId: string) {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
      );

      const { drinks } = await response.json();

      this.drink = drinks[0];
    },
  },
});
