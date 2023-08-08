<template>
  <div>
    <section class="text-center text-white p-4 md:p-16">
      <h1 class="text-5xl mb-2 uppercase">{{ drink.strDrink }}</h1>
      <p class="text-lg">{{ drink.strCategory }}</p>
    </section>
    <div class="container mx-auto mt-6">
      <div class="grid md:grid-cols-4 gap-12">
        <div>
          <img :src="drink.strDrinkThumb" alt="" />
        </div>
        <div class="col-span-3">
          <!--  -->
          <div class="grid grid-cols-6">
            <div class="col-span-6">
              <h2 class="text-4xl mb-4">Ingredients</h2>
            </div>
            <img
              v-for="(ing, i) in ingredients"
              :key="i"
              :src="`https://www.thecocktaildb.com/images/ingredients/${ing}-Medium.png`"
              alt=""
            />
          </div>
          <!--  -->
          <h4 class="text-2xl mt-4">{{ drink.strAlcoholic }}</h4>
          <p class="text-lg">{{ drink.strInstructions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useDrinksStore } from "~/stores/drinks";

const store = useDrinksStore();
const route = useRoute();

const drink = store.drink;
let ingredients: Array<string> = [];

const drinkId: string = Array.isArray(route.params.id)
  ? route.params.id[0]
  : route.params.id;

for (let key in drink) {
  if (drink[key] && key.startsWith("strIngredient")) {
    ingredients.push(drink[key]);
  }
}

onMounted(async () => {
  await store.fetchDrink(drinkId);
});
</script>
