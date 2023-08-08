import { Categories, CategoryItems } from "@/interfaces/category";
import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: (): {
    categories: Categories[];
    categoryItems: CategoryItems[];
  } => ({
    categories: [],
    categoryItems: [],
  }),
  actions: {
    async fetchCategories() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );

      const { drinks } = await response.json();

      this.categories = drinks;
    },
    async fetchCategoryItems(categoryName: string) {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
          categoryName
        )}`
      );

      const { drinks } = await response.json();

      this.categoryItems = drinks;
    },
  },
});
