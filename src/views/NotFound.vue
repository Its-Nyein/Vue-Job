<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="text-center flex flex-col justify-center items-center h-96">
      <i class="pi pi-exclamation-triangle text-red-600 text-5xl mb-5"></i>
      <h1 class="text-4xl font-bold mb-4">404 Not Found</h1>
      <p class="mb-5 text-lg">This page does not exist</p>
      <RouterLink
        to="/"
        class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
        >Go Back</RouterLink
      >
    </section>
</template>