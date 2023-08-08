<template>
  <div>
    <section class="text-center text-white p-4 md:p-16">
      <h1 class="text-5xl mb-2 uppercase">{{ categoryName }}</h1>
      <p class="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </section>

    <div class="container mx-auto mt-6">
      <section class="grid md:grid-cols-4 gap-4">
        <div v-for="(item, i) in store.categoryItems" :key="i" class="p-2">
          <nuxt-link
            :to="`/drinks/${item.idDrink}`"
            class="flex flex-col rounded-xl border bg-white shadow-sm"
          >
            <img :src="item.strDrinkThumb" class="h-auto rounded-t-xl" alt="" />
            <h5 class="text-center text-lg mt-4">{{ item.strDrink }}</h5>
            <span
              class="mt-3 inline-flex items-center justify-center gap-2 rounded-b-xl border border-transparent bg-[#772f1a] px-4 py-3 text-sm font-semibold text-white"
            >
              show details
            </span>
          </nuxt-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "~/stores/categories";

const route = useRoute();
const store = useCategoriesStore();

const categoryName: string = Array.isArray(route.params.id)
  ? route.params.id[0]
  : route.params.id;

onMounted(async () => {
  await store.fetchCategoryItems(categoryName);
});
</script>
