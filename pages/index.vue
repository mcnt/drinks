<template>
  <div>
    <section class="text-center text-white p-4 md:p-16">
      <h1 class="text-5xl mb-2 uppercase">Welcome</h1>
      <p class="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </section>
    <div class="container mx-auto mt-6">
      <ul class="grid gap-4 md:grid-cols-4">
        <li v-for="(category, i) in resumeCategories" :key="i">
          <nuxt-link
            :to="`/categories/${encodeURIComponent(category.strCategory)}`"
            class="p-4 md:p-7 flex flex-col rounded-xl border bg-white shadow-sm h-auto w-auto"
          >
            <h3 class="text-lg font-bold text-gray-800 hover:text-[#f58549]">
              {{ category.strCategory }}
            </h3>
            <span
              class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#772f1a] hover:text-[#f58549]"
            >
              view drinks
            </span>
          </nuxt-link>
        </li>
      </ul>
      <div class="flex justify-center">
        <nuxt-link
          class="mt-6 bg-yellow-800 hover:yellow-500 text-white rounded-lg px-6 py-3"
          to="/categories"
        >
          View all categories
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCategoriesStore } from "~/stores/categories";

const store = useCategoriesStore();

const resumeCategories = store.categories
  .slice(0, 9)
  .filter((c) => c.strCategory !== "Other / Unknown");

onMounted(async () => {
  await store.fetchCategories();
});
</script>
