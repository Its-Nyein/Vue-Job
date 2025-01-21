<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container m-auto pt-4 px-6">
        <RouterLink
          to="/jobs"
          class="text-green-500 hover:text-green-600 flex items-center"
        >
          <i class="pi pi-arrow-circle-left mr-2"></i> Back to Job Listings
        </RouterLink>
      </div>
</template>