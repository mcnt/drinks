<template>
  <header>
    <div class="infos">
      <section>
        <span>Open at: 8AM to 8PM</span>
        <span>info@yoursite.com</span>
      </section>

      <section>
        <span>(81) 8181-8181</span>
        <span>Rua do Recife Antigo</span>
      </section>
    </div>
    <nav class="flex justify-between items-center">
      <div class="links p-2 md:p-6">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/categories">Categories</nuxt-link>
      </div>
      <Logo />
      <div class="links">
        <nuxt-link class="cta" to="/reservation">Reservation</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
